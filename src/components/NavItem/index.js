import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const NavItem = props => {

  const {
    children,
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    'nav-item',
    className
  );

  return <Tag {...attributes} className={classes}>{children}</Tag>;
}

NavItem.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
};

NavItem.defaultProps = {
  tag: 'li'
};

export default NavItem;
