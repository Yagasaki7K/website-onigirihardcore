"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _SideMenuDetails = _interopRequireDefault(require("./SideMenuDetails"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SideMenu = function SideMenu() {
  return /*#__PURE__*/_react["default"].createElement(_SideMenuDetails["default"], null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/logotipo-white.png",
    alt: "logo"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "menu"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/login"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "uil uil-file-edit-alt"
  }), " Criar Publica\xE7\xF5es")), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/login/posts"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "uil uil-file-edit-alt"
  }), " Editar Publica\xE7\xF5es")), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "uil uil-sign-out-alt"
  }), " Sair")))));
};
var _default = SideMenu;
exports["default"] = _default;