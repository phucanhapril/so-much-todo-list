import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input/Input';
import TodoListItem from '../TodoListItem';
import { TodoUtils } from '../../../utils';
import './styles.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
  }

  render() {
    const {
      onClearCompleted,
      onTodoComplete,
      onTodoAdd,
      onTodoClear,
      todos
    } = this.props;
    const { newTodo } = this.state;
    const activeTodos = todos.filter(t => !t.completed);
    return (
      <div className="TodoList">
        <div className="TodoList__add-todo">
          <Input
            className="TodoList__add-todo-input"
            type="text"
            label="Add something to do..."
            value={newTodo}
            onChange={value => this.setState({ newTodo: value })}
            onKeyPress={e => {
              if (e.key === 'Enter' && newTodo.trim() !== '') {
                onTodoAdd(newTodo);
                this.setState({ newTodo: '' });
              }
            }}
          />
        </div>
        <div className="TodoList__toolbar">
          <span>
            {activeTodos.length
              ? `${activeTodos.length} thing${activeTodos.length > 1 ? 's' : ''} `
              : 'Nothing '
            }to do!
          </span>
          <span
            className="TodoList__clear-completed"
            onClick={() => onClearCompleted()}
          >
            Clear completed
          </span>
        </div>
        <div className="TodoList__todos">
          {todos.sort(TodoUtils.compareByID).map(todo => (
            <TodoListItem
              todo={todo}
              onComplete={onTodoComplete}
              onClear={onTodoClear}
              key={todo.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

TodoList.defaultProps = {
  onClearCompleted: () => {},
  onTodoAdd: () => {},
  onTodoClear: () => {},
  onTodoComplete: () => {}
};

TodoList.propTypes = {
  onClearCompleted: PropTypes.func,
  onTodoAdd: PropTypes.func,
  onTodoClear: PropTypes.func,
  onTodoComplete: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool
  })).isRequired
};

export default TodoList;
