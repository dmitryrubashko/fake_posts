import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import MainLayout from "../shared/commonComponents/MainLayout";
import store from "../shared/store";
import Pages from "../pages";

import "./global.scss";
import "./_variables.scss";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <Pages />
          </MainLayout>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
export default App;
