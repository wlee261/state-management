import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import Todo from "./Todo";
import { allTodos, uncompletedTodos } from "../selectors/todos";

const TodoList = () => {
  const showCompleted = useSelector((state) => state.filter);
  const todos = useSelector(allTodos);
  const uncompleted = useSelector(uncompletedTodos);

  let todosToDisplay = showCompleted ? todos : uncompleted;

  useEffect(() => {
    todosToDisplay = showCompleted ? todos : uncompleted;
    console.log(todosToDisplay);
  }, [showCompleted]);

  return (
    <div>
      Todo List
      {todosToDisplay.map((todoItem) => {
        return (
          <Todo
            key={todoItem.id}
            todo={todoItem.todo}
            id={todoItem.id}
            completed={todoItem.completed}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
