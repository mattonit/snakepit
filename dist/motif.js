/*!
 * Motif v0.0.4
 * Copyright 2021 Mattonit
 * Licensed under MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames = require('classnames');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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

const _excluded$9 = ["block", "children", "className", "color", "inverse", "outline", "size", "tag"];

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
        attributes = _objectWithoutProperties(props, _excluded$9);

  const classes = classNames__default['default']('btn', block ? 'btn-block' : '', color && (inverse || outline) ? false : `btn-${color}`, color && inverse ? `btn-inverse-${color}` : false, color && outline ? `btn-outline-${color}` : false, size ? `btn-${size}` : false, className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

Button.propTypes = {
  block: PropTypes__default['default'].bool,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].string,
  inverse: PropTypes__default['default'].bool,
  outline: PropTypes__default['default'].bool,
  size: PropTypes__default['default'].string,
  tag: PropTypes__default['default'].string
};
Button.defaultProps = {
  block: false,
  color: false,
  inverse: false,
  outline: false,
  size: null,
  tag: 'button'
};

const _excluded$8 = ["children", "className", "tag"];

const Card = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, _excluded$8);

  const classes = classNames__default['default']('card', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends({
    className: classes
  }, attributes), children);
};

Card.propTypes = {
  tag: PropTypes__default['default'].string
};
Card.defaultProps = {
  tag: 'div'
};

const _excluded$7 = ["children", "className", "tag"];

const CardContent = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, _excluded$7);

  const classes = classNames__default['default']('card-content', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends({
    className: classes
  }, attributes), children);
};

CardContent.propTypes = {
  tag: PropTypes__default['default'].string
};
CardContent.defaultProps = {
  tag: 'div'
};

const _excluded$6 = ["children", "className", "tag"];

const CardText = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, _excluded$6);

  const classes = classNames__default['default']('card-text', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends({
    className: classes
  }, attributes), children);
};

CardText.propTypes = {
  tag: PropTypes__default['default'].string
};
CardText.defaultProps = {
  tag: 'p'
};

const _excluded$5 = ["children", "className", "tag"];

const CardTitle = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, _excluded$5);

  const classes = classNames__default['default']('card-title', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends({
    className: classes
  }, attributes), children);
};

CardTitle.propTypes = {
  tag: PropTypes__default['default'].string
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
  const classes = classNames__default['default'](size ? `cell-${size}` : false, sm ? `cell-sm-${sm}` : false, md ? `cell-md-${md}` : false, lg ? `cell-lg-${lg}` : false, xl ? `cell-xl-${xl}` : false, xxl ? `cell-xxl-${xxl}` : false, !size && !sm && !md && !lg && !xl && !xxl ? 'cell' : false, className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, {
    className: classes
  }, children);
};

Cell.propTypes = {
  className: PropTypes__default['default'].string,
  md: PropTypes__default['default'].string,
  lg: PropTypes__default['default'].string,
  size: PropTypes__default['default'].string,
  sm: PropTypes__default['default'].string,
  tag: PropTypes__default['default'].string,
  xl: PropTypes__default['default'].string,
  xxl: PropTypes__default['default'].string
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
  const classes = classNames__default['default'](className, 'cell-group');
  return /*#__PURE__*/React__default['default'].createElement(Tag, {
    className: classes
  }, children);
};

CellGroup.propTypes = {
  className: PropTypes__default['default'].string,
  tag: PropTypes__default['default'].string
};
CellGroup.defaultProps = {
  tag: 'div',
  wide: false
};

const _excluded$4 = ["children", "className", "level", "size"];

const Heading = props => {
  const {
    children,
    className,
    level,
    size
  } = props,
        attributes = _objectWithoutProperties(props, _excluded$4);

  const classes = classNames__default['default'](size ? `heading-${size}` : false, className);
  const Tag = level ? `h${level}` : 'div';
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

Heading.propTypes = {
  className: PropTypes__default['default'].string,
  level: PropTypes__default['default'].string,
  size: PropTypes__default['default'].string,
  tag: PropTypes__default['default'].string
};
Heading.defaultProps = {
  level: null,
  size: 'xl'
};

const _excluded$3 = ["children", "className", "invalid", "success", "tag"];

const Input = props => {
  const {
    children,
    className,
    invalid,
    success,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, _excluded$3);

  const classes = classNames__default['default']('form-field', invalid ? 'invalid' : false, success ? 'success' : false, className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends({
    className: classes
  }, attributes), children);
};

Input.propTypes = {
  invalid: PropTypes__default['default'].bool,
  success: PropTypes__default['default'].bool,
  tag: PropTypes__default['default'].string
};
Input.defaultProps = {
  invalid: false,
  success: false,
  tag: 'input'
};

const _excluded$2 = ["children", "className", "tag"];

const Nav = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, _excluded$2);

  const classes = classNames__default['default']('nav', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

Nav.propTypes = {
  className: PropTypes__default['default'].string,
  tag: PropTypes__default['default'].string
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
  const classes = classNames__default['default']('navbar', fixed ? 'fixed-top' : false, sticky ? 'sticky-top' : false, className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, {
    className: classes
  }, children);
};

Navbar.propTypes = {
  className: PropTypes__default['default'].string,
  fixed: PropTypes__default['default'].bool,
  sticky: PropTypes__default['default'].bool,
  tag: PropTypes__default['default'].string
};
Navbar.defaultProps = {
  fixed: false,
  sticky: false,
  tag: 'nav'
};

const _excluded$1 = ["children", "className", "tag"];

const NavItem = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, _excluded$1);

  const classes = classNames__default['default']('nav-item', className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

NavItem.propTypes = {
  className: PropTypes__default['default'].string,
  tag: PropTypes__default['default'].string
};
NavItem.defaultProps = {
  tag: 'li'
};

const _excluded = ["children", "className", "tag"];

const Text = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, _excluded);

  const classes = classNames__default['default'](className);
  return /*#__PURE__*/React__default['default'].createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

Text.propTypes = {
  className: PropTypes__default['default'].string,
  tag: PropTypes__default['default'].string
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
  const classes = classNames__default['default'](className, 'wrapper', wide ? 'wrapper-wide' : false);
  return /*#__PURE__*/React__default['default'].createElement(Tag, {
    className: classes
  }, children);
};

Wrapper.propTypes = {
  className: PropTypes__default['default'].string,
  tag: PropTypes__default['default'].string,
  wide: PropTypes__default['default'].bool
};
Wrapper.defaultProps = {
  tag: 'div',
  wide: false
};

exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardText = CardText;
exports.CardTitle = CardTitle;
exports.Cell = Cell;
exports.CellGroup = CellGroup;
exports.Heading = Heading;
exports.Input = Input;
exports.Nav = Nav;
exports.NavItem = NavItem;
exports.Navbar = Navbar;
exports.Text = Text;
exports.Wrapper = Wrapper;
