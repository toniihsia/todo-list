import React from 'react';
import { requestTodos } from "./actions/todo_actions";

class TodoListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li>
        {this.props.todo.title}
      </li>
    );

  }
}
