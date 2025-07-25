import { createAsyncThunk } from "@reduxjs/toolkit";

export const signupAuthUser = createAsyncThunk(
  "user/signupUser",
  async (dateForm, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      await extra.api.post("/auth/register", dateForm);

    } catch (err) {
      rejectWithValue(err.message);
    }
  },
);
