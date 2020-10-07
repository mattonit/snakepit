import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Cell = props => {

  const {
    children,
    className,
    tag: Tag,
  } = props;

  const classes = classNames(
    className,
    'cell'
  );

  return <Tag className={classes}>{children}</Tag>

};

Cell.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string
}

Cell.defaultProps = {
  tag: 'div',
  wide: false
}

export default Cell;
