import React from "react";
import ReactDomClient from "react-dom/client";
import routes from "../src/App";
import { BrowserRouter } from "react-router-dom";
// import store from "../src/store";
import { getClientStore } from "../src/store";
import { Provider } from "react-redux";

const store = getClientStore()
// 同构注水
ReactDomClient.hydrateRoot(
  document.getElementById("root"),
  <Provider store={store}>
    <BrowserRouter>
      {routes.map((route) => (
        <Route {...route}></Route>
      ))}
    </BrowserRouter>
  </Provider>
);
