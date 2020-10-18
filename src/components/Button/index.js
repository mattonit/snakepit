import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = props => {

  const {
    block,
    children,
    className,
    color,
    inverse,
    outline,
    size,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    'btn',
    block ? 'btn-block' : '',
    color && (inverse || outline) ? false : `btn-${color}`,
    color && inverse ? `btn-inverse-${color}` : false,
    color && outline ? `btn-outline-${color}` : false,
    size ? `btn-${size}` : false,
    className
  );

  return <Tag {...attributes} className={classes}>{children}</Tag>;
}

Button.propTypes = {
  block: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  inverse: PropTypes.bool,
  outline: PropTypes.bool,
  size: PropTypes.string,
  tag: PropTypes.string,
};

Button.defaultProps = {
  block: false,
  color: null,
  inverse: false,
  outline: false,
  size: null,
  tag: 'button'
};

export default Button;
