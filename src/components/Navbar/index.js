import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Navbar = props => {

  const {
    children,
    className,
    fixed,
    sticky,
    tag: Tag,
  } = props;

  const classes = classNames(
    'navbar',
    fixed ? 'fixed-top': false,
    sticky ? 'sticky-top': false,
    className,
  );

  return <Tag className={classes}>{children}</Tag>

};

Navbar.propTypes = {
  className: PropTypes.string,
  fixed: PropTypes.bool,
  sticky: PropTypes.bool,
  tag: PropTypes.string
}

Navbar.defaultProps = {
  fixed: false,
  sticky: false,
  tag: 'nav',
}

export default Navbar;
