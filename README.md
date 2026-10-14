# CNX Healthcare website

## Vercel pe live karna

1. Is folder ka saara content GitHub repo mein push karo:
   ```bash
   git init
   git add .
   git commit -m "CNX Healthcare website"
   git branch -M main
   git remote add origin https://github.com/<your-account>/<repo>.git
   git push -u origin main
   ```
   Agar purana repo use kar rahe ho, toh pehle uski saari purani files hata do (sirf `.git` rakhna), phir ye files daal ke push karo.
2. vercel.com → **Add New → Project** → repo select karo → **Deploy**.
   Framework "Next.js" apne aap detect hoga, koi setting badalne ki zaroorat nahi.
3. **Settings → Domains** mein apna domain add karo.
4. Ab har `git push` ke baad site apne aap update ho jaayegi.

## Live karne se pehle

- **Director photos:** `Prashant.PNG`, `jayvant.PNG`, `girish.PNG`, `Devendra.PNG`, `yatin.PNG`, `kishor.PNG` aur `sushant.PNG` ko `public/` folder mein daalo. File ke naam bilkul isi spelling aur capital/small letters mein hone chahiye.
- **Domain:** Agar domain `www.cnxhealthcare.com` nahi hai, toh asli domain in jagah badlo:
  - `lib/site.ts` (`SITE_URL`)
  - `public/index.html` (canonical, `og:url`, `og:image`, JSON-LD)
  - `public/llms.txt`
- **Google Search Console:** Live hone ke baad wahan `https://<domain>/sitemap.xml` submit karo.

## Computer pe chalana (optional)

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # final site out/ folder mein banti hai
```

## Kaunsi cheez kahan badalni hai

| Kya | File |
|---|---|
| Home page (animated) | `public/index.html` |
| Company info, divisions, specialities, directors, contact, job openings | `lib/site.ts` |
| Products ki list | `data/products.json` |
| Andar wale pages | `app/…/page.tsx` |
| Design / colours | `app/globals.css` |
