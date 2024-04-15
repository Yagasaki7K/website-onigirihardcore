import React from 'react';
import '../styles/globals.css'
import { Toaster } from 'sonner'

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Toaster richColors position="top-right" />
        </>
    )
}

export default MyApp
