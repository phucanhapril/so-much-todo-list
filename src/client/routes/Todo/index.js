import React, { Component } from 'react';
import TodoList from '../../components/TodoList';
import { TodoUtils } from '../../../utils';

import '../../../assets/react-toolbox/theme.css';
import './styles.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    // TODO move to redux if time permits
    this.state = {
      todos: [
        { id: 0, text: 'coding assignment', done: false },
        { id: 1, text: 'clean the house', done: false },
        { id: 2, text: 'create redux-saga tutorial', done: false }
      ]
    };
  }
  
  handleItemAdd = text => {
    const { todos } = this.state;
    const maxID = todos.reduce(TodoUtils.getMaxID, 0);
    this.setState({
      todos: [
        ...todos,
        { id: maxID + 1, text, done: false }
      ]
    });
  }
  
  handleItemRemove = item => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(t => t.id !== item.id)
    });
  }
  
  handleItemCheckbox = item => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.filter(t => t.id !== item.id),
        { ...item, done: !item.done }
      ]
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="Todo">
        <h1 className="Todo__title">
          So Much To Do List
          <span role="img" aria-label="snail"> 🐌</span>
        </h1>
        <TodoList
          items={todos}
          onItemAdd={this.handleItemAdd}
          onItemRemove={this.handleItemRemove}
          onItemCheckboxClick={this.handleItemCheckbox}
        />
      </div>
    );
  }
}

export default Todo;
