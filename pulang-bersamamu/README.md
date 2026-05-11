# 💕 Pulang Bersamamu - Home With You

A beautiful, cozy couple's website built with React, Tailwind CSS, and Framer Motion. This is a static frontend-only website perfect for celebrating your love and sharing your journey together.

![Version](https://img.shields.io/badge/version-1.0.0-blueviolet)
![License](https://img.shields.io/badge/license-MIT-pink)

## 🌟 Features

- **Hero Section** - Stunning photo collage with animated CTAs
- **Memory Lane** - Timeline view of your special moments
- **Gallery** - Masonry grid with hover effects and modal previews
- **Letters** - Expandable love letter cards with smooth animations
- **Favorites** - Tabbed section for songs, foods, and activities
- **Future Dreams** - Interactive checklist of dreams and plans with progress tracking
- **Responsive Design** - Mobile-first, fully responsive across all devices
- **Smooth Animations** - Framer Motion animations for immersive experience
- **Privacy** - No backend, no database, completely static

## 🎨 Design Details

### Color Palette
- Cream: `#FAF8F4` - Primary background
- Rose: `#F5D9E2` - Accent color
- Sage: `#D6E4D4` - Secondary accent
- Lavender: `#E7E0F5` - Tertiary accent
- Brown: `#5A4D47` - Text and depth
- Mauve: `#B89AA8` - Subtle accents

### Typography
- **Headings**: Playfair Display - Elegant and bold
- **Body**: Nunito - Clean and readable
- **Accents**: Caveat - Playful and warm

### UI Elements
- 24px rounded corner cards
- Soft shadows for depth
- Pill-shaped buttons
- Floating hover animations
- Polaroid-style image effects
- Smooth scroll reveals

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone or download the project**
```bash
cd pulang-bersamamu
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will open at `http://localhost:3000`

## 📁 Project Structure

```
pulang-bersamamu/
├── public/
│   └── images/          # Place your images here
│       ├── hero-*.jpg
│       ├── memory-*.jpg
│       ├── gallery-*.jpg
│       └── ...
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── MemoryLane.jsx
│   │   ├── Gallery.jsx
│   │   ├── Letters.jsx
│   │   ├── Favorites.jsx
│   │   ├── FuturePlans.jsx
│   │   └── Footer.jsx
│   ├── data/           # Content and data
│   │   └── content.js
│   ├── utils/          # Utility functions
│   │   └── animations.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── package.json        # Dependencies
└── README.md          # This file
```

## 🖼️ Setting Up Your Images

Replace the placeholder images with your actual photos:

### Image Paths Needed:
- `public/images/hero-1.jpg` through `hero-5.jpg` - Hero collage (5 images)
- `public/images/memory-1.jpg` through `memory-4.jpg` - Timeline photos (4 images)
- `public/images/gallery-1.jpg` through `gallery-8.jpg` - Gallery photos (8 images)

### Image Recommendations:
- **Hero Images**: 300x300px to 500x500px
- **Memory Lane**: 400x300px landscape
- **Gallery**: Various sizes (masonry adapts to different ratios)
- **Formats**: JPG, PNG, or WebP (JPG recommended for faster loading)

### How to Add Images:
1. Create `public/images/` folder if it doesn't exist
2. Place your images in this folder
3. No code changes needed - paths are pre-configured!

## 📝 Customizing Content

All content is stored in `src/data/content.js`. Edit directly:

### Memory Lane
```javascript
export const memoryLaneData = [
  {
    id: 1,
    title: 'Your Title',
    date: 'Month Day, Year',
    description: 'Your description...',
    image: '/images/memory-1.jpg',
    emoji: '✨'
  },
  // ... more items
]
```

### Letters
```javascript
export const lettersData = [
  {
    id: 1,
    from: 'Him' or 'Her',
    date: 'Month Year',
    title: 'Letter Title',
    content: 'Your love letter...',
    color: 'rose' | 'lavender' | 'sage'
  },
  // ... more letters
]
```

### Favorites
```javascript
export const favoritesData = {
  songs: [ /* ... */ ],
  foods: [ /* ... */ ],
  activities: [ /* ... */ ]
}
```

### Future Plans
```javascript
export const futurePlansData = [
  {
    id: 1,
    dream: 'Dream title',
    status: 'pending' | 'in-progress' | 'completed',
    emoji: '🎯',
    details: 'Additional details...'
  },
  // ... more dreams
]
```

## 🎬 Customizing Styles

### Colors
Edit `tailwind.config.js` to change the color palette:
```javascript
colors: {
  'cream': '#FAF8F4',
  'rose': '#F5D9E2',
  // ... etc
}
```

### Fonts
Change Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONTS" rel="stylesheet" />
```

### Animations
Modify animation values in `tailwind.config.js` keyframes section or `src/utils/animations.jsx`

## 🎵 Adding Spotify Embed

In `src/components/Favorites.jsx`, replace the placeholder:

```jsx
<iframe 
  src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID?utm_source=generator"
  width="100%"
  height="380"
  frameBorder="0"
  className="rounded-xl"
/>
```

Get your Spotify playlist share link and extract the ID from it.

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

## 🚀 Deployment

### GitHub + Vercel (Recommended)

1. **Create a GitHub repository** and push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/pulang-bersamamu.git
git branch -M main
git push -u origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Your site will be live at `your-name.vercel.app`

### Other Deployment Options

**Netlify**:
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**GitHub Pages**:
```bash
npm run build
# Push dist folder to gh-pages branch
```

**Traditional Hosting**:
- Run `npm run build`
- Upload the `dist/` folder to your web hosting
- Set your web server to serve `index.html` for all routes

## 📱 Mobile Optimization

The site is fully responsive:
- Mobile-first design approach
- Optimized for screens 320px and up
- Touch-friendly buttons and interactive elements
- Adaptive layouts for tablets and desktops

Test responsiveness:
```bash
# Use your browser's DevTools (F12)
# or visit on your mobile device
```

## ⚡ Performance Tips

- Keep images optimized (compress before uploading)
- Use JPG format for photos, PNG for graphics
- Consider lazy loading for gallery images
- Enable browser caching on your hosting

## 🔒 Privacy & Security

- ✅ No backend server needed
- ✅ No database or user tracking
- ✅ All data stored locally in code
- ✅ SSL-ready for HTTPS on Vercel/Netlify
- ✅ No third-party tracking (except fonts & Spotify embeds)

## 🐛 Troubleshooting

**Images not showing?**
- Check that images are in `public/images/` folder
- Verify image filenames match the code
- Check browser console for 404 errors

**Animations not working?**
- Ensure Framer Motion is installed: `npm install framer-motion`
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

**Build failing?**
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again
- Try `npm run build` again

**Styling issues?**
- Check that Tailwind CSS is properly configured
- Rebuild if you modified `tailwind.config.js`
- Clear browser cache

## 📚 Dependencies

- **React** - UI framework
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Icons** - Icon library

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Docs](https://vitejs.dev)

## 💝 Personalization Tips

1. **Add more photos** - Create more memory lane entries with your actual photos
2. **Update letters** - Write your own heartfelt messages
3. **Custom colors** - Adjust the palette to match your style
4. **Add music** - Embed your shared Spotify playlist
5. **Expand dreams** - Add more future plans and milestones
6. **Personal touches** - Modify emojis and decorative elements

## 📄 License

This project is open source and available under the MIT License.

## 💌 Share Your Love

If you use this website, we'd love to hear about it! This template was created with love for couples who want to celebrate their journey together in a special, private space.

---

**Made with 💕 for couples everywhere**

"Home is wherever I'm with you" 💫

### Quick Start Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Enjoy creating your little world together! 🌍✨
