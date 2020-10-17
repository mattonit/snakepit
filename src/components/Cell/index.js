import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Cell = props => {

  const {
    children,
    className,
    md,
    lg,
    size,
    sm,
    tag: Tag,
    xl,
  } = props;

  const classes = classNames(
    size ? `cell-${size}` : false,
    sm ? `cell-sm-${sm}` : false,
    md ? `cell-md-${md}` : false,
    lg ? `cell-lg-${lg}` : false,
    xl ? `cell-xl-${xl}` : false,
    !size && !sm && !md && !lg && !xl ? 'cell' : false,
    className,
  );

  return <Tag className={classes}>{children}</Tag>

};

Cell.propTypes = {
  className: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  size: PropTypes.string,
  sm: PropTypes.string,
  tag: PropTypes.string,
  xl: PropTypes.string
}

Cell.defaultProps = {
  md: null,
  lg: null,
  size: null,
  sm: null,
  tag: 'div',
  xs: null
}

export default Cell;
