import { createSlice } from "@reduxjs/toolkit";

const funFactSlice = createSlice({
  name: "funFacts",
  initialState: {
    selectedFunFact: "",
  },
  reducers: {
    setSelectedFunFact: (state, action) => {
      state.selectedFunFact = action.payload;
    },
  },
});

export const { setSelectedFunFact } = funFactSlice.actions;
export default funFactSlice.reducer;
