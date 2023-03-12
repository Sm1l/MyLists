import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import modalReducer from "./modalSlice";

export default configureStore({
  reducer: {
    lists: listReducer,
    modal: modalReducer,
  },
});
