import {combineReducers} from "redux";
import TodosReducer from "./todos_reducer";

export const rootReducer = combineReducers({
  todos: TodosReducer
});
