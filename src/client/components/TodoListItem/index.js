import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import './styles.css';

const TodoListItem = ({ item, onCheckboxClick }) => (
  <div className="TodoListItem">
    <p className={cx('TodoListItem__label', {
      'TodoListItem__label--done': item.done
    })}>
      { item.text }
    </p>
    <Checkbox
      className="TodoListItem__checkbox"
      checked={item.done}
      onChange={() => onCheckboxClick(item)}
    />
  </div>
);

TodoListItem.defaultProps = {
  onCheckboxClick: () => {}
};

TodoListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    done: PropTypes.bool
  }).isRequired,
  onCheckboxClick: PropTypes.func
};

export default TodoListItem;
