import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = props => {

  const {
    children,
    className,
    tag: Tag,
  } = props;

  const classes = classNames(
    'btn',
    className
  );

  return <Tag className={classes}>{children}</Tag>;
}

Button.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
};

Button.defaultProps = {
  tag: 'button'
};

export default Button;
