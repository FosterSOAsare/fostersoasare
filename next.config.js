/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    cacheOnFrontEndNav: true,
});

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["brittanychiang.com"],
    },
    // Any other configurations you might need
};

module.exports = withPWA(nextConfig);
