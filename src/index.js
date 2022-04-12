import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import MainLayout from "./shared/commonComponents/MainLayout";
import Pages from "./pages";
import store from "./shared/store";

import "./global.scss";
import "./_variables.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/*<MainLayout>*/}
        <Pages />
        {/*</MainLayout>*/}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
