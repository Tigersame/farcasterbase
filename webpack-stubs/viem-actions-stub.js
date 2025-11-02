// Mock viem/actions exports for missing sync functions
// This is used to replace viem/actions when imported by wagmi sync actions
export const sendCallsSync = function sendCallsSync() {
  throw new Error('sendCallsSync is not available in this viem version');
};

export const sendTransactionSync = function sendTransactionSync() {
  throw new Error('sendTransactionSync is not available in this viem version');
};

// Re-export everything else from the real viem/actions
// This ensures other imports still work
export * from 'viem/actions';

