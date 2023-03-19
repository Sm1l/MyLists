import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import modalReducer from "./modalSlice";
import singleListReducer from "./singleListSlice";

export default configureStore({
  reducer: {
    lists: listReducer,
    modal: modalReducer,
    singleList: singleListReducer,
  },
});
