/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching: [
        {
            urlPattern: /^https:\/\/your-api\.com\/.*$/,
            handler: "NetworkFirst",
            options: {
                cacheName: "api-cache",
                expiration: {maxEntries: 50, maxAgeSeconds: 86400},
            },
        },
    ],
});

const nextConfig = {
    reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
