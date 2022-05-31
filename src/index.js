import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ModalProvider } from "./Context/ModalContext";
import { LoadingProvider } from "./Context/LoadingContext";
import ScrollToTop from "./components/ScrollTop";
import { MenuMobileProvider } from "./Context/MenuMobileContext";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoadingProvider>
        <MenuMobileProvider>
          <ModalProvider>
            <ScrollToTop />
            <App />
          </ModalProvider>
        </MenuMobileProvider>
      </LoadingProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
