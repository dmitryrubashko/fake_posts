import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter} from "react-router-dom";

import Routes from './routes/routes';
import MainLayout from "./commonComponents/mainLayout/mainLayout";

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
