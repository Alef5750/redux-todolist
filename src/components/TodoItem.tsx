import { ITask, ITaskWithoutText } from "../types";

const TodoItem = ({
  todo,
  handleCheckbox,
}: {
  todo: ITask;
  handleCheckbox: ({ id, isCompleted }: ITaskWithoutText) => void;
}) => {
  return (
    <div style={{ backgroundColor: "yellow", border: "3px solid green" }}>
      <h2>
        ({todo.id}) {todo.text}
      </h2>
      <input
        type="checkbox"
        id="completed"
        checked={todo.isCompleted}
        onChange={(e) =>
          handleCheckbox({ id: todo.id, isCompleted: e.target.checked })
        }
      />
      <label htmlFor="completed">Completed</label>
    </div>
  );
};

export default TodoItem;
