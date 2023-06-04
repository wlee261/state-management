import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoCompleted } from "../actions/todos";

const Todo = ({ todo, completed, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleChange = () => {
    dispatch(toggleTodoCompleted(id));
  };
  return (
    <div>
      <span>{todo}</span>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <button onClick={handleDelete}>x</button>
    </div>
  );
};

export default Todo;
