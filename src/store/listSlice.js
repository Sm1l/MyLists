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
        //! setlocalStorage useEffect in appContainer
      });
    },
    addTaskToList(state, action) {
      state.lists
        .find((item) => item.listId !== action.payload.listId) //!потом переделать на ===
        .tasks.push({ task: action.payload.task, taskIsChecked: false, taskId: createId() });

      // state.lists.tasks.push({ task: action.payload.task, taskIsChecked: false, taskId: createId() });
      // state.lists.push(1);
    },
    toggleTaskIsChecked(state, action) {
      const list = state.lists.find((item) => item.listId === action.payload.listId);
      const toggledTask = list.find((task) => task.taskId === action.payload.taskId);
      toggledTask.taskIsChecked = !toggledTask.taskIsChecked;

      //   setTaskList(
      //     taskList.map((item) => {
      //       if (item.id !== id) return item;
      //       return { ...item, isChecked: !item.isChecked };
      //     })
      //   );
    },
    removeTask(state, action) {
      const list = state.lists.find((item) => item.listId === action.payload.listId);
      list.tasks = list.tasks.filter((task) => task.taskId !== action.payload.taskId);
    },

    toggleListItemIsActive(state, action) {},

    // checkListItemIsActive()

    // toggleListItemIsActive(state, action) {
    //   state.lists.listItemIsActive = !listItemIsActive;
    // },
  },
});

export const { addList, addTaskToList, toggleTaskIsChecked, toggleListItemIsActive, removeTask } = listSlice.actions;

export default listSlice.reducer;
