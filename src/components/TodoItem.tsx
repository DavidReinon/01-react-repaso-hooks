import { TodoState } from "../services/todoReducer";
interface Props {
    todo: TodoState;
    handleEditTodo: (id: number) => void;
    handleDeleteTodo: (id: number) => void;
}

export default function TodoItem({
    todo,
    handleEditTodo,
    handleDeleteTodo,
}: Props) {
    return (
        <li style={{ marginBottom: 3 }}>
            <div>
                <p
                    onClick={() => handleEditTodo(todo.id)}
                    style={{
                        textDecorationLine: todo.done ? "line-through" : "",
                    }}
                >
                    {todo.text}
                </p>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                    Eliminar
                </button>
            </div>
        </li>
    );
}
