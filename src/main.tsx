import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  /* !StrictMode disabled due to causing double useEffect invocations that caused the svelte component to be run twice  */

  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
