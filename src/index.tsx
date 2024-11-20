import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { firebaseApp, FieldValue } from "./lib/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebaseApp, FieldValue }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
