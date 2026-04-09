#!/usr/bin/env bash
set -euo pipefail
BASE="next-tailwind-starter"
mkdir -p "$BASE"/{pages,components,styles}

cat > "$BASE/package.json" <<'JSON'
{
  "name": "next-tailwind-starter",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "13.5.8",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.5.1",
    "postcss": "^8.4.24",
    "autoprefixer": "^10.4.14"
  }
}
JSON

cat > "$BASE/tailwind.config.js" <<'JS'
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { extend: {} },
  plugins: []
}
JS

cat > "$BASE/postcss.config.js" <<'JS'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
JS

cat > "$BASE/styles/globals.css" <<'CSS'
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add global helpers here */
CSS

cat > "$BASE/pages/_app.js" <<'JS'
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
JS

cat > "$BASE/components/Nav.js" <<'JS'
export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <div className="text-lg font-bold">Brand</div>
      <div className="space-x-4 hidden md:flex">
        <a className="text-sm">About</a>
        <a className="text-sm">Contact</a>
      </div>
    </nav>
  )
}
JS

cat > "$BASE/pages/index.js" <<'JS'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="p-4 sm:p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold">Mobile-friendly Next + Tailwind</h1>
        <p className="mt-4 text-base sm:text-lg">Resize or view on a phone to see responsive behavior.</p>
      </main>
    </>
  )
}
JS

cat > "$BASE/.gitignore" <<'TXT'
node_modules
.next
.env.local
.DS_Store
TXT

cat > "$BASE/README.md" <<'MD'
# next-tailwind-starter

Starter Next.js + Tailwind project.

Commands:
- `npm install`
- `npm run dev` (opens http://localhost:3000)
MD

echo "Project files created at ./$BASE"
echo
echo "Next steps:"
echo "  cd $BASE"
echo "  npm install"
echo "  npx tailwindcss init -p   # optional: if you want to re-generate configs"
echo "  npm run dev"
echo
echo "To commit:"
echo "  git init && git add . && git commit -m \"Add Next.js + Tailwind starter\""