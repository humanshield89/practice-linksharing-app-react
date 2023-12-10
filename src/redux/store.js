import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import ProfileSlice from "./slices/ProfileSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    profile: ProfileSlice,
  },
});
