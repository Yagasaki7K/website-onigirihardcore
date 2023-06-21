"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SideMenuDetails = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 1rem;\n    background: #15171b;\n    color: #fff;\n    width: 18rem;\n    margin-right: 1rem;\n    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);\n\n    img {\n        width: 15rem;\n        margin-top: 1rem;\n    }\n\n    ul {\n        list-style: none;\n        margin-left: -2.5rem;\n\n        i {\n            font-size: 1.5rem;\n            margin-right: 1rem;\n        }\n\n        li {\n            font-size: 1.2rem;\n            border-top: 1px solid #e5e5e5;\n            padding: 1rem 0.5rem;\n\n            :hover {\n                transition: 1s;\n                padding: 1rem 1rem;\n                background: #00acff;\n                color: #fff;\n                cursor: pointer;\n            }\n        }\n    }\n\n    .active {\n            font-size: 1.2rem;\n            background: #00acff;\n            border-top: 1px solid #e5e5e5;\n            padding: 1rem 0.5rem;\n\n            :hover {\n                transition: 1s;\n                padding: 1rem 1rem;\n                background: transparent;\n                color: #fff;\n                cursor: pointer;\n            }\n        }\n"])));
var _default = SideMenuDetails;
exports["default"] = _default;