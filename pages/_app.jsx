import React, { useEffect } from 'react';
import '../styles/globals.css'

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const preventRightClick = (e) => {
            e.preventDefault();
        };

        const preventCopyPaste = (e) => {
            if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86)) {
                e.preventDefault();
            }
        };

        const disableTextSelection = () => {
            document.body.style.userSelect = 'none';
        };

        document.addEventListener('contextmenu', preventRightClick);
        document.addEventListener('keydown', preventCopyPaste);
        disableTextSelection();

        return () => {
            document.removeEventListener('contextmenu', preventRightClick);
            document.removeEventListener('keydown', preventCopyPaste);
            document.body.style.userSelect = '';
        };
    }, []);

    return <Component {...pageProps} />
}

export default MyApp
