import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {Object} Link
 * @property {string} name
 * @property {string} url
 * @property {string} error
 */

/**
 * @typedef {Object} Profile
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} profilePicture
 * @property {Link[]} links
 */

/**
 * @typedef {Object} ProfileState
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} profilePicture
 * @property {Link[]} links
 * @property {boolean} isLoading
 * @property {Profile} originalProfile
 */

/**
 * @type {ProfileState}
 */
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  profilePicture: "",
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
    setProfilePicture: (state, action) => {
      state.profilePicture = action.payload;
    },
    setProfile: (state, action) => {
      state.firstName = action.payload.firstName || "";
      state.lastName = action.payload.lastName || "";
      state.email = action.payload.email || "";
      state.links = action.payload.links || [];
      state.profilePicture = action.payload.profilePicture || "";
    },
    setOriginalProfile: (state, action) => {
      state.originalProfile.firstName = action.payload.firstName || "";
      state.originalProfile.lastName = action.payload.lastName || "";
      state.originalProfile.email = action.payload.email || "";
      state.originalProfile.links = action.payload.links || [];
      state.originalProfile.profilePicture =
        action.payload.profilePicture || "";
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
  setProfilePicture,
  removeLink,
  updateLink,
  setProfile,
  setOriginalProfile,
} = profileSlice.actions;

export default profileSlice.reducer;
