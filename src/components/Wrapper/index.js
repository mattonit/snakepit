import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Wrapper = props => {

  const {
    children,
    className,
    wide,
    tag: Tag,
  } = props;

  const classes = classNames(
    className,
    'wrapper',
    wide ? 'wrapper-wide' : false,
  );

  return <Tag className={classes}>{children}</Tag>

};

Wrapper.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
  wide: PropTypes.bool
}

Wrapper.defaultProps = {
  tag: 'div',
  wide: false
}

export default Wrapper;
