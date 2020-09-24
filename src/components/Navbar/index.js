import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Navbar = props => {

  const {
    children,
    className,
    tag: Tag,
  } = props;

  const classes = classNames(
    className,
    'navbar'
  );

  return <Tag className={classes}>{children}</Tag>

};

Navbar.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string
}

Navbar.defaultProps = {
  tag: 'nav'
}

export default Navbar;
