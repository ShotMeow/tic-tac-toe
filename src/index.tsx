import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";

import "./app/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
