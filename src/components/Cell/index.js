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
    xxl,
  } = props;

  const classes = classNames(
    size ? `cell-${size}` : false,
    sm ? `cell-sm-${sm}` : false,
    md ? `cell-md-${md}` : false,
    lg ? `cell-lg-${lg}` : false,
    xl ? `cell-xl-${xl}` : false,
    xxl ? `cell-xxl-${xxl}` : false,
    !size && !sm && !md && !lg && !xl && !xxl ? 'cell' : false,
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
  xl: PropTypes.string,
  xxl: PropTypes.string
}

Cell.defaultProps = {
  md: null,
  lg: null,
  size: null,
  sm: null,
  tag: 'div',
  xs: null,
  xxl: null
}

export default Cell;
