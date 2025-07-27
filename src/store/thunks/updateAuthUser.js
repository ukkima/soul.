import { createAsyncThunk } from "@reduxjs/toolkit";
import { authActions } from "../../store/slices/authSlice.js";
import { imageUpload } from "../../utils/imageUpload";

export const updateAuthUser = createAsyncThunk(
  "user/updateAuthUser",
  async (data, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
      const imageData = await imageUpload(data.avatar);

      const res = await extra.api.patch("/auth/update", {
        ...data,
        avatar: imageData,
      });

      if (res.data) {
        dispatch(authActions.setUser({ ...data, avatar: imageData }));
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);
