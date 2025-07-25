import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginAuthUser = createAsyncThunk(
  "user/loginUser",
  async (dateForm, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      await extra.api.post("/auth/login", dateForm);

    } catch (err) {
      rejectWithValue(err.message);
    }
  },
);
