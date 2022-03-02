import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter} from "react-router-dom";

import Routes from './shared/routes/routes';
import MainLayout from "./shared/commonComponents/MainLayout";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Routes/>
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
