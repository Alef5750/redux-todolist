import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask, ITaskWithoutText } from "../../types";

const initialTodos: ITask[] = [
  {
    id: 1,
    text: "Buy tickets",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Pack",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Journal",
    isCompleted: false,
  },
  {
    id: 4,
    text: "Finish Redux course",
    isCompleted: false,
  },
];

interface TaskState {
  tasks: ITask[];
}
const initialState: TaskState = {
  tasks: initialTodos, // only managing one value in the state, and it's the array of tasks
};

export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    toggleTaskCompletion: (state, action: PayloadAction<ITaskWithoutText>) => {
      const { id, isCompleted } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted } : task
      );
    },
  },
});

export const { toggleTaskCompletion } = TasksSlice.actions; // for the components
export default TasksSlice.reducer;
