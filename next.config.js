/* eslint-disable no-undef */
const removeImports = require("next-remove-imports")();

module.exports = removeImports({
    webpack: (config) => {
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                port: "",
                pathname: "/images/**",
            },
        ],
    },
});
