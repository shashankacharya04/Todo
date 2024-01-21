import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";
import todoformcss from "../Components/TodoForm.module.css";
function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className={todoformcss.todoform}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className={todoformcss.submitbtn}>
        ➕
      </button>
    </form>
  );
}

export default TodoForm;
