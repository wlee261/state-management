import { combineReducers } from "redux";
import todoReducer from "./todos";
import filterReducer from "./filter";

export const allReducers = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});
