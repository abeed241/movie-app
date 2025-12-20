import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
 <FavoritesProvider>
  <App/>
 </FavoritesProvider>
  </HashRouter>
);
