import { atom, selector } from "recoil";

const todosState = atom({
  key: "todosState",
  default: [],
});

const showAllTodosState = atom({
  key: "showAllTodosState",
  default: true,
});

const completedTodosState = selector({
  key: "completedTodosState",
  get: ({ get }) => {
    const todos = get(todosState);
    return todos.filter((todo) => {
      return todo.completed;
    });
  },
});

export { todosState, showAllTodosState, completedTodosState };
