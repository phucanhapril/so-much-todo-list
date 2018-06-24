import React, { Component } from 'react';
import TodoList from '../../components/TodoList';

import '../../../assets/react-toolbox/theme.css';
import './styles.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    // TODO move to redux
    this.state = {
      todo: [
        { id: 0, text: 'coding assignment', done: false },
        { id: 1, text: 'clean the house', done: false },
        { id: 2, text: 'create redux-saga tutorial', done: false }
      ]
    };
  }
  
  handleItemCheckbox = item => {
    const { todo } = this.state;
    this.setState({
      todo: [
        ...todo.filter(t => t.id !== item.id),
        { ...item, done: !item.done }
      ]
    });
  }

  render() {
    const { todo } = this.state;
    return (
      <div className="Todo">
        <h1>
          so much to do list
          <span role="img" aria-label="snail"> 🐌</span>
        </h1>
        <TodoList
          items={todo}
          onItemCheckboxClick={this.handleItemCheckbox}
        />
      </div>
    );
  }
}

export default Todo;
