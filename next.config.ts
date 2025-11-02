import type { NextConfig } from "next";
import webpack from "webpack";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    
    // Replace problematic wagmi imports with stubs
    // These sync functions don't exist in this viem version and aren't used in mini apps
    if (!isServer) {
      if (!config.plugins) {
        config.plugins = [];
      }
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /@wagmi\/core\/dist\/esm\/actions\/sendCallsSync/,
          path.resolve(__dirname, 'webpack-stubs/sendCallsSync.js')
        ),
        new webpack.NormalModuleReplacementPlugin(
          /@wagmi\/core\/dist\/esm\/actions\/sendTransactionSync/,
          path.resolve(__dirname, 'webpack-stubs/sendTransactionSync.js')
        )
      );
    }
    
    return config;
  },
};

export default nextConfig;
