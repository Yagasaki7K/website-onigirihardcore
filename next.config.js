const removeImports = require('next-remove-imports')()
module.exports = removeImports({
  webpack(config, options) {
    return config
  },
});