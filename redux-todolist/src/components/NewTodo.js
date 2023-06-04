import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../actions/todos";

const NewTodo = () => {
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  const handleCreateTodo = () => {
    dispatch(addTodo({ todo: todoText, completed: false }));
    setTodoText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCreateTodo();
    }
  };

  return (
    <div>
      <span>Create New Todo</span>
      <div>
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleCreateTodo}>Create</button>
      </div>
    </div>
  );
};

export default NewTodo;
