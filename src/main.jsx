import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ReservationStateProvider } from "./context/ReservationContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReservationStateProvider>
      <App />
    </ReservationStateProvider>
  </React.StrictMode>
)

reportWebVitals();
