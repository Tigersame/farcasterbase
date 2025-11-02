const fs = require('fs');
const path = require('path');

// Patch wagmi sync action files to remove imports of non-existent viem functions
const patches = [
  {
    file: path.join(__dirname, '../node_modules/@wagmi/core/dist/esm/actions/sendCallsSync.js'),
    replacement: `// Patched: removed viem import
export async function sendCallsSync(config, parameters) {
  throw new Error('sendCallsSync is not supported in this environment');
}`,
  },
  {
    file: path.join(__dirname, '../node_modules/@wagmi/core/dist/esm/actions/sendTransactionSync.js'),
    replacement: `// Patched: removed viem import
export async function sendTransactionSync(config, parameters) {
  throw new Error('sendTransactionSync is not supported in this environment');
}`,
  },
];

patches.forEach(({ file, replacement }) => {
  try {
    if (fs.existsSync(file)) {
      fs.writeFileSync(file, replacement, 'utf8');
      console.log(`✓ Patched ${path.basename(file)}`);
    }
  } catch (error) {
    console.warn(`⚠ Could not patch ${file}:`, error.message);
  }
});

