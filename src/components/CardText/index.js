import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CardText = props => {
  const {
    children,
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    'card-text',
    className
  );

  return <Tag className={classes} {...attributes}>{children}</Tag>;
}

CardText.propTypes = {
  tag: PropTypes.string,
}

CardText.defaultProps = {
  tag: 'p'
}

export default CardText;
