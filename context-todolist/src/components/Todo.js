import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = ({ todo, completed, id }) => {
  const todosContext = useContext(TodoContext);
  const handleChange = () => {
    todosContext.toggleTodoCompleted(id);
  };
  const handleClick = () => {
    todosContext.deleteTodo(id);
  };

  return (
    <div>
      <span>{todo}</span>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <button onClick={handleClick}>x</button>
    </div>
  );
};

export default Todo;
