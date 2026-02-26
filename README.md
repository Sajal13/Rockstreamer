# 📰 News Video Platform

A modern news video streaming platform built with **Next.js**, **Tailwind CSS v4**, **Video.js**, and **Swiper**. Features HLS video playback, custom video controls, transcript panel, playlist management, and shareable video links.

---

## 🛠️ Tech Stack

| Technology | Version |
|------------|---------|
| [Next.js](https://nextjs.org/) | 16.1.6 |
| [Tailwind CSS](https://tailwindcss.com/) | v4 |
| [Video.js](https://videojs.com/) | 8.23.7 |
| [Swiper](https://swiperjs.com/) | 12.1.2 |
| [Next-themes](https://www.typescriptlang.org/) | 0.4.6 |
| [TypeScript](https://www.typescriptlang.org/) | ^5 |

---

## 📋 Prerequisites

Make sure you have the following installed before getting started:

- **Node.js** `>= 18.x`
- **npm**, **yarn**, **pnpm**, or **bun**

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Sajal13/Rockstreamer.git
cd Rockstreamer
```

### 2. Install dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

### 3. Install core packages (if setting up from scratch)

```bash
# Next.js
pnpm install next@16.1.0 react react-dom

# Tailwind CSS v4
pnpm install tailwindcss@^4 @tailwindcss/postcss

# Video.js with HLS support
pnpm install video.js

# Swiper
pnpm install swiper

# Utility packages
pnpm install classnames tailwind-merge react-icons
```

### 4. Configure Tailwind CSS v4

In `app/globals.css` (or your main CSS file):

```css
@import "tailwindcss";
```

In `postcss.config.mjs`:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

> ⚠️ **Note:** Tailwind CSS v4 no longer requires a `tailwind.config.js` file. Configuration is done directly in CSS using `@theme`.

### 5. Set up environment variables

Create a `.env.local` file in the root of the project:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## 🏃 Getting Started

### Run the development server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.


---

## ✨ Features

- 🎬 **HLS Video Playback** via Video.js with `application/x-mpegURL` support
- 📝 **Subtitles / Captions** with `.vtt` file support
- 🎛️ **Custom Control Bar** with Transcript, Share, and Playlist toggle buttons
- ⏸️ **Pause Overlay** showing video title and Resume button on pause
- 📋 **Playlist Panel** with toggle support
- 📄 **Transcript Panel** with toggle support
- 🔗 **Copy Link** feature with clipboard API and toast notification
- 🎠 **Swiper Carousel** with custom pagination and navigation
- 📱 **Responsive Layout** with dynamic column span based on side panel state
- 📱 **Light/Dark Mode** with color switching options.

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is via [Vercel](https://vercel.com/).

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com/) and import your repository
3. Add your environment variables in the Vercel dashboard:
   ```
   NEXT_PUBLIC_BASE_URL=https://your-domain.com
   ```
4. Click **Deploy**

Vercel will automatically detect Next.js and configure the build settings.

---

### Deploy on a VPS / Custom Server

#### 1. Build the project

```bash
pnpm run build
```

#### 2. Start the production server

```bash
pnpm run start
```

The app will run on port `3000` by default. You can change this:

```bash
pnpm run start -- -p 8080
```

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).