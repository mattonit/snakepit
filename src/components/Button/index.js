import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = props => {

  const {
    children,
    className,
    color,
    inverse,
    outline,
    tag: Tag,
  } = props;

  const classes = classNames(
    'btn',
    color && (inverse || outline) ? false : `btn-${color}`,
    color && inverse ? `btn-inverse-${color}` : false,
    color && outline ? `btn-outline-${color}` : false,
    className
  );

  return <Tag className={classes}>{children}</Tag>;
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  inverse: PropTypes.bool,
  outline: PropTypes.bool,
  tag: PropTypes.string,
};

Button.defaultProps = {
  color: false,
  inverse: false,
  outline: false,
  tag: 'button'
};

export default Button;
