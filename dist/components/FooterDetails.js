"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _variables = require("./variables");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FooterDetails = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    .imgfooter {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: -4rem 0 1rem 0;\n\n        img {\n            width: 30rem;\n\n            @media (max-width: 500px) {\n                width: 20rem;\n            }\n\n            @media (max-width: 320px) {\n                width: 18rem;\n            }\n        }\n    }\n\n    .footer {\n        width: 100%;\n        background: ", ";\n        color: ", ";\n        display: flex;\n        padding: .5rem 0;\n        justify-content: center;\n\n        @media (max-width: 500px) {\n           font-size: 0.9em ;\n           display: block;\n           padding: 10px;\n           text-align: center;\n       }\n\n       a {\n            text-decoration: none;\n            color: ", ";\n        }\n    }\n\n"])), _variables.colors.blackdark, _variables.colors.white, _variables.colors.white);
var _default = FooterDetails;
exports["default"] = _default;