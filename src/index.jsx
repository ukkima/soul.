import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./styles/index.scss";
import { ModalRouterProvider } from "./contexts/ModalRouterContext.jsx";
import i18n from "./utils/i18n.js";
import { Provider } from "react-redux";
import { store } from "./store";
import 'react-loading-skeleton/dist/skeleton.css'

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ModalRouterProvider>
          <App />
        </ModalRouterProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
