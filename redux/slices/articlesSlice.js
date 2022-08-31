import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    allArticles: [],
  },
  reducers: {
    setAllArticles: (state, action) => {
      state.allArticles = action.payload;
    },
  },
});

export const { setAllArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
