import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";

export default configureStore({
  reducer: {
    lists: listReducer,

    //user: userReducer...и т.п.
  },
});
