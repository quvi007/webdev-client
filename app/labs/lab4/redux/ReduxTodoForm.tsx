import { useDispatch, useSelector } from "react-redux";
import { addTodo, emptyReduxTodo, setTodo, updateTodo } from "./todosReducer";
import type { RootState } from "./store";

export default function ReduxTodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  const editing = todo.id !== "";
  return (
    <div id="wd-redux-todo-form" className="mb-2 flex flex-wrap gap-2">
      <input
        id="wd-redux-todo-title"
        className="rounded border border-neutral-300 px-2 py-1"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
      <button
        type="button"
        id="wd-redux-add-todo"
        className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
        onClick={() => {
          if (editing) {
            dispatch(updateTodo(todo));
          } else {
            dispatch(addTodo(todo.title));
          }
          dispatch(setTodo(emptyReduxTodo));
        }}
      >
        {editing ? "Update" : "Add"}
      </button>
    </div>
  );
}
