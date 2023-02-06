import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
import { CustomProvider } from "rsuite";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
  <BrowserRouter>
    <CustomProvider theme="dark">
      <App />
    </CustomProvider>
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
