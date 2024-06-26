import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import store from './store/Store'
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import 'animate.css'; // Importer animate.css
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <React.StrictMode>
    <Provider store={ store }>
        <App />
    </Provider>
  </React.StrictMode>
);







