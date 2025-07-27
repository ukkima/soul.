import { createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN_KEY } from "../../consts/localStorage.js";

export const logoutAuthUser = createAsyncThunk(
  "user/logoutAuthUser",
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      await extra.api.get("/auth/logout");

      localStorage.removeItem(TOKEN_KEY);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);
