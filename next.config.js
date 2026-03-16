/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
    },
    compress: true,
    poweredByHeader: false,
    eslint: {
        ignoreDuringBuilds: false,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
}


module.exports = nextConfig
