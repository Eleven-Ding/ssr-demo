import React from "react";
import ReactDomServer from "react-dom/server";
import express from "express";
import * as fs from "fs";
import { App } from "../src/App";

const app = express();

app.use(express.static("public"));

// ssr 没有事件绑定，需要注水
app.get("/", (req, res) => {
  const component = ReactDomServer.renderToString(<App />);
  const htmlTemplate = fs.readFileSync("./index.html").toString();
  res.send(htmlTemplate.replace("slot", component));
});

app.listen(3000, () => {
  console.log("listen at port 3000");
});
