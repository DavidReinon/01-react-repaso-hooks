import TodoItem from "./TodoItem";
import { TodoState, TodoAction } from "../services/todoReducer";

interface Props {
  todos: TodoState[];
  dispatch: React.Dispatch<TodoAction>;
}

export default function TodoList({ todos, dispatch }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}
