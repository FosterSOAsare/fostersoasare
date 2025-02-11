/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching: [
        {
            // API responses caching (Dynamic)
            urlPattern: /^https:\/\/.*\.vercel\.app\/api\/.*$/,
            handler: "NetworkFirst",
            options: {
                cacheName: "api-cache",
                expiration: {maxEntries: 50, maxAgeSeconds: 86400},
            },
        },
        {
            // Static assets caching (e.g., images, fonts)
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|woff2?|ttf|otf|eot|mp4|mp3)$/,
            handler: "CacheFirst",
            options: {
                cacheName: "static-assets",
                expiration: {maxEntries: 100, maxAgeSeconds: 604800}, // Cache for 7 days
            },
        },
    ],
});

const nextConfig = {
    reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
