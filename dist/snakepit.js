/*!
 * Snakepit v0.0.1
 * Copyright 2020 Mattonit
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
  color: null,
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

const CardContent = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

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

const CardText = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

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

const CardTitle = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

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

const Heading = props => {
  const {
    children,
    className,
    level,
    size
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "level", "size"]);

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

const Nav = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

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

const NavItem = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

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

const Text = props => {
  const {
    children,
    className,
    tag: Tag
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

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
exports.Nav = Nav;
exports.NavItem = NavItem;
exports.Navbar = Navbar;
exports.Text = Text;
exports.Wrapper = Wrapper;
