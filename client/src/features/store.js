import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../features/categories/categoriesSlice";
import userSlice from "./userProfile/userProfileSlice";


export const store = configureStore({
  reducer: {
    profile: CategorySlice,
    user: userSlice
  },
});