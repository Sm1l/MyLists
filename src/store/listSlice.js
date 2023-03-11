import { createSlice } from "@reduxjs/toolkit";
import createId from "../helpers/createId";

const listSlice = createSlice({
  name: "list",
  initialState: {
    lists: JSON.parse(localStorage.getItem("MyLists")) || [],
  },
  reducers: {
    addList(state, action) {
      state.lists.push({
        list: action.payload.list,
        listId: createId(),
        tasks: [],
        inputIsActive: false,
        listItemIsActive: false,
      });
    },
    addTaskToList(state, action) {
      state.lists
        .find((item) => item.listId === action.payload.listId)
        .tasks.unshift({ task: action.payload.task, taskIsChecked: false, taskId: createId() });
      //!тяжело

      // state.lists.tasks.push({ task: action.payload.task, taskIsChecked: false, taskId: createId() });
      // state.lists.push(1);
    },
    toggleTaskIsChecked(state, action) {
      // const list = state.lists.find((item) => item.listId === action.payload.listId);
      // console.log("list: ", list);
      // const toggledTask = list.find((task) => task.taskId === action.payload.taskId);
      // toggledTask.taskIsChecked = !toggledTask.taskIsChecked;

      state.lists
        .find((item) => item.listId === action.payload.listId)
        .tasks.find((task) => task.taskId === action.payload.taskId).taskIsChecked = !state.lists
        .find((item) => item.listId === action.payload.listId)
        .tasks.find((task) => task.taskId === action.payload.taskId).taskIsChecked;
      //!это ужас
    },
    toggleInputIsActive(state, action) {
      state.lists.find((item) => item.listId === action.payload.listId).inputIsActive = !state.lists.find(
        (item) => item.listId === action.payload.listId
      ).inputIsActive;
    },

    toggleListItemIsActive(state, action) {
      state.lists.find((item) => item.listId === action.payload.listId).listItemIsActive = !state.lists.find(
        (item) => item.listId === action.payload.listId
      ).listItemIsActive;

      state.lists
        .filter((item) => item.listId !== action.payload.listId)
        .map((item) => (item.listItemIsActive = false));

      state.lists.map((item) => (item.inputIsActive = false)); //*закрываем input
    },

    removeTask(state, action) {
      const list = state.lists.find((item) => item.listId === action.payload.listId);
      list.tasks = list.tasks.filter((task) => task.taskId !== action.payload.taskId);
    },
  },
});

export const { addList, addTaskToList, toggleTaskIsChecked, toggleInputIsActive, toggleListItemIsActive, removeTask } =
  listSlice.actions;

export default listSlice.reducer;
