import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "example@this.com",
  username: "this_username",
  user_id: 1,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set the user's details
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.user_id = action.payload.user_id;
    },
    // Action to clear the user's details
    clearUser: (state) => {
      state.email = "";
      state.user_id = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
