"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CSGODetails = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n.news {\n    border-top: 1px solid #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n\n    h2 {\n        color: #00acff;\n        width: 30rem;\n    }\n\n    p {\n        font-style: italic;\n        width: 30rem;\n    }\n}\n\n.matches {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\n    .match {\n        width: 100%;\n        flex-direction: row;\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n    .championship {\n        width: 4rem;\n        margin-bottom: -1.6rem;\n    }\n\n    img {\n        width: 3.5rem;\n    }\n\n    .x {\n        margin: 2rem;\n    }\n\n    h4 {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: row;\n    }\n}\n\n"])));
var _default = CSGODetails;
exports["default"] = _default;