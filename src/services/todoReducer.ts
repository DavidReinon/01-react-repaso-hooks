export interface TodoState {
    id: number;
    text: string;
    done: boolean;
}

export type TodoAction =
    | { type: "ADD"; payload: string }
    | { type: "REMOVE"; payload: number }
    | { type: "EDIT"; payload: number };

export function todoReducer(
    state: TodoState[],
    action: TodoAction
): TodoState[] {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                { id: Date.now(), text: action.payload, done: false },
            ];
        case "REMOVE":
            return state.filter((todo) => todo.id !== action.payload);
        case "EDIT":
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, done: !todo.done };
                }
                return todo;
            });
        default:
            return state;
    }
}
