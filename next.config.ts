const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        serverActions: {
            allowedOrigins: ['localhost', 'client-lime-psi.vercel.app'],
        },
    },
}

module.exports = withNextIntl(nextConfig);
