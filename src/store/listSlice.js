import { createSlice } from "@reduxjs/toolkit";
import createId from "../helpers/createId";

const listSlice = createSlice({
  name: "list",
  initialState: {
    lists: [],
  },
  reducers: {
    addList(state, action) {
      // console.log(state);
      // console.log(action);
      state.lists.push({
        id: createId(),
        name: action.payload.name,
        number: 0,
        // isActive: false,
        listItemIsActive: false, //todo менять здесь
      });
    },
    // toggleListItemIsActive(state, action) {
    //   state.lists.listItemIsActive = !listItemIsActive;
    // },
  },
});

export const { addList } = listSlice.actions;

export default listSlice.reducer;
