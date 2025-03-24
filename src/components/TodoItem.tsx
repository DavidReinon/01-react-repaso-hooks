import React from "react";
import { TodoState, TodoAction } from "../services/todoReducer";

interface Props {
    todo: TodoState;
    dispatch: React.Dispatch<TodoAction>;
}

export default function TodoItem({ todo, dispatch }: Props) {
    return (
        <li style={{ marginBottom: 3 }}>
            <p
                onClick={() => dispatch({ type: "EDIT", payload: todo.id })}
                style={{
                    marginRight: 1,
                    textDecorationLine: todo.done ? "line-through" : "",
                }}
            >
                {todo.text}
            </p>
            <button
                onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}
            >
                Eliminar
            </button>
        </li>
    );
}
