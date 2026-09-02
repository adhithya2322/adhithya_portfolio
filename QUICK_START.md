# Quick Start Guide

Get your portfolio up and running in minutes!

## ⚡ 5-Minute Setup

### Step 1: Review Your Information
- Portfolio data is in `data.json`
- All your personal info, projects, skills are there

### Step 2: Replace Placeholder Links
In `data.json`, update:
- `email`: your actual email
- `phone`: your actual phone
- GitHub links: your GitHub URLs
- LinkedIn: your LinkedIn profile
- Social links: your social media profiles

### Step 3: Add Your Images
1. Add profile photo: `assets/profile.jpg`
2. Add project images to: `assets/projects/`
3. Add certification images to: `assets/certifications/`

### Step 4: Test Locally
Open `index.html` in your browser or run:
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

### Step 5: Deploy
Choose one:
- **Vercel**: `vercel` command
- **GitHub Pages**: Push to GitHub
- **Netlify**: Connect repo
- **Traditional Hosting**: FTP upload

## 📋 Essential Edits

### Most Important Changes (Do First!)

**1. Personal Details** - `data.json`
```json
"name": "YOUR NAME",
"email": "YOUR EMAIL",
"phone": "YOUR PHONE",
```

**2. Social Links** - `data.json`
```json
"github": "YOUR GITHUB URL",
"linkedin": "YOUR LINKEDIN URL",
```

**3. Project Links** - `data.json`
```json
"github": "YOUR PROJECT GITHUB URL",
"demo": "YOUR LIVE DEMO URL",
```

**4. Profile Image** - `assets/profile.jpg`
Replace with your professional photo

## 🎨 Optional Customizations

### Change Colors
Edit `css/styles.css` - root variables:
```css
--primary-color: #YOUR_COLOR;
--secondary-color: #YOUR_COLOR;
```

### Change Title
Edit `index.html` - hero section:
```html
<p class="hero-subtitle">YOUR TITLE HERE</p>
```

### Update Bio
Edit `data.json` - personal section:
```json
"bio": "YOUR BIO HERE",
"summary": "YOUR SUMMARY HERE",
```

## 🚀 Deployment Quick Links

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Select main branch
3. Done! (site at yourusername.github.io/adhithya-portfolio)

### Netlify
1. Drag & drop folder on Netlify
2. Or connect GitHub repo
3. Auto-deploys on push

## 📁 File Structure Reference

```
index.html          ← Main website file
data.json           ← Your data (edit this!)
css/
  styles.css        ← Design (colors, fonts)
  responsive.css    ← Mobile styles
js/
  main.js           ← Interactions
assets/
  profile.jpg       ← Your photo
  projects/         ← Project images
  certifications/   ← Certificate images
  resume/           ← Your resume PDF
```

## ✅ Before Going Live

- [ ] Update all contact info
- [ ] Add your real email/phone
- [ ] Add profile image
- [ ] Update project links
- [ ] Add project descriptions
- [ ] Check mobile view
- [ ] Test all links work
- [ ] Deploy and share!

## 🔧 Common Tasks

### Add a New Project
1. Open `data.json`
2. Find `projects` array
3. Add new project object:
```json
{
  "id": 5,
  "category": "Full Stack",
  "title": "Your Project",
  "description": "What it does",
  "technologies": ["Tech1", "Tech2"],
  "github": "https://...",
  "demo": "https://..."
}
```

### Add New Skill
1. Open `data.json`
2. Find `skills` section
3. Add to appropriate category:
```json
"machinelearning": ["Your New Skill"]
```

### Change Primary Color
1. Open `css/styles.css`
2. Find `:root {`
3. Change `--primary-color: #NEWCOLOR;`

### Update Your Title
1. Open `data.json`
2. Find `personal` section
3. Change `title` value

## 💡 Tips

1. **Keep data.json organized** - Use proper JSON format
2. **Optimize images** - Use online tools (TinyPNG, Compressor.io)
3. **Use short descriptions** - Keep it concise
4. **Test on mobile** - Most visitors use phones
5. **Share on social** - LinkedIn, Twitter, GitHub
6. **Update regularly** - Add new projects/skills
7. **Get feedback** - Ask friends/mentors for input

## 🆘 Troubleshooting

**Images not showing?**
- Check file paths in `data.json`
- Ensure images are in `assets/` folder
- Check file names match exactly (case-sensitive)

**Links not working?**
- Copy full URL (including https://)
- Test URL in new tab
- Ensure no typos

**Page not loading?**
- Refresh browser (Ctrl+F5)
- Check console for errors (F12)
- Ensure index.html is in correct location

**Mobile looks weird?**
- Check responsive.css
- Test on real device
- Use browser dev tools (F12 → mobile view)

## 🎯 Next Steps

1. ✅ Update personal info
2. ✅ Add images
3. ✅ Test locally
4. ✅ Deploy
5. ✅ Share link
6. ✅ Collect feedback
7. ✅ Update regularly

## 📚 Full Documentation

For detailed customization, see: `CUSTOMIZATION_GUIDE.md`

## 🎉 You're All Set!

Your portfolio is ready to showcase your work. Now go update it with your information and deploy! 🚀

---

**Questions?** Check the README.md for more info!
