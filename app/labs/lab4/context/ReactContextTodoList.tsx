"use client";

import { useState } from "react";
import { useTodosContext, type Todo } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [todo, setTodo] = useState<Todo>({ id: "", title: "" });

  const add = () => {
    if (!todo.title.trim()) return;
    addTodo(todo.title);
    setTodo({ id: "", title: "" });
  };

  const update = () => {
    if (!todo.id || !todo.title.trim()) return;
    updateTodo(todo);
    setTodo({ id: "", title: "" });
  };

  const remove = (id: string) => {
    deleteTodo(id);
    if (todo.id === id) setTodo({ id: "", title: "" });
  };

  return (
    <div id="wd-react-context-todo-list" className="max-w-md">
      <h3>My Todo List</h3>
      <ul className="divide-y rounded border border-neutral-300">
        <li className="flex items-center gap-2 p-2">
          <input
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            placeholder="New todo"
            id="wd-context-todo-title"
            className="flex-1 rounded border border-neutral-300 px-3 py-1.5"
          />
          <button
            type="button"
            onClick={update}
            disabled={!todo.id}
            id="wd-context-todo-update-click"
            className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium disabled:opacity-50"
          >
            Update
          </button>
          <button
            type="button"
            onClick={add}
            id="wd-context-todo-add-click"
            className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            Add
          </button>
        </li>
        {todos.map((t) => (
          <li key={t.id} className="flex items-center gap-2 p-2">
            <span className="flex-1">{t.title}</span>
            <button
              type="button"
              onClick={() => setTodo(t)}
              id={`wd-context-todo-edit-${t.id}`}
              className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => remove(t.id)}
              id={`wd-context-todo-delete-${t.id}`}
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
