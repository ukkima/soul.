import { createAsyncThunk } from "@reduxjs/toolkit";

export const likeArticle = createAsyncThunk(
  "articles/likeArticles",
  async (id, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
      const res = await extra.api.patch(`/article/${id}/like`);

      console.log(res);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);
