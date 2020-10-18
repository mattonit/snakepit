import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Card = props => {
  const {
    children,
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    'card',
    className
  );

  return <Tag className={classes} {...attributes}>{children}</Tag>;
}

Card.propTypes = {
  tag: PropTypes.string,
}

Card.defaultProps = {
  tag: 'div'
}

export default Card;
