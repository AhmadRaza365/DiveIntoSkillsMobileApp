import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
    name: "courses",
    initialState: {
        allCourses: [],
    },
    reducers: {
        setAllCourses: (state, action) => {
            state.allCourses = action.payload; 
        }
    },
});


export const { setAllCourses } = coursesSlice.actions;
export default coursesSlice.reducer;