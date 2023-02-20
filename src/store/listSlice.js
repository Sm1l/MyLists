import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    lists: [],
  },
  reducers: {
    addList(state, action) {
      console.log(state);
      console.log(action);
      state.lists.push({ id: new Date().toISOString(), name: action.payload.name, number: 0, isActive: false });
    },
  },
});

export const { addList } = listSlice.actions;

export default listSlice.reducer;
