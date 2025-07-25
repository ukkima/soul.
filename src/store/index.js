import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice.js";
import { articlesReducer } from "./slices/articlesSlice.js";
import { $api } from "../api/index.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    articles: articlesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }),
  devTools: true,
});
