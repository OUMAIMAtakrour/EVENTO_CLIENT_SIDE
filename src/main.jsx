import React from "react";
import ReactDOM from "react-dom/client"; // Use react-dom/client for React 18
import { Provider } from "react-redux";
import store from "./Store/reducers"; // Path to your store.js
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../src/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  
      <App />
   
  </Provider>
);
