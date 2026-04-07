const path = require("path");

module.exports = {
  optimization: {
    minimize: true,

    webpack(config: any, { isProduction }: { isProduction: boolean }) {
      if (isProduction) {
        config.optimization.minimize = true;
      }

      config.optimization.splitChunks = {
        chunks: "all",
      };

      config.resolve.alias = {
        ...config.resolve.alias,
        "@components": path.resolve(__dirname, "src/components"),
        "@utils": path.resolve(__dirname, "src/utils"),
      };

      return config;
    },

    images: {
      domains: ["example.com"],
      unoptimized: false,
    },

    experimental: {
      optimizeFonts: true,
    },

    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
        {
          source: "/:all*(woff|woff2|ttf)",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
        {
          source: "/:all*(jpg|jpeg|png|gif|webp)",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
      ];
    },
  },
};
