import { useReducer, useEffect, useState } from "react";
import { todoReducer, TodoAction, TodoState } from "../services/todoReducer";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";

const initialState: TodoState[] = JSON.parse(
    localStorage.getItem("todos") || "[]"
);

export default function TodoApp() {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state));
    }, [state]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodo.trim() === "") return;
        dispatch({ type: "ADD", payload: newTodo });
        setNewTodo("");
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
            }}
        >
            <div>
                <h3>Lista de Tareas</h3>
                <TodoList todos={state} dispatch={dispatch} />
            </div>
            <form onSubmit={handleAdd}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button style={{ marginLeft: 10 }} type="submit">
                    Añadir
                </button>
            </form>
        </div>
    );
}
