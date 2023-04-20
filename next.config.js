/* eslint-disable no-undef */
const removeImports = require("next-remove-imports")();
module.exports = removeImports({
    webpack(config) {
        return config;
    },
});
