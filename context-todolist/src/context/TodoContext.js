import { createContext, useState } from "react";

const initialValue = [
  {
    todo: "yoojin poopy",
    completed: false,
    id: 1,
  },
  {
    todo: "yoojin peepee",
    completed: false,
    id: 2,
  },
  {
    todo: "yoojin eat",
    completed: true,
    id: 3,
  },
];

const getIdFunction = () => {
  let id = 3;
  return () => {
    id += 1;
    return id;
  };
};

const getId = getIdFunction();

const TodoContext = createContext(initialValue);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialValue);
  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: getId() }]);
  };
  const deleteTodo = (todoId) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== todoId;
      })
    );
  };
  const toggleTodoCompleted = (todoId) => {
    setTodos(
      todos.map((todoItem) => {
        if (todoItem.id === todoId) {
          return { ...todoItem, completed: !todoItem.completed };
        } else {
          return todoItem;
        }
      })
    );
  };
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, toggleTodoCompleted }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
