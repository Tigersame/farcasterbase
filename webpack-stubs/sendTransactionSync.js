// Stub for sendTransactionSync - replaces @wagmi/core/dist/esm/actions/sendTransactionSync
// This avoids importing non-existent functions from viem/actions
export async function sendTransactionSync() {
  throw new Error('sendTransactionSync is not supported in mini apps');
}

