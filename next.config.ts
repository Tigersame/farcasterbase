import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    
    // Ignore wagmi sync actions that require viem functions not available in this version
    // These are not used in mini apps, so safe to ignore during build
    if (!isServer) {
      if (!config.plugins) {
        config.plugins = [];
      }
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /@wagmi\/core\/dist\/esm\/actions\/(sendCallsSync|sendTransactionSync)/,
        })
      );
    }
    
    return config;
  },
};

export default nextConfig;
