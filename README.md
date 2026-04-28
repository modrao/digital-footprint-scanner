# Digital Footprint Scanner

A production-ready, open-source privacy tool to check if your email appears in data breaches and assess your digital privacy risk. Inspired by the aesthetic of [nextjs.org](https://nextjs.org).

![Digital Footprint Scanner](https://raw.githubusercontent.com/modrao/digital-footprint-scanner/public/og-image.png)

## 🛡️ Overview

The **Digital Footprint Scanner** allows users to enter an email address and receive an instant privacy risk score (0–100). The analysis is based on:

- Public breach data from **HaveIBeenPwned**
- Domain reputation analysis
- Heuristic scoring patterns
- Password exposure detection

**Zero Data Retention:** We never store your email address or log your searches. All processing happens in real-time and is discarded immediately.

## ✨ Features

- **Real-Time Analysis**: Direct integration with HIBP public breach lists.
- **Privacy Scoring**: Sophisticated 0–100 score based on 5+ risk factors.
- **Detailed Breakdown**: See exactly why a score was assigned.
- **Breach History**: View metadata of breaches associated with the domain.
- **Next.js 14 Aesthetic**: Sharp, dark, monochrome design with zero gradients.
- **Fully Responsive**: Optimized for desktop and mobile devices.
- **Secure**: All external API calls are handled server-side.

## 🚀 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist Sans & Mono](https://vercel.com/font)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm / pnpm / yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/modrao/digital-footprint-scanner.git
   cd digital-footprint-scanner
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔒 Security & Privacy

- **No API Keys Required**: Uses public metadata endpoints.
- **Server-Side Processing**: Protects logic and prevents client-side exposure.
- **Rate Limiting**: Built-in protection against automated abuse.
- **Open Source**: Auditable code for full transparency.

## ☕ Support the Developer

This project is built and maintained independently. If you find it useful, consider supporting the development.

- **bKash (Personal)**: `01721873956`

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Developed with passion by **Shahriyar Fahim**
