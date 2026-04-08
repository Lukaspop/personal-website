const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  optimization: {
    minimize: true, // Enable minification for both JS and CSS

    // Customizing Webpack config for production
    webpack(config:any, { isProduction }:{isProduction: string}) {
      if (isProduction) {
        config.optimization.minimizer = [
          // Minify JavaScript with Terser
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true, // Removes console logs in production
              },
            },
          }),
          // Minify CSS with CssMinimizerPlugin
          new CssMinimizerPlugin(),
        ];
      }

      // Split chunks configuration (this ensures better chunking for JS)
      config.optimization.splitChunks = {
        chunks: "all",
      };

      // Path aliases for better imports
      config.resolve.alias = {
        ...config.resolve.alias,
        "@components": path.resolve(__dirname, "src/components"),
        "@utils": path.resolve(__dirname, "src/utils"),
      };

      return config;
    },

    experimental: {
      optimizeFonts: true, // Ensures font optimization
    },

    // Headers for caching static assets
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