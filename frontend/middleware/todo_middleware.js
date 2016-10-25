import { REQUEST_TODOS, RECEIVE_TODOS, receiveTodos } from "../actions/todo_actions";
import {fetchTodos} from "../util/todo_api_util";

export default ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case REQUEST_TODOS:
      const success = data => dispatch(receiveTodos(data));
      const error = e => console.log(e);
      fetchTodos(success, error);
      break;

    default:
      next(action);
  }
};
