// eslint-disable-next-line no-undef
import million from 'million/compiler';

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    }
}

// eslint-disable-next-line no-undef
export default million.next(nextConfig);
