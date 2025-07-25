import { createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN_KEY } from "../../consts/localStorage.js";
import { authActions } from "../slices/index.js";

export const getFetchAuthUser = createAsyncThunk(
  "user/getAuthUser",
  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;
    try {
      const res = await extra.api.get("/auth/refreshToken");

      localStorage.setItem(TOKEN_KEY, res.data.accessToken);
      dispatch(authActions.setAuth(res.data));
    } catch (err) {
      console.log(err)
      rejectWithValue(err.message);
    }
  },
);
