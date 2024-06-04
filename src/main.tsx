import React from "react";
import ReactDOM from "react-dom/client";
import Middlewares from "./middleware";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Middlewares />
  </React.StrictMode>,
);
