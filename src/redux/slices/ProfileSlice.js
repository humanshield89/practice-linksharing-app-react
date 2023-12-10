import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  links: [],
  isLoading: false,
  originalProfile: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setProfile: (state, action) => {
      state.firstName = action.payload.firstName || "";
      state.lastName = action.payload.lastName || "";
      state.email = action.payload.email || "";
      state.links = action.payload.links || [];
    },
    setOriginalProfile: (state, action) => {
      state.originalProfile.firstName = action.payload.firstName || "";
      state.originalProfile.lastName = action.payload.lastName || "";
      state.originalProfile.email = action.payload.email || "";
      state.originalProfile.links = action.payload.links || [];
    },
    addLink: (state, action) => {
      state.links.push(action.payload);
    },
    removeLink: (state, action) => {
      state.links.splice(action.payload, 1);
    },
    updateLink: (state, action) => {
      const index = action.payload.index;
      if (index < 0 || index >= state.links.length) return;
      if (action.payload.name !== undefined)
        state.links[index].name = action.payload.name;
      if (action.payload.url !== undefined)
        state.links[index].url = action.payload.url;
      if (action.payload.error !== undefined)
        state.links[index].error = action.payload.error;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  addLink,
  removeLink,
  updateLink,
  setProfile,
  setOriginalProfile,
} = profileSlice.actions;

export default profileSlice.reducer;
