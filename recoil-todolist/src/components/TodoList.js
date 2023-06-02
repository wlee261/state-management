import React from "react";

import { useRecoilValue } from "recoil";
import { showAllTodosState, todosState } from "../recoil_state";

import Todo from "./Todo";

const TodoList = () => {
  const todos = useRecoilValue(todosState);
  const showAllTodos = useRecoilValue(showAllTodosState);
  const renderAllTodos = () => {
    return todos.map(({ todo, completed, id }, index) => {
      return <Todo key={index} todo={todo} completed={completed} id={id} />;
    });
  };

  const renderUncompletedTodos = () => {
    return todos.map(({ todo, completed, id }, index) => {
      if (!completed) {
        return <Todo key={index} todo={todo} completed={completed} id={id} />;
      } else {
        return null;
      }
    });
  };

  return (
    <div>{showAllTodos ? renderAllTodos() : renderUncompletedTodos()}</div>
  );
};

export default TodoList;
