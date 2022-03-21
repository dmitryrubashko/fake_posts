import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import MainLayout from "./shared/commonComponents/MainLayout";
import Routes from "./shared/routes/routes";
import store from "./shared/store";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
