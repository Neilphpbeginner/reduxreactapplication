import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Importing the Provider component from react redux witch we will require to
// successfully setup our redux store. And to ensure the whole application has access
// to the relevant slices of state each component requires to function correctly.
import { Provider } from "react-redux";
// Importing the newly created store implimentation we have just created using the
// configureStore function.
import store from "../src/store/store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Implimenting the Provider component, and passing our store as one of its props
  // to sure the store is correcly implimented and initiated.
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
