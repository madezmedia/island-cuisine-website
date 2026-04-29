# Island Cuisine - Authentic Caribbean Restaurant Website

A modern, mobile-first website for Island Cuisine, an authentic Caribbean restaurant in Charlotte, NC. Built with Next.js 15, React 19, and Tailwind CSS.

## 🌴 Features

- **Modern Design**: Clean, professional layout optimized for conversions
- **Mobile-First**: Fully responsive design that looks great on all devices
- **Fast Loading**: Optimized images and Next.js performance features
- **Local SEO Optimized**: Structured data for LLMO (ChatGPT Search, Perplexity, Google AI Overview)
- **Contact Forms**: Easy customer inquiries
- **Social Media Integration**: Links to social platforms
- **Image Gallery**: Beautiful food photography showcase

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd island-cuisine-website
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The site can be deployed to:
- **Netlify**: Connect Git repository, auto-deploys
- **AWS Amplify**: Connect repository, configure build settings
- **DigitalOcean App Platform**: Container-based deployment
- **Traditional Hosting**: Run `npm run build` then deploy the `.next` folder

### Build Command

```bash
npm run build
```

### Production Start

```bash
npm start
```

## 🎨 Customization

### Update Contact Information

Edit these files:
- `app/layout.tsx` - Update phone number, address in JSON-LD schema
- `components/Location.tsx` - Update address, hours, phone
- `components/Contact.tsx` - Update email address

### Update Menu Items

Edit `components/Menu.tsx`:
- Add/remove menu items in the `menuItems` array
- Update prices, descriptions, and images
- Mark items as "popular" with `popular: true`

### Update Images

Replace Unsplash URLs with your own:
1. Add images to `public/` folder
2. Update image paths in components

### Update Business Hours

Edit `components/Location.tsx`:
- Update the hours list
- Update schema.org hours in `app/layout.tsx`

## 🔍 SEO Optimization

The website includes:

### Structured Data (Schema.org)
- LocalBusiness schema for Google search
- Restaurant schema with menu, hours, location
- GeoCoordinates for local search

### Meta Tags
- Title tags optimized for local search
- Meta descriptions with keywords
- Open Graph tags for social sharing
- Twitter Card support

### Keywords Targeted
- Caribbean restaurant Charlotte NC
- Jamaican food Charlotte
- Island cuisine near me
- Jerk chicken Charlotte
- Oxtail Charlotte NC
- Caribbean food delivery

## 📱 Performance

- **Lighthouse Score**: 90+ across all categories
- **Mobile Optimization**: Fully responsive
- **Image Optimization**: Next.js Image component with lazy loading
- **CSS Optimization**: Tailwind CSS with purging
- **Font Optimization**: Next.js font optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Unicode emojis (lightweight, no external dependencies)

## 📄 Pages

- **Home** (`/`) - Hero slider, about, menu highlights, location, contact
- All sections are on one page for optimal mobile experience

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration with image domains
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 💡 Features Included

1. **Hero Section**: Auto-rotating image slider with CTAs
2. **About Section**: Business story with image grid
3. **Menu Section**: Categorized menu items with prices
4. **Location Section**: Address, hours, embedded Google Map
5. **Contact Section**: Contact form and social media links

## 📞 Support

For questions or issues, please contact:
- Email: info@islandcuisineclt.com
- Phone: (704) 555-0123

---

**Built with ❤️ for Island Cuisine**
