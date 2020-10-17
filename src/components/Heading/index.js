import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Heading = props => {

  const {
    children,
    className,
    level,
    size,
    ...attributes
  } = props;

  const classes = classNames(
    size ? `heading-${size}` : false,
    className
  );

  const Tag = level ? `h${level}` : 'div';

  return <Tag {...attributes} className={classes}>{children}</Tag>;
}

Heading.propTypes = {
  className: PropTypes.string,
  level: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.string,
};

Heading.defaultProps = {
  level: null,
  size: 'xl'
};

export default Heading;
