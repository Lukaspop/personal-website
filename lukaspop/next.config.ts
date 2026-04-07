const path = require("path");

module.exports = {
  webpack(config: any, { isProduction }: { isProduction: boolean }) {
    if (isProduction) {
      config.optimization.minimize = true; // Enable minification in production
    }

    // Enabling code splitting
    config.optimization.splitChunks = {
      chunks: "all", // Split all chunks for better optimization
    };

    // Setting up custom path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
    };

    return config;
  },

  images: {
    domains: ["example.com"], // Replace with domains where you serve images from
    unoptimized: false, // Enables image optimization
  },

  experimental: {
    optimizeFonts: true, // Ensures font optimization (if supported)
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache static assets for a long time
          },
        ],
      },
      {
        source: "/:all*(woff|woff2|ttf)", // For font files
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache fonts
          },
        ],
      },
      {
        source: "/:all*(jpg|jpeg|png|gif|webp)", // For image files
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache images
          },
        ],
      },
    ];
  },

  // Optional: Enabling strict React mode in Next.js
  reactStrictMode: true,
};
