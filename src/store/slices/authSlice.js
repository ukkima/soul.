import { createSlice } from "@reduxjs/toolkit";
import { getFetchAuthUser, loginAuthUser } from "../thunks/index.js";
import { signupAuthUser } from "../thunks/signupAuthUser.js";
import {updateAuthUser} from "../thunks/updateAuthUser.js";

const initialState = {
  user: null,
  accessToken: "",
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    setUser: (state, action) => {
      state.user.avatar = action.payload.avatar || "";
      state.user.fullname = action.payload.fullname;
      state.user.username = action.payload.username;
    },
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFetchAuthUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getFetchAuthUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getFetchAuthUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(signupAuthUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signupAuthUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(signupAuthUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(loginAuthUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginAuthUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(loginAuthUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(updateAuthUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateAuthUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(updateAuthUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
