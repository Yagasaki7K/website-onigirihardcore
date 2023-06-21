"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _HeaderDetails = _interopRequireDefault(require("./HeaderDetails"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Header = function Header() {
  return /*#__PURE__*/_react["default"].createElement(_HeaderDetails["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/",
    className: "logotipo"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/logotipo-white.png",
    className: "logotipo",
    alt: "logo"
  })), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/anuncio.png",
    className: "advice",
    alt: "Anuncio"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "navigation"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    id: "ul-menu"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "burguer"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/"
  }, "In\xEDcio")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/noticias"
  }, "Not\xEDcias")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "https://kalify.vercel.app",
    target: "_blank",
    rel: "noreferrer"
  }, "Kalify Inc"))), /*#__PURE__*/_react["default"].createElement("span", {
    id: "item-menu"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/"
  }, "In\xEDcio")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/noticias"
  }, "Not\xEDcias")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/#animes"
  }, "Animes ", "&", " HQ", "'", "s")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/csgo"
  }, "CSGO ~ HLTV News")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "https://onigiri-hardcore.blogspot.com/",
    target: "_blank",
    rel: "noreferrer"
  }, "OH: Arquivos")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "https://kalify.vercel.app",
    target: "_blank",
    rel: "noreferrer"
  }, "Kalify Inc"))))));
};
var _default = Header;
exports["default"] = _default;