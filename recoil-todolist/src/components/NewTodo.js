import React, { useState } from "react";

import { useSetRecoilState } from "recoil";
import { todosState } from "../recoil_state";

let id = 0;
function getId() {
  id += 1;
  return id;
}

const NewTodo = () => {
  const [todoText, setTodoText] = useState("");
  const setTodosState = useSetRecoilState(todosState);

  const handleCreateTodo = () => {
    setTodosState((todos) => [
      ...todos,
      { todo: todoText, completed: false, id: getId() },
    ]);
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
