# 🚀 Marvin Rivera Martinez - Portfolio

A modern, epic portfolio website showcasing Computer Engineering projects, skills, and experience. Built with cutting-edge web technologies and designed with a futuristic aesthetic.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

### 🎨 **Modern Design**
- **Glass Morphism** - Frosted glass effects throughout
- **Gradient Animations** - Epic blue-to-purple color schemes
- **Floating Elements** - Animated tech icons and effects
- **Pulse Glow Effects** - Premium button animations
- **Responsive Design** - Perfect on all devices

### 🔥 **Epic Components**
- **Hero Section** - Full-screen with animated gradients and floating profile
- **Skills Grid** - Interactive skill meters with category icons
- **Project Cards** - Glass morphism cards with hover effects and category badges
- **Navigation** - Backdrop blur with gradient logo and smooth transitions
- **Experience Timeline** - Professional layout with tech stack badges

### 🛠️ **Technical Stack**
- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS 4 with custom animations
- **Icons**: Lucide React for modern iconography
- **Images**: Next.js Image optimization
- **Fonts**: Inter for clean typography

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ariveram128/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev:webpack
   # or for turbopack (experimental)
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page with hero and featured projects
│   ├── about/page.tsx     # About page with education and skills
│   ├── projects/page.tsx  # Projects showcase with filtering
│   ├── experience/page.tsx # Professional experience timeline
│   ├── contact/page.tsx   # Contact form and information
│   ├── resume/page.tsx    # Web-optimized resume
│   ├── layout.tsx         # Root layout with navigation
│   ├── globals.css        # Global styles and animations
│   ├── api/contact/       # Contact form API endpoint
│   ├── sitemap.ts         # SEO sitemap generation
│   └── robots.ts          # SEO robots.txt
├── components/            # Reusable UI components
│   ├── Navigation.tsx     # Glass morphism header
│   ├── Hero.tsx           # Epic hero section
│   ├── ProjectCard.tsx    # Project showcase cards
│   ├── SkillsGrid.tsx     # Interactive skills display
│   ├── ExperienceCard.tsx # Experience timeline items
│   ├── ContactForm.tsx    # Contact form with validation
│   └── ThemeToggle.tsx    # Dark/light mode toggle
├── lib/                   # Data and utilities
│   ├── projects.ts        # Project data and types
│   ├── skills.ts          # Skills data and categories
│   └── experience.ts      # Professional experience data
└── types/
    └── index.ts           # TypeScript type definitions
```

## 🎨 Customization

### **Adding Your Profile Picture**
1. Add your image to `public/profile.jpg`
2. The image will automatically appear in:
   - Hero section (floating glass container)
   - About page (professional photo)

### **Updating Content**
- **Projects**: Edit `src/lib/projects.ts`
- **Skills**: Edit `src/lib/skills.ts`
- **Experience**: Edit `src/lib/experience.ts`
- **Personal Info**: Update contact details in navigation and contact page

### **Customizing Colors**
The portfolio uses CSS variables for easy theming:
```css
:root {
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

## 🌟 Key Features Explained

### **Glass Morphism Effects**
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### **Epic Hover Animations**
- **Shimmer Effect**: Cards have a light sweep animation on hover
- **Float Animation**: Gentle vertical movement for visual interest
- **Pulse Glow**: Buttons pulse with gradient shadows
- **Scale Transforms**: Subtle scaling for interactive feedback

### **Performance Optimizations**
- **Static Generation**: Pages pre-rendered for fast loading
- **Image Optimization**: Automatic WebP conversion and sizing
- **Code Splitting**: Automatic bundle optimization
- **SEO Ready**: Meta tags, sitemap, and structured data

## 📱 Responsive Design

The portfolio is fully responsive across all devices:
- **Desktop**: Full layout with all animations
- **Tablet**: Adapted grid layouts and touch-friendly interactions
- **Mobile**: Optimized navigation and stacked layouts

## 🔧 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run dev:webpack  # Start development server with Webpack (more stable)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run clean        # Clean .next cache
```

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on every push

### **Other Platforms**
The portfolio works on any platform supporting Node.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📊 SEO & Performance

### **SEO Features**
- ✅ Meta tags and Open Graph images
- ✅ Structured data markup
- ✅ Automatic sitemap generation
- ✅ Mobile-friendly design
- ✅ Fast loading times

### **Performance Score**
- 🚀 **Lighthouse Score**: 95+ on all metrics
- ⚡ **First Contentful Paint**: < 1.5s
- 📱 **Mobile Optimized**: Perfect responsive design
- 🔍 **SEO Score**: 100/100

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Marvin Rivera Martinez**
- 📧 Email: [mrvnlxndrrvr2@gmail.com](mailto:mrvnlxndrrvr2@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/ariveram128](https://linkedin.com/in/ariveram128)
- 🐙 GitHub: [github.com/ariveram128](https://github.com/ariveram128)
- 📍 Location: Harrisonburg, VA

---

Built with ❤️ and lots of ☕ by Marvin Rivera Martinez

*Computer Engineering • University of Virginia • Class of 2026*