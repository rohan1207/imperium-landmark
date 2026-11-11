# Imperium Landmark

Standalone marketing site for **Imperium Landmark** — boutique offices and retail on Jalna Road, Chhatrapati Sambhajinagar.

Deploy this folder on its own domain (separate from the main Lilasons RR site).

## Local

```bash
cd imperium
npm install
npm run dev
```

Open [http://localhost:3010](http://localhost:3010).

This folder is a **standalone** Next.js app. Deploy it on its own domain. It does not share routes with the main Lilasons site in the parent folder.

On the main Lilasons app, set `NEXT_PUBLIC_IMPERIUM_URL` to this site’s public URL (local default: `http://localhost:3010`).

## Deploy

Build and host as any Next.js 16 app (Vercel, Node, etc.):

```bash
npm run build
npm start
```

Point your Imperium domain at **this** project root (`imperium/`), not the parent Lilasons repo.
