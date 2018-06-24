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
    const { items, onItemAdd, onItemCheckboxClick } = this.props;
    const { newTodo } = this.state;
    return (
      <div className="TodoList">
        <div className="TodoList__add-item">
          <Input
            className="TodoList__add-item-input"
            type="text"
            label="Add something to do..."
            value={newTodo}
            onChange={value => this.setState({ newTodo: value })}
            onKeyPress={e => {
              if (e.key === 'Enter' && newTodo.trim() !== '') {
                onItemAdd(newTodo);
                this.setState({ newTodo: '' });
              }
            }}
          />
        </div>
        <div className="TodoList__items">
          {items.sort(TodoUtils.compareByID).map(item => (
            <TodoListItem
              item={item}
              onCheckboxClick={onItemCheckboxClick}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

TodoList.defaultProps = {
  onItemAdd: () => {},
  onItemCheckboxClick: () => {}
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    done: PropTypes.bool
  })).isRequired,
  onItemAdd: PropTypes.func,
  onItemCheckboxClick: PropTypes.func
};

export default TodoList;
