import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Input = props => {
  const {
    children,
    className,
    invalid,
    success,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    'form-field',
    invalid ? 'invalid' : false,
    success ? 'success' : false,
    className
  );

  return <Tag className={classes} {...attributes}>{children}</Tag>;
}

Input.propTypes = {
  invalid: PropTypes.bool,
  success: PropTypes.bool,
  tag: PropTypes.string,
}

Input.defaultProps = {
  invalid: false,
  success: false,
  tag: 'input'
}

export default Input;
