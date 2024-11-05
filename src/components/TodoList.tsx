import { useDispatch, useSelector } from "react-redux";
import { ITask, ITaskWithoutText } from "../types";
import TodoItem from "./TodoItem";
import { RootState } from "../store/store";
import { toggleTaskCompletion } from "../store/features/tasksSlice";

const TodoList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const handleCheckbox = ({ id, isCompleted }: ITaskWithoutText) => {
    dispatch(toggleTaskCompletion({ id, isCompleted }));
  };

  const totalCompleted = tasks.filter((task) => task.isCompleted);
  return (
    <section style={{ border: "4px solid orange" }}>
      <h1>Redux Todo List</h1>
      <h2>
        Total items completed: {totalCompleted.length}/{tasks.length}
      </h2>
      {tasks.map((todo: ITask, idx) => (
        <TodoItem key={idx} todo={todo} handleCheckbox={handleCheckbox} />
      ))}
    </section>
  );
};

export default TodoList;
