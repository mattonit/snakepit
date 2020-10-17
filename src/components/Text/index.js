import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Text = props => {

  const {
    children,
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className
  );

  return <Tag {...attributes} className={classes}>{children}</Tag>;
}

Text.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
};

Text.defaultProps = {
  tag: 'p'
};

export default Text;
