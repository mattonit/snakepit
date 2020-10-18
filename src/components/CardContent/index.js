import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CardContent = props => {
  const {
    children,
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    'card-content',
    className
  );

  return <Tag className={classes} {...attributes}>{children}</Tag>;
}

CardContent.propTypes = {
  tag: PropTypes.string,
}

CardContent.defaultProps = {
  tag: 'div'
}

export default CardContent;
