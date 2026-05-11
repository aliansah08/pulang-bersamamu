# ⚡ Quick Start Guide - 5 Minutes to Your Website

Follow this guide to get your Pulang Bersamamu website running locally in just 5 minutes!

## Prerequisites Checklist

Before starting, you need:
- [ ] Computer with Windows, Mac, or Linux
- [ ] Internet connection
- [ ] Text editor (VS Code, Sublime, etc.)

## Step-by-Step Setup

### Step 1: Install Node.js (2 minutes)

**Node.js** is required to run the project.

1. Go to [nodejs.org](https://nodejs.org)
2. Download the "LTS" (Long Term Support) version
3. Run the installer and follow the steps
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers (e.g., v18.0.0)

### Step 2: Get the Project Code (1 minute)

**Option A: Download ZIP (Easiest)**
1. Click the green "Code" button on GitHub
2. Select "Download ZIP"
3. Extract the ZIP file to your desired folder
4. Rename folder to `pulang-bersamamu` (optional)

**Option B: Clone with Git** (if you know Git)
```bash
git clone https://github.com/YOUR_USERNAME/pulang-bersamamu.git
cd pulang-bersamamu
```

### Step 3: Install Dependencies (2 minutes)

1. Open Terminal/Command Prompt
2. Navigate to your project folder:
   ```bash
   cd path/to/pulang-bersamamu
   ```
3. Install all dependencies:
   ```bash
   npm install
   ```
   This downloads all required packages (~5-10 minutes first time)

### Step 4: Start the Development Server (30 seconds)

Run this command:
```bash
npm run dev
```

You should see:
```
  VITE v5.0.8  ready in 123 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

Click the link or open [http://localhost:3000](http://localhost:3000) in your browser.

**Your website is now running!** 🎉

---

## Customizing Your Website

### 1. Add Your Photos (5 minutes)

1. Create folder: `public/images/`
2. Add your photos with these names:
   ```
   hero-1.jpg, hero-2.jpg, hero-3.jpg, hero-4.jpg, hero-5.jpg
   memory-1.jpg, memory-2.jpg, memory-3.jpg, memory-4.jpg
   gallery-1.jpg, gallery-2.jpg, ..., gallery-8.jpg
   ```
3. Save and refresh your browser - photos update automatically!

### 2. Update Text Content (10 minutes)

1. Open `src/data/content.js` in your text editor
2. Find the sections you want to edit
3. Replace the placeholder text with your own
4. Save the file
5. Your website updates automatically!

**Example - Update Memory Lane:**
```javascript
export const memoryLaneData = [
  {
    id: 1,
    title: 'When We Met',  // ← Change this
    date: 'January 15, 2023',  // ← Change this
    description: 'You walked in and my heart skipped a beat...',  // ← Change this
    image: '/images/memory-1.jpg',
    emoji: '💫'  // ← Change emoji if you want
  },
  // ... more memories
]
```

### 3. Change Colors (Optional, 5 minutes)

Edit `tailwind.config.js`:
```javascript
colors: {
  'cream': '#FAF8F4',  // ← Change this hex color
  'rose': '#F5D9E2',
  // ... etc
}
```

Popular color tools:
- [Coolors.co](https://coolors.co) - Color palette generator
- [Colordot.it](http://color.hailpixel.com/) - Quick color picker

---

## Common Tasks

### Add More Memory Lane Entries

In `src/data/content.js`, add to the array:
```javascript
{
  id: 5,
  title: 'Our Beach Trip',
  date: 'July 4, 2023',
  description: 'We watched the sunset together...',
  image: '/images/memory-5.jpg',
  emoji: '🌅'
}
```

### Write Love Letters

In `src/data/content.js`, add to `lettersData`:
```javascript
{
  id: 4,
  from: 'You',
  date: 'February 2024',
  title: 'My Promise to You',
  content: 'Write your beautiful words here...',
  color: 'rose'
}
```

### Add More Dreams

In `src/data/content.js`, add to `futurePlansData`:
```javascript
{
  id: 9,
  dream: 'Visit Japan together',
  status: 'pending',
  emoji: '🗾',
  details: 'Spring 2025 adventure'
}
```

### Change Navigation Menu Items

Edit `src/App.jsx` and find the navigation links:
```jsx
{
  { label: 'Our Story', id: 'memories' },
  { label: 'Gallery', id: 'gallery' },
  // Add or modify items here
}
```

---

## Keyboard Shortcuts in Development

While running `npm run dev`:

- `r` - Restart development server
- `o` - Open in browser
- `c` - Clear console
- `h` - Show help
- Press `q` to stop the server

---

## Troubleshooting

### "npm: command not found"
- Node.js not installed properly
- Restart your computer
- Try reinstalling Node.js

### "Port 3000 already in use"
- Another app is using port 3000
- Run: `npm run dev -- --port 3001`

### Images not showing
- Check `public/images/` folder exists
- Verify image filenames exactly match the code
- Restart `npm run dev`

### Changes not updating
- Save your file (Ctrl+S or Cmd+S)
- Check browser console for errors (F12)
- Try hard refresh (Ctrl+Shift+R)

### Styles looking weird
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Restart dev server

---

## Making It Production-Ready

When you're happy with your site:

### Build for Deployment

```bash
npm run build
```

This creates a `dist/` folder with your optimized website.

### Deploy to the Internet

**Easiest: Use Vercel (Recommended)**
1. Create account at [vercel.com](https://vercel.com)
2. Push your code to GitHub
3. Connect your GitHub to Vercel
4. Vercel automatically deploys!

**See DEPLOYMENT.md for other options**

---

## File Structure Explained

```
pulang-bersamamu/
│
├── public/           ← Your images go here
│   └── images/
│
├── src/              ← Your website code
│   ├── components/   ← Page sections (Hero, Gallery, etc.)
│   ├── data/         ← Your content (text, memories, etc.)
│   ├── utils/        ← Helper functions & animations
│   ├── App.jsx       ← Main page
│   └── index.css     ← Styles
│
├── index.html        ← Browser opens this first
├── vite.config.js    ← Build settings
├── tailwind.config.js ← Color & style settings
└── package.json      ← Dependencies list
```

---

## Next Steps

1. **Customize everything** - Make it truly yours!
2. **Add all your photos** - Replace placeholders
3. **Update all text** - Write your love story
4. **Test on mobile** - Check responsiveness
5. **Deploy online** - Share with the world!

---

## Getting Help

**Check these files:**
- `README.md` - Full documentation
- `DEPLOYMENT.md` - How to deploy online
- `src/data/content.js` - All your content

**Online Help:**
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

---

## Your Website is Ready! 🎉

You now have a beautiful, customizable couples' website. The hardest part is done!

**Next: Customize it with your own content and photos.**

### Recommended Flow:
1. ✅ Get code running locally
2. ➡️ Add your photos to `public/images/`
3. ➡️ Update `src/data/content.js` with your story
4. ➡️ Deploy to Vercel/Netlify
5. ➡️ Add custom domain (optional)
6. ➡️ Share with loved ones! 💕

---

**Made with ❤️ for couples in love**

Questions? Check the README.md or DEPLOYMENT.md files!

Happy customizing! 🌟
