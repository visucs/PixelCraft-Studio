# PixelCraft Studio

PixelCraft Studio is a premium digital design and development platform. The application represents a high-fidelity, highly interactive portfolio and service platform, modernized with a "21st.dev" inspired aesthetic. 

## 🎨 UI & UX Design System

The application has undergone a complete high-fidelity overhaul. The design system is built around modern, premium tech aesthetics:

### Core Visuals
- **Deep Glassmorphism**: Widespread use of `backdrop-blur-24px` combined with highly transparent background layers (`rgba(255,255,255,0.02)`) and subtle borders (`border-white/[0.08]`) to create depth.
- **Ambient Glows**: Mesh gradients (`#00C6FF` cyan and `#9B5DE5` purple) placed absolutely in the background with high blur (`blur-[120px]`) to provide an immersive, glowing aesthetic.
- **Floating UI Elements**: Components like the Navbar and Tab Switchers are detached from the edges, appearing as "floating pills" with soft drop shadows.

### Interactive UX
- **Micro-interactions**: Hardware-accelerated hover effects utilizing `framer-motion` for scaling, opacity transitions, and animated gradient borders.
- **Drawer Navigation**: A mobile-first, full-screen animated drawer for seamless navigation on smaller devices.
- **Contextual Form Validation**: The StartProject modal uses interactive step progression with animated progress bars and glowing active states.

## 🛠️ Technology Stack & Dependencies

Built on a robust, modern frontend stack:

- **React 19** (`react`, `react-dom`): Component-based UI architecture.
- **Vite** (`vite`, `@vitejs/plugin-react`): Lightning-fast build tool and development server.
- **Tailwind CSS** (`tailwindcss`, `postcss`, `autoprefixer`): Utility-first CSS framework for rapid, highly-customizable styling without leaving the markup.
- **Framer Motion** (`framer-motion`): Professional-grade animation library used for complex interactive states, page transitions, and the mobile drawer.
- **Lucide React** (`lucide-react`): Clean, consistent vector icons.
- **EmailJS** (`@emailjs/browser`): Client-side email integration for the Contact page and project intake forms.
- **Agentation** (`agentation`): AI visual feedback tool used for real-time UI element inspection and contextual development (rendered conditionally in `DEV` mode).

## 📂 Project Structure Overview

- `src/components/`
  - `Navbar.jsx`: Floating glassmorphic navigation pill.
  - `Hero.jsx`: High-impact landing section with glowing mesh gradients.
  - `Portfolio.jsx` & `Testimonials.jsx`: Interactive card grids showcasing work and client feedback.
  - `Pricing.jsx`: Tiered pricing cards with hover-responsive glows.
  - `FAQ.jsx`: Premium accordion using Framer Motion.
  - `CTA.jsx`: Final call-to-action section.
  - `StartProject.jsx`: Multi-step interactive modal for project intake.
  - `ContactPage.jsx`: Dedicated contact route with form integrations.
  - `LegalPage.jsx`: Privacy Policy and Terms & Conditions with sidebar TOC and glass cards.
- `src/App.jsx`: Main application wrapper and component orchestrator.

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   *The local server will start on `http://localhost:5173`. If you are in development mode, the `Agentation` AI context inspector will be active.*

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 License & Copyright
© 2025 PixelCraft Studio. All rights reserved.
