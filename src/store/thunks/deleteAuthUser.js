import { createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN_KEY } from "../../consts/localStorage.js";

export const deleteAuthUser = createAsyncThunk(
  "user/deleteAuthUser",
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {

      await extra.api.delete("/auth/delete");

      localStorage.removeItem(TOKEN_KEY);
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  },
);
