import TodoItem from "./TodoItem";
import { TodoState } from "../services/todoReducer";

interface Props {
  todos: TodoState[];
  handleEditTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

export default function TodoList({ todos, handleEditTodo, handleDeleteTodo }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}  />
      ))}
    </ul>
  );
}
