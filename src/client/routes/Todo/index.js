import React, { Component } from 'react';
import TodoList from '../../components/TodoList';
import { TodoUtils } from '../../../utils';

import '../../../assets/react-toolbox/theme.css';
import './styles.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  handleTodos = {
    add: text => this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.reduce(TodoUtils.getMaxID, 0) + 1,
          text,
          completed: false
        }
      ]
    }),
    completeOne: todo => this.setState({
      todos: [
        ...this.state.todos.filter(t => t.id !== todo.id),
        { ...todo, completed: !todo.completed }
      ]
    }),
    clearOne: todo => this.setState({
      todos: this.state.todos.filter(t => t.id !== todo.id)
    }),
    clearCompleted: () => this.setState({
      todos: this.state.todos.filter(t => !t.completed)
    })
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="Todo">
        <h1 className="Todo__title">
          So Much To Do List
          <span role="img" aria-label="snail"> 🐌</span>
        </h1>
        <TodoList
          todos={todos}
          onTodoAdd={this.handleTodos.add}
          onTodoComplete={this.handleTodos.completeOne}
          onTodoClear={this.handleTodos.clearOne}
          onClearCompleted={this.handleTodos.clearCompleted}
        />
      </div>
    );
  }
}

export default Todo;
