// Stub exports for viem actions that don't exist in this version
export const sendCallsSync = () => {
  throw new Error('sendCallsSync is not available in this viem version');
};

export const sendTransactionSync = () => {
  throw new Error('sendTransactionSync is not available in this viem version');
};

