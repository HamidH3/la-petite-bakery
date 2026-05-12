# 🧁 La Petite Cake Shop — Website

A modern, handcrafted website for La Petite Cake Shop, Continental Bakery in Harrow.

Built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 STEP-BY-STEP SETUP (VS Code)

### Prerequisites

You need **Node.js 18+** installed. Check with:

```bash
node --version
```

If not installed, download from https://nodejs.org (LTS version).

### Step 1 — Open the project

1. Unzip `la-petite-cake-shop.zip`
2. Open VS Code
3. Go to **File → Open Folder** → select the `la-petite-cake-shop` folder

### Step 2 — Install dependencies

Open the VS Code terminal (`Ctrl+`` ` or **Terminal → New Terminal**) and run:

```bash
npm install
```

This installs Next.js, React, Tailwind, Framer Motion, and all other packages.

### Step 3 — Run the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser. You should see the full website.

### Step 4 — Make edits

Edit any file and the browser will hot-reload automatically. Key files:

| What | Where |
|------|-------|
| Homepage layout | `app/page.tsx` |
| Navbar | `components/Navbar.tsx` |
| Hero section | `components/Hero.tsx` |
| Cake products | `components/CakesSection.tsx` |
| Pastries | `components/PastriesSection.tsx` |
| Drinks | `components/DrinksSection.tsx` |
| About | `components/AboutSection.tsx` |
| Reviews | `components/TestimonialsSection.tsx` |
| Contact form | `components/ContactSection.tsx` |
| Footer | `components/Footer.tsx` |
| Global styles | `app/globals.css` |
| Colors/fonts | `tailwind.config.js` |

---

## 🌐 FREE DEPLOYMENT (Vercel — Best Option)

Vercel is made by the creators of Next.js. It's the best free hosting for this project.

### Step 1 — Push to GitHub

```bash
# In the project folder:
git init
git add .
git commit -m "Initial commit"
```

Then create a new repo on https://github.com/new (name it `la-petite-cake-shop`), and:

```bash
git remote add origin https://github.com/YOUR_USERNAME/la-petite-cake-shop.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to https://vercel.com and sign up with your GitHub account
2. Click **"Add New Project"**
3. Import your `la-petite-cake-shop` repository
4. Click **Deploy** — that's it!

Your site will be live at `https://la-petite-cake-shop.vercel.app` within 60 seconds.

**Every time you push to GitHub, Vercel auto-deploys the update.**

### Vercel Free Tier includes:
- Unlimited deployments
- HTTPS/SSL included
- Global CDN
- Serverless functions (for contact form & Stripe)
- Custom domain support
- 100GB bandwidth/month

---

## 🔗 FREE CUSTOM DOMAIN

### Option A — Buy a cheap domain (recommended)

1. Buy a domain from **Namecheap** (~£7/year for .co.uk) or **Porkbun** (~$5/year)
2. In Vercel: **Project → Settings → Domains → Add**
3. Type your domain (e.g. `lapetitecakeshop.co.uk`)
4. Vercel gives you DNS records — add them in your domain registrar
5. SSL is automatic and free

### Option B — Free subdomain

Your Vercel deploy already gives you `yourproject.vercel.app` for free.

### Option C — Freenom alternatives

Free domains via https://www.freedns.afraid.org or use a `.pages.dev` domain via Cloudflare Pages (also free).

---

## 💳 ADDING STRIPE PAYMENTS

### Step 1 — Create a Stripe account

Go to https://stripe.com and sign up (free).

### Step 2 — Get your API keys

In the Stripe Dashboard → **Developers → API Keys**. You need:
- `STRIPE_PUBLISHABLE_KEY` (starts with `pk_`)
- `STRIPE_SECRET_KEY` (starts with `sk_`)

### Step 3 — Add environment variables

Create a `.env.local` file in the project root:

```
STRIPE_SECRET_KEY=sk_live_your_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
```

### Step 4 — Create an API route for checkout

Create `app/api/checkout/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
});

export async function POST(req: NextRequest) {
  const { items } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items,
    mode: 'payment',
    success_url: `${req.nextUrl.origin}/success`,
    cancel_url: `${req.nextUrl.origin}/#cakes`,
  });

  return NextResponse.json({ url: session.url });
}
```

### Step 5 — Install Stripe server SDK

```bash
npm install stripe
```

### Step 6 — Add env vars to Vercel

In Vercel: **Project → Settings → Environment Variables** → add both keys.

---

## 📧 CONTACT FORM (Free Options)

### Option A — Formspree (easiest)

1. Sign up at https://formspree.io (free for 50 submissions/month)
2. Create a form, get your form ID
3. In `ContactSection.tsx`, update the submit handler:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  setSubmitted(true);
};
```

### Option B — EmailJS (sends directly from browser)

1. Sign up at https://www.emailjs.com (free for 200 emails/month)
2. Follow their React integration guide

### Option C — Next.js API Route + Nodemailer

Create `app/api/contact/route.ts` for full server-side control.

---

## 📁 PROJECT STRUCTURE

```
la-petite-cake-shop/
├── app/
│   ├── globals.css          # All custom styles, fonts, animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx           # Floating animated navbar
│   ├── Hero.tsx             # Hero with burgundy gradient & animations
│   ├── CakesSection.tsx     # Cake products grid
│   ├── PastriesSection.tsx  # Pastries horizontal cards
│   ├── DrinksSection.tsx    # Drinks grid
│   ├── AboutSection.tsx     # About with shop info
│   ├── TestimonialsSection.tsx # Customer reviews
│   ├── ContactSection.tsx   # Contact form + map + info
│   ├── Footer.tsx           # Footer with links
│   ├── Reveal.tsx           # Scroll animation wrapper
│   └── ProductCard.tsx      # Reusable product card
├── public/                  # Static assets (add images here)
├── tailwind.config.js       # Custom colors, fonts, animations
├── postcss.config.js
├── next.config.js
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## 🎨 CUSTOMISATION TIPS

- **Change colors**: Edit `tailwind.config.js` → `colors.burgundy` values
- **Change fonts**: Edit the Google Fonts import in `globals.css` and `tailwind.config.js` → `fontFamily`
- **Add real images**: Drop images in `public/` and use `<Image src="/your-image.jpg" />` from `next/image`
- **Update menu items**: Edit the arrays in `CakesSection.tsx`, `PastriesSection.tsx`, `DrinksSection.tsx`
- **Google Maps**: Update the iframe `src` in `ContactSection.tsx` with your actual Google Maps embed URL
  - Go to Google Maps → search your shop → Share → Embed a map → copy the `src` URL

---

## 🗺️ FIX THE GOOGLE MAP

The current map embed is approximate. To get the exact one:

1. Go to https://maps.google.com
2. Search "La Petite Cake Shop, 5 Station Road, Harrow"
3. Click **Share → Embed a map**
4. Copy the `src="..."` URL from the iframe code
5. Paste it into `ContactSection.tsx` replacing the existing iframe `src`

---

## ✅ PRODUCTION CHECKLIST

- [ ] Replace placeholder Google Maps embed with real one
- [ ] Set up Formspree or EmailJS for the contact form
- [ ] Add real product photos to `public/` folder
- [ ] Connect custom domain in Vercel
- [ ] Set up Stripe if accepting online payments
- [ ] Add Vercel Analytics (free) for traffic tracking
- [ ] Test on mobile devices
- [ ] Submit to Google Search Console for indexing
