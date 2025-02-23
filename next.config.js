/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drjforrest.com',
      },
    ],
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Increase timeout
    config.watchOptions = {
      ...config.watchOptions,
      poll: 1000,
      aggregateTimeout: 300,
    };

    // Handle SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Handle client-side modules
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        crypto: false, // Add this line to handle crypto polyfill
      };
    }

    // Optimize chunks with pnpm-specific settings
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module) {
              return module.size() > 160000 &&
                /node_modules[/\\]/.test(module.identifier());
            },
            name: 'hash-' + Math.random().toString(36).substring(2, 8),
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
        },
      },
    };

    // Add performance settings within webpack config
    config.performance = {
      hints: 'warning',
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    };

    return config;
  },
  async redirects() {
    return [
      {
        source: '/tech-tabs-of-global-of-health',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;