import React, { useEffect } from "react";

import { useSetRecoilState } from "recoil";
import { todosState } from "../recoil_state";

const Todo = ({ todo, completed, id }) => {
  const setTodosState = useSetRecoilState(todosState);

  const handleDelete = () => {
    setTodosState((todosState) =>
      todosState.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleChange = () => {
    setTodosState((todosState) => {
      return todosState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
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
