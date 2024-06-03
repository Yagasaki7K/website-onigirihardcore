import MillionLint from '@million/lint';

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js'
                }
            }
        }
    }
};

export default MillionLint.next()(MillionLint.next({
    rsc: true
})(nextConfig));
