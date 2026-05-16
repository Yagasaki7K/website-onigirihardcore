import { useEffect } from 'react';
import { Roboto } from 'next/font/google';
import '../styles/globals.css'
import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react';
import SnowOverlay from '../src/components/SnowOverlay';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {

    useEffect(() => {
        const visitUrl = '/api/visit';

        fetch(visitUrl, {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache',
            },
        }).catch(() => {});

        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js');
            });
        }
    }, []);

    return (
        <div className={roboto.className}>
            <Component {...pageProps} />
            <Analytics />
            <Toaster richColors position="top-right" />
            <SnowOverlay/>
        </div>
    )
}

export default MyApp
