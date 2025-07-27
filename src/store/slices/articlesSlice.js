import { createSlice } from "@reduxjs/toolkit";
import {getFetchArticleByID, getFetchArticles} from "../thunks/index.js";

const initialState = {
  list: [],
  selected: {},
  loading: false,
  error: null,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    likeArticle: (state, action) => {
      state.selected.likes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFetchArticles.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getFetchArticles.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getFetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
        .addCase(getFetchArticleByID.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(getFetchArticleByID.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(getFetchArticleByID.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  },
});

export const articlesActions = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
