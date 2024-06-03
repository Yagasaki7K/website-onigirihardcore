import React, { useEffect } from 'react';
import '../styles/globals.css'
import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {

    useEffect(() => {
        fetch('/api/visit', {
            method: 'POST',
        });
    }, []);

    return (
        <>
            <Component {...pageProps} />
            <Analytics />
            <Toaster richColors position="top-right" />
        </>
    )
}

export default MyApp
