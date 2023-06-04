import React, { useContext } from "react";

import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const todosContext = useContext(TodoContext);
  const todos = todosContext.todos;
  return (
    <div>
      {todos.map((todoItem) => {
        return (
          <Todo
            key={todoItem.index}
            completed={todoItem.completed}
            todo={todoItem.todo}
            id={todoItem.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
