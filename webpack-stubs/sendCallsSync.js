// Stub for sendCallsSync - replaces @wagmi/core/dist/esm/actions/sendCallsSync
// This avoids importing non-existent functions from viem/actions
export async function sendCallsSync() {
  throw new Error('sendCallsSync is not supported in mini apps');
}

