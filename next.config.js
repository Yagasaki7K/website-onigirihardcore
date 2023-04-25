/* eslint-disable no-undef */

const removeImports = require("next-remove-imports")();
module.exports = removeImports({
    env: {
        FIREBASE_API_KEY: "AIzaSyB305sY0GR-z1lnJx2lqnG0kkAr-JR-IeQ",
        FIREBASE_AUTH_DOMAIN: "kalify-findyourpet.firebaseapp.com",
        FIREBASE_DATABASE_URL:
            "https://kalify-findyourpet-default-rtdb.firebaseio.com",
        FIREBASE_PROJECT_ID: "kalify-findyourpet",
        FIREBASE_STORAGE_BUCKET: "kalify-findyourpet.appspot.com",
        FIREBASE_MESSAGING_SENDER_ID: "843679913436",
        FIREBASE_APP_ID: "1:843679913436:web:55e00dc38e1731adbb6b19",
    },
    webpack(config) {
        return config;
    },
});
