//add todo
//delete todo

// todo: {
//     todo: 'text describing what to do',
//     completed: boolean
//     id: int
// }

const initialState = [
  { todo: "take yoojin for a walk", completed: false, id: 1 },
  { todo: "take yoojin for a poopy", completed: false, id: 2 },
  { todo: "take yoojin for a lunch", completed: true, id: 3 },
];

const getId = () => {
  let id = 3;
  return function returnUpdatedId() {
    id += 1;
    return id;
  };
};

const getUniqueId = getId();

export default function todoReducer(todos = initialState, action) {
  switch (action.type) {
    case "todos/delete":
      return todos.filter((todoItem) => {
        return todoItem.id !== action.payload;
      });
    case "todos/create":
      const todoWithId = { ...action.payload, id: getUniqueId() };
      return [...todos, todoWithId];
    case "todos/toggleCompleted":
      return todos.map((todoItem) => {
        if (todoItem.id === action.payload) {
          return { ...todoItem, completed: !todoItem.completed };
        } else {
          return todoItem;
        }
      });
    default:
      return todos;
  }
}
