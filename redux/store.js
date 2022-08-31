import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesSlice";
import coursesReducer from "./slices/coursesSlice";
import funFactsReducer from "./slices/funFactsSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    courses: coursesReducer,
    funFacts: funFactsReducer,
  },
});
