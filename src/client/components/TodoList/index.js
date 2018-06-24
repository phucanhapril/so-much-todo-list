import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../TodoListItem';

const compareByID = (a, b) => a.id - b.id;

const TodoList = ({ items, onItemCheckboxClick }) => (
  <div className="TodoList">
    {items.sort(compareByID).map(item => (
      <TodoListItem
        item={item}
        onCheckboxClick={onItemCheckboxClick}
        key={item.id}
      />
    ))}
  </div>
);

TodoList.defaultProps = {
  onItemCheckboxClick: () => {}
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    done: PropTypes.bool
  })).isRequired,
  onItemCheckboxClick: PropTypes.func
};

export default TodoList;
