import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DataContextProvider from "./componentes/DataContext";
// import DataFetchProvider from "./componentes/DataFetchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);
