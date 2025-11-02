import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Mark wagmi core as external for server components
  serverExternalPackages: ['@wagmi/core'],
  
  webpack: (config, { isServer, webpack }) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    
    // Only apply fixes for client-side builds
    if (!isServer) {
      // Replace the problematic wagmi modules with stubs
      config.plugins = config.plugins || [];
      
      // Use a more aggressive replacement that catches all variations
      const replacements = [
        {
          test: /[\\/]node_modules[\\/]@wagmi[\\/]core[\\/]dist[\\/]esm[\\/]actions[\\/]sendCallsSync\.js$/,
          resource: path.resolve(__dirname, 'webpack-stubs/sendCallsSync.js'),
        },
        {
          test: /[\\/]node_modules[\\/]@wagmi[\\/]core[\\/]dist[\\/]esm[\\/]actions[\\/]sendTransactionSync\.js$/,
          resource: path.resolve(__dirname, 'webpack-stubs/sendTransactionSync.js'),
        },
      ];
      
      replacements.forEach(({ test, resource }) => {
        config.plugins.push(
          new webpack.NormalModuleReplacementPlugin(test, resource)
        );
      });
      
      // Also handle package imports (not just node_modules paths)
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /^@wagmi\/core\/dist\/esm\/actions\/sendCallsSync$/,
          path.resolve(__dirname, 'webpack-stubs/sendCallsSync.js')
        ),
        new webpack.NormalModuleReplacementPlugin(
          /^@wagmi\/core\/dist\/esm\/actions\/sendTransactionSync$/,
          path.resolve(__dirname, 'webpack-stubs/sendTransactionSync.js')
        )
      );
    }
    
    return config;
  },
};

export default nextConfig;
