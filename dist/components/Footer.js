"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Footer;
var _react = _interopRequireDefault(require("react"));
var _FooterDetails = _interopRequireDefault(require("./FooterDetails"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Footer() {
  return /*#__PURE__*/_react["default"].createElement(_FooterDetails["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "imgfooter"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/logotipo-white.png",
    alt: "footer"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "footer"
  }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/login"
  }, "\xA9"), " 2015 - ", new Date().getFullYear(), " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "/"
  }, "Onigiri Hardcore"), " -\xA0", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://kalifyinc.vercel.app/",
    target: "_blank",
    rel: "noreferrer"
  }, "Kalify Inc."), " |\xA0"), /*#__PURE__*/_react["default"].createElement("p", null, "Todas as imagens de filmes, s\xE9ries e etc s\xE3o marcas registradas dos seus respectivos propriet\xE1rios")));
}