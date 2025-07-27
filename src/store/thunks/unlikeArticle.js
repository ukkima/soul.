import { createAsyncThunk } from "@reduxjs/toolkit";

export const unlikeArticle = createAsyncThunk(
    "articles/unlikeArticles",
    async (id, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const res = await extra.api.patch(`/article/${id}/unlike`);

            console.log(res);
        } catch (err) {
            return rejectWithValue(err.message);
        }
    },
);
