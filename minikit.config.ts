const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  "accountAssociation": {
    "header": "eyJmaWQiOjYzOTczNCwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDllYTg3RkZEYzQ3ZTQ3M2M3YWU4YjkyNjRFNzZjMUJBMjI5MDdGNUEifQ",
    "payload": "eyJkb21haW4iOiJmYXJjYXN0ZXJiYXNlLnZlcmNlbC5hcHAifQ",
    "signature": "MLVsbpeA3x0j/jRUv5tS2E0T1R1ddlKaiJD+1kO5xM899q9jpmHE4wGA+Sj3LxFfrGDx0h9Mj+MJaDF3cb6RAxs="
  },
  miniapp: {
    version: "1",
    name: "Farcaster", 
    subtitle: "Your AI Ad Companion", 
    description: "Join the waitlist for Farcaster - Your AI Ad Companion. Get early access and be the first to experience the future of crypto marketing strategy.",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "Your AI Ad Companion",
    ogTitle: "Farcaster - Your AI Ad Companion",
    ogDescription: "Join the waitlist for Farcaster and get early access to the future of crypto marketing strategy.",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

