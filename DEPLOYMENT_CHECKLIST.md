# Deployment Checklist for Farcaster Mini App

## ✅ Completed Steps

- [x] App name changed to "Farcaster"
- [x] Account association configured
- [x] Webhook endpoint created
- [x] All routes configured properly

## 🚀 Next Steps to Publish

### 1. Deploy to Vercel (if not already done)

Your app should be deployed at: **https://farcasterbase.vercel.app**

To deploy/update:
```bash
# Make sure you're logged into Vercel
vercel --prod

# Or push to your connected GitHub repo (auto-deploys)
git add .
git commit -m "Update app name to Farcaster"
git push
```

### 2. Verify Environment Variables in Vercel

Make sure these are set in Vercel project settings:
- `NEXT_PUBLIC_PROJECT_NAME="Farcaster"`
- `NEXT_PUBLIC_ONCHAINKIT_API_KEY` (your API key)
- `NEXT_PUBLIC_URL=https://farcasterbase.vercel.app`

### 3. Test Your Manifest Endpoint

Visit these URLs to verify:
- **Manifest**: https://farcasterbase.vercel.app/.well-known/farcaster.json
- **Home**: https://farcasterbase.vercel.app/
- **Webhook**: https://farcasterbase.vercel.app/api/webhook

### 4. Preview on Base Preview Tool

1. Go to: https://base.dev/preview
2. Enter your URL: `https://farcasterbase.vercel.app`
3. Check:
   - ✅ Embed preview displays correctly
   - ✅ Launch button works
   - ✅ Account association is valid
   - ✅ Metadata is complete

### 5. Publish to Base App

1. Open the Base app (mobile or web)
2. Create a new post/cast
3. Include your app URL: `https://farcasterbase.vercel.app`
4. Post it!

Your mini app will appear with:
- Rich embed preview
- Launch button
- App metadata

## 🔍 Quick Verification Commands

Test locally:
```bash
npm run dev
# Then visit http://localhost:3000/.well-known/farcaster.json
```

Test build:
```bash
npm run build
npm start
```

## 📝 Current Configuration

- **App Name**: Farcaster
- **Domain**: farcasterbase.vercel.app
- **Account Association**: ✅ Configured
- **FID**: 639734 (from your account association)

## 🆘 Troubleshooting

If manifest doesn't work:
- Check Vercel deployment logs
- Verify environment variables
- Ensure all routes are deployed

If account association fails:
- Re-verify at: https://www.base.dev/preview?tab=account
- Update credentials in `minikit.config.ts`
- Redeploy

