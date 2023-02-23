import React from "react";
import ReactDomServer from "react-dom/server";
import express from "express";
import * as fs from "fs";
import { StaticRouter, matchPath, Route } from "react-router-dom";
// import App from "../src/App";
import routes from "../src/App";
import { Provider } from "react-redux";
// import store from "../src/store";
import { getServerStore } from "../src/store";
const store = getServerStore();
const app = express();

app.use(express.static("public"));

// ssr 没有事件绑定，需要注水
// app.get("/", (req, res) => {
//   const component = ReactDomServer.renderToString(<App />);
//   const htmlTemplate = fs.readFileSync("./index.html").toString();
//   res.send(htmlTemplate.replace("slot", component));
// });

// ssr 没有事件绑定，需要注水
app.get("*", (req, res) => {
  // 根据路由渲染出来的组件，拿到 loadData 方法
  const promises = [];
  routes.some((route) => {
    const match = matchPath(req.url, route);
    if (match) {
      const { loadData } = route.component;
      if (loadData) promises.push(loadData(store));
    }
    return match;
  });
  Promise.all(promises).then(() => {
    const component = ReactDomServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          {routes.map((route) => (
            <Route {...route}></Route>
          ))}
        </StaticRouter>
      </Provider>
    );
    res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div id="root">${component}</div>
        <script src="/bundle.js"></script>
        <script>window.__context=${JSON.stringify(store.getState())}</script>
        </script>
      </body>
    </html>
    `);
  });
});

app.listen(3000, () => {
  console.log("listen at port 3000");
});
