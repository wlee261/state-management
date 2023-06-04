import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const NewTodo = () => {
  const todosContext = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");
  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      todosContext.addTodo({ todo: todoText, completed: false });
      setTodoText("");
    }
  };

  return (
    <div>
      <span>Create New Todo</span>
      <input
        onKeyDown={handleKeyDown}
        value={todoText}
        onChange={handleChange}
      />
    </div>
  );
};

export default NewTodo;
