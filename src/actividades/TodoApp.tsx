import { useState } from "react";
import TodoList from "../components/TodoList";
import { useTodos } from "../hooks/useTodos";

export default function TodoApp() {
    const { todos, handleDeleteTodo, handleEditTodo, handleNewTodo } =
        useTodos();
    const [newTodo, setNewTodo] = useState("");

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodo.trim() === "") return;
        handleNewTodo(newTodo);
        setNewTodo("");
    };

    return (
        <div
            className="mt-5"
            style={{
                display: "flex",
                justifyContent: "space-evenly",
            }}
        >
            <div>
                <h3>Lista de Tareas</h3>
                <TodoList
                    todos={todos}
                    handleDeleteTodo={handleDeleteTodo}
                    handleEditTodo={handleEditTodo}
                />
            </div>
            <form onSubmit={handleAdd}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button className="btn btn-primary ms-3" type="submit">
                    Añadir
                </button>
            </form>
        </div>
    );
}
