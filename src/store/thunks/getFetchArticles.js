import { createAsyncThunk } from "@reduxjs/toolkit";
import {articlesActions} from "../slices/index.js";

export const getFetchArticles = createAsyncThunk(
  "articles/getArticles",
  async (data, thunkAPI) => {
    const { rejectWithValue, extra, dispatch } = thunkAPI;

    try {
      const res = await extra.api.get("/article/getAll");

      dispatch(articlesActions.setList(res.data));
    } catch (err) {
      rejectWithValue(err.message);
    }
  },
);
