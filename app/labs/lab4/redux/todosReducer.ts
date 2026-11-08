import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ReduxTodo = { id: string; title: string };

// id "" means the form is adding a new todo; any other id means editing that todo.
export const emptyReduxTodo: ReduxTodo = { id: "", title: "Learn Mongo" };

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: "1", title: "Learn HTML" },
      { id: "2", title: "Learn CSS" },
      { id: "3", title: "Learn JavaScript" },
    ] as ReduxTodo[],
    todo: emptyReduxTodo,
  },
  reducers: {
    setTodo: (state, action: PayloadAction<ReduxTodo>) => {
      state.todo = action.payload;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ id: crypto.randomUUID(), title: action.payload });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<ReduxTodo>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) todo.title = action.payload.title;
    },
  },
});

export const { setTodo, addTodo, deleteTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;