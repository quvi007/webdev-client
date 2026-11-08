"use client";

import ZustandCounter from "./ZustandCounter";
import ZustandProfileForm from "./ZustandProfileForm";
import ZustandTodoList from "./ZustandTodoList";

export default function ZustandExamples() {
  return (
    <div id="wd-zustand-examples">
      <h2>Zustand</h2>
      <ZustandCounter />
      <ZustandTodoList />
      <ZustandProfileForm />
      <hr />
    </div>
  );
}