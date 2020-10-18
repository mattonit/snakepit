import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CardTitle = props => {
  const {
    children,
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    'card-title',
    className
  );

  return <Tag className={classes} {...attributes}>{children}</Tag>;
}

CardTitle.propTypes = {
  tag: PropTypes.string,
}

CardTitle.defaultProps = {
  tag: 'div'
}

export default CardTitle;
