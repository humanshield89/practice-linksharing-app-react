import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  session: null,
  isLoaded: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.session = action.payload.session;
      state.isLoaded = true;

      saveAuthToLocalStorage(action.payload);
    },
    setAuthLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { setAuth, setAuthLoaded } = authSlice.actions;

export default authSlice.reducer;

export function saveAuthToLocalStorage(auth) {
  localStorage.setItem("auth", JSON.stringify(auth));
}

export function getAuthFromLocalStorage() {
  const auth = localStorage.getItem("auth");
  return auth ? JSON.parse(auth) : null;
}
