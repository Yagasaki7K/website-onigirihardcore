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
var FullNewsDetails = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    .fullnews {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        margin-top: 1rem;\n        margin-left: 2rem;\n\n        @media (max-width: 500px) {\n            margin: 0;\n            font-size: 0.8em;\n\n            h1{\n                text-align: center;\n            }\n        }\n\n        button {\n            padding: 1rem 2rem;\n            border-radius: 10px;\n            text-transform: uppercase;\n            font-weight: 600;\n            font-size: 1.2rem;\n            background-color: ", "};\n            color: ", ";\n            border: none;\n            margin-bottom: 2rem;\n            cursor: pointer;\n        }\n\n        a {\n            padding: 20px 120px 70px 40px;\n            margin-bottom: 10px;\n            width: 80%;\n\n\n            @media (max-width: 500px) {\n                padding: 0;\n                text-align: center;\n            }\n\n            :hover {\n                transition: 1s;\n                background: ", ";\n            }\n\n            img {\n                width: 300px;\n                height: 150px;\n                border-radius: 5px;\n                object-fit: cover;\n            }\n\n            .title {\n                margin-top: -8rem;\n                margin-left: 20rem;\n\n                @media (max-width: 500px) {\n                  margin: 0;\n                }\n            }\n        }\n"])), _variables.colors.blue, _variables.colors.graylight, _variables.colors.blacklight);
var _default = FullNewsDetails;
exports["default"] = _default;