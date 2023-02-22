import React from "react";
import ReactDomClient from "react-dom/client";
import { App } from "../src/App";

// 同构注水
ReactDomClient.hydrateRoot(document.getElementById("root"), <App></App>);
