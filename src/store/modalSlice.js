import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalIsVisible: false,
  },
  reducers: {
    toggleModalIsVisible(state) {
      state.modalIsVisible = !state.modalIsVisible;
    },
  },
});
export const { toggleModalIsVisible } = modalSlice.actions;
export default modalSlice.reducer;
