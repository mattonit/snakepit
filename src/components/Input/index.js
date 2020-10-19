import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Input = props => {
  const {
    children,
    className,
    invalid,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    'form-field',
    invalid ? 'invalid' : false,
    className
  );

  return <Tag className={classes} {...attributes}>{children}</Tag>;
}

Input.propTypes = {
  invalid: PropTypes.bool,
  tag: PropTypes.string,
}

Input.defaultProps = {
  invalid: false,
  tag: 'input'
}

export default Input;
