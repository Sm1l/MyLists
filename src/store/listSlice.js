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
        list: action.payload.list,
        listId: createId(),
        tasks: [], //todo отдельный reducer addList?
        unputIsActive: false,
        listItemIsActive: false, //todo менять здесь
        //! setlocalStorage
      });
    },
    addTaskToList(state, action) {
      state.lists
        .find((item) => item.id === action.payload.listId)
        .tasks.push({ task: action.payload.task, taskIsChecked: false, taskId: createId() });

      // state.lists.tasks.push({ task: action.payload.task, taskIsChecked: false, taskId: createId() });
      // state.lists.push(1);
    },

    toggleListItemIsActive(state, action) {},

    // checkListItemIsActive()

    // toggleListItemIsActive(state, action) {
    //   state.lists.listItemIsActive = !listItemIsActive;
    // },
  },
});

export const { addList, addTaskToList, toggleListItemIsActive } = listSlice.actions;

export default listSlice.reducer;
