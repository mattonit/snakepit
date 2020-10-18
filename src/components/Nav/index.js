import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Nav = props => {

  const {
    children,
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    'nav',
    className
  );

  return <Tag {...attributes} className={classes}>{children}</Tag>;
}

Nav.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
};

Nav.defaultProps = {
  tag: 'ul'
};

export default Nav;
