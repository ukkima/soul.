import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./styles/index.scss";
import { ModalRouterProvider } from "./contexts/ModalRouterContext.jsx";

import i18n from "./utils/i18n.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ModalRouterProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalRouterProvider>
  </StrictMode>
);
