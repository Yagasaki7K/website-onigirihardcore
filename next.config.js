// eslint-disable-next-line no-undef
const removeImports = require("next-remove-imports")();

const nextConfig = removeImports({
    pageExtensions: ["jsx", "js", "tsx", "ts"],
    images: {
        domains: ["firebasestorage.googleapis.com"],
    },
});

// eslint-disable-next-line no-undef
module.exports = nextConfig;
