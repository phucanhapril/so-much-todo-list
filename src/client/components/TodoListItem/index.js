import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import './styles.css';

const TodoListItem = ({ item, onCheckboxClick, onRemove }) => (
  <div className="TodoListItem">
    <Checkbox
      className="TodoListItem__checkbox"
      checked={item.done}
      onChange={() => onCheckboxClick(item)}
    />
    <p className={cx('TodoListItem__label', {
      'TodoListItem__label--done': item.done
    })}>
      { item.text }
    </p>
    <i
      className="TodoListItem__remove material-icons"
      onClick={() => onRemove(item)}
    >
      clear
    </i>
  </div>
);

TodoListItem.defaultProps = {
  onCheckboxClick: () => {},
  onRemove: () => {}
};

TodoListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    done: PropTypes.bool
  }).isRequired,
  onCheckboxClick: PropTypes.func,
  onRemove: PropTypes.func,
};

export default TodoListItem;
