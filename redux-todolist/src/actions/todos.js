export const addTodo = (todoItem) => {
  return { type: "todos/create", payload: todoItem };
};

export const deleteTodo = (todoItemId) => {
  return { type: "todos/delete", payload: todoItemId };
};

export const toggleTodoCompleted = (todoItemId) => {
  return { type: "todos/toggleCompleted", payload: todoItemId };
};
