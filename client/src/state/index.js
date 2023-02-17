import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  posts: [],
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      console.log(action);
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("Friends doesnt exist");
      }
    },
    setPosts: (state, action) => {
      console.log(action);
      state.posts = action.payload;
    },
    setPost: (state, action) => {
      console.log(action);
      const updatedPost = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPost;
    },
  },
});

export const { setMode, setPosts, setPost, setLogin, setLogout, setFriends } =
  authSlice.actions;
export default authSlice.reducer;
