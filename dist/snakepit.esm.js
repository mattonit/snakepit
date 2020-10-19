/*!
 * Snakepit v0.0.1
 * Copyright 2020 Mattonit
 * Licensed under MIT
 */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

const Button = props => {
  const {
    block,
    children,
    className,
    color,
    inverse,
    outline,
    size,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["block", "children", "className", "color", "inverse", "outline", "size", "tag"]);

  const classes = classNames('btn', block ? 'btn-block' : '', color && (inverse || outline) ? false : `btn-${color}`, color && inverse ? `btn-inverse-${color}` : false, color && outline ? `btn-outline-${color}` : false, size ? `btn-${size}` : false, className);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

Button.propTypes = {
  block: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  inverse: PropTypes.bool,
  outline: PropTypes.bool,
  size: PropTypes.string,
  tag: PropTypes.string
};
Button.defaultProps = {
  block: false,
  color: false,
  inverse: false,
  outline: false,
  size: null,
  tag: 'button'
};

const Card = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  const classes = classNames('card', className);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes), children);
};

Card.propTypes = {
  tag: PropTypes.string
};
Card.defaultProps = {
  tag: 'div'
};

const CardContent = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  const classes = classNames('card-content', className);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes), children);
};

CardContent.propTypes = {
  tag: PropTypes.string
};
CardContent.defaultProps = {
  tag: 'div'
};

const CardText = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  const classes = classNames('card-text', className);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes), children);
};

CardText.propTypes = {
  tag: PropTypes.string
};
CardText.defaultProps = {
  tag: 'p'
};

const CardTitle = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  const classes = classNames('card-title', className);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes), children);
};

CardTitle.propTypes = {
  tag: PropTypes.string
};
CardTitle.defaultProps = {
  tag: 'div'
};

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
    xxl
  } = props;
  const classes = classNames(size ? `cell-${size}` : false, sm ? `cell-sm-${sm}` : false, md ? `cell-md-${md}` : false, lg ? `cell-lg-${lg}` : false, xl ? `cell-xl-${xl}` : false, xxl ? `cell-xxl-${xxl}` : false, !size && !sm && !md && !lg && !xl && !xxl ? 'cell' : false, className);
  return /*#__PURE__*/React.createElement(Tag, {
    className: classes
  }, children);
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
};
Cell.defaultProps = {
  md: null,
  lg: null,
  size: null,
  sm: null,
  tag: 'div',
  xs: null,
  xxl: null
};

const CellGroup = props => {
  const {
    children,
    className,
    tag: Tag
  } = props;
  const classes = classNames(className, 'cell-group');
  return /*#__PURE__*/React.createElement(Tag, {
    className: classes
  }, children);
};

CellGroup.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string
};
CellGroup.defaultProps = {
  tag: 'div',
  wide: false
};

const Heading = props => {
  const {
    children,
    className,
    level,
    size
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "level", "size"]);

  const classes = classNames(size ? `heading-${size}` : false, className);
  const Tag = level ? `h${level}` : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

Heading.propTypes = {
  className: PropTypes.string,
  level: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.string
};
Heading.defaultProps = {
  level: null,
  size: 'xl'
};

const Input = props => {
  const {
    children,
    className,
    invalid,
    success,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "invalid", "success", "tag"]);

  const classes = classNames('form-field', invalid ? 'invalid' : false, success ? 'success' : false, className);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, attributes), children);
};

Input.propTypes = {
  invalid: PropTypes.bool,
  success: PropTypes.bool,
  tag: PropTypes.string
};
Input.defaultProps = {
  invalid: false,
  success: false,
  tag: 'input'
};

const Nav = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  const classes = classNames('nav', className);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

Nav.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string
};
Nav.defaultProps = {
  tag: 'ul'
};

const Navbar = props => {
  const {
    children,
    className,
    fixed,
    sticky,
    tag: Tag
  } = props;
  const classes = classNames('navbar', fixed ? 'fixed-top' : false, sticky ? 'sticky-top' : false, className);
  return /*#__PURE__*/React.createElement(Tag, {
    className: classes
  }, children);
};

Navbar.propTypes = {
  className: PropTypes.string,
  fixed: PropTypes.bool,
  sticky: PropTypes.bool,
  tag: PropTypes.string
};
Navbar.defaultProps = {
  fixed: false,
  sticky: false,
  tag: 'nav'
};

const NavItem = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  const classes = classNames('nav-item', className);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

NavItem.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string
};
NavItem.defaultProps = {
  tag: 'li'
};

const Text = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  const classes = classNames(className);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

Text.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string
};
Text.defaultProps = {
  tag: 'p'
};

const Wrapper = props => {
  const {
    children,
    className,
    wide,
    tag: Tag
  } = props;
  const classes = classNames(className, 'wrapper', wide ? 'wrapper-wide' : false);
  return /*#__PURE__*/React.createElement(Tag, {
    className: classes
  }, children);
};

Wrapper.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
  wide: PropTypes.bool
};
Wrapper.defaultProps = {
  tag: 'div',
  wide: false
};

export { Button, Card, CardContent, CardText, CardTitle, Cell, CellGroup, Heading, Input, Nav, NavItem, Navbar, Text, Wrapper };
