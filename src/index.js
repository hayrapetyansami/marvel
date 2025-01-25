import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";

import App from "./components/app/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <App />
);