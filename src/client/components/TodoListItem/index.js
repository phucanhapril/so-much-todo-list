import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import './styles.css';

const TodoListItem = ({ onClear, onComplete, todo }) => (
  <div className="TodoListItem">
    <Checkbox
      className="TodoListItem__checkbox"
      checked={todo.completed}
      onChange={() => onComplete(todo)}
    />
    <p className={cx('TodoListItem__label', {
      'TodoListItem__label--completed': todo.completed
    })}>
      { todo.text }
    </p>
    <i
      className="TodoListItem__clear material-icons"
      onClick={() => onClear(todo)}
    >
      clear
    </i>
  </div>
);

TodoListItem.defaultProps = {
  onClear: () => {},
  onComplete: () => {}
};

TodoListItem.propTypes = {
  onClear: PropTypes.func,
  onComplete: PropTypes.func,
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool
  }).isRequired
};

export default TodoListItem;
