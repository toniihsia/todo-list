import React from 'react';
import { requestTodos } from "./actions/todo_actions";

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.dispatch(requestTodos());
  }

  render(){
    return (
      <ul>
        {this.props.map((todo)=> {
          return <TodoListItem todo={todo}/>;
        })}

      </ul>
    );

  }
}
