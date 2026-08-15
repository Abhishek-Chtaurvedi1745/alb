# Albatroz Solutions website

Next.js site for Albatroz Solutions.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run build` | Standard production build |
| `npm run start` | Run production server locally |
| `npm run build:cpanel` | Static export for cPanel (`out/` + `cpanel-upload.zip`) |

## Deploy (cPanel)

```bash
npm run build:cpanel
```

Upload `cpanel-upload.zip` (or contents of `out/`) to `public_html`.
