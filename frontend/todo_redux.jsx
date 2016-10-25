import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTodos } from './util/todo_api_util';
import configureStore from './store/store';
import { requestTodos } from "./actions/todo_actions";
import {allTodos} from "./reducers/selector";
import Root from "./components/root";
// import {rootReducer} from "

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.allTodos = allTodos;
  window.store = store;
  window.requestTodos = requestTodos;
  const rootEl = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, rootEl);
});
