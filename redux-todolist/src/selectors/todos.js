import { createSelector } from "reselect";

const todos = (state) => state.todos;

// export const uncompletedTodos = (state) => {
//   const todos = state.todos;
//   return todos.filter((todoItem) => {
//     return !todoItem.completed;
//   });
// };

export const allTodos = (state) => {
  return state.todos;
};

export const uncompletedTodos = createSelector([todos], (todos) => {
  return todos.filter((todoItem) => {
    return !todoItem.completed;
  });
});
