import { createAsyncThunk } from "@reduxjs/toolkit";
import {articlesActions} from "../slices/index.js";

export const getFetchArticleByID = createAsyncThunk(
  "articles/getArticleByID",
  async (id, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
      const res = await extra.api.get(`/article/${id}`);

     if (res.data) {
         dispatch(articlesActions.setSelected(res.data))
     }
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
