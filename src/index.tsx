import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router";
import {router} from "./routers/router";
import {Provider} from "react-redux";
import {store} from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);


reportWebVitals();
