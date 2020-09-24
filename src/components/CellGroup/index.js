import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CellGroup = props => {

  const {
    children,
    className,
    tag: Tag,
  } = props;

  const classes = classNames(
    className,
    'cell-group'
  );

  return <Tag className={classes}>{children}</Tag>

};

CellGroup.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string
}

CellGroup.defaultProps = {
  tag: 'div',
  wide: false
}

export default CellGroup;
