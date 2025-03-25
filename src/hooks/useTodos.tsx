import { useEffect, useReducer } from "react";
import { todoReducer, TodoState } from "../services/todoReducer";

export const useTodos = (): {
    todos: TodoState[];
    handleDeleteTodo: (id: number) => void;
    handleEditTodo: (id: number) => void;
    handleNewTodo: (text: string) => void;
} => {
    const initialState: TodoState[] = JSON.parse(
        localStorage.getItem("todos") || "[]"
    );
    const [todosActualState, dispatch] = useReducer(todoReducer, initialState);

    const handleDeleteTodo = (id: number) => {
        dispatch({ type: "REMOVE", payload: id });
    };
    const handleEditTodo = (id: number) => {
        dispatch({ type: "EDIT", payload: id });
    };
    const handleNewTodo = (text: string) => {
        dispatch({ type: "ADD", payload: text });
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todosActualState));
    }, [todosActualState]);

    return {
        todos: todosActualState,
        handleDeleteTodo,
        handleEditTodo,
        handleNewTodo,
    };
};
