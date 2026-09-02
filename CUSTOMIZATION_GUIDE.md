# Customization Guide

This guide will help you customize the portfolio to make it your own.

## 🎯 Quick Customization Checklist

- [ ] Update personal information in `data.json`
- [ ] Add your profile image to `assets/profile.jpg`
- [ ] Update social media links
- [ ] Add project details and images
- [ ] Update skills and competencies
- [ ] Change color scheme (optional)
- [ ] Test on mobile devices
- [ ] Deploy to hosting platform

## 📝 Detailed Customization Steps

### 1. Update Personal Information

**File:** `data.json`

```json
{
  "personal": {
    "name": "Your Full Name",
    "title": "Your Professional Title",
    "email": "your.email@example.com",
    "phone": "+91-XXXXXXXXXX",
    "location": "Your City, Country",
    "bio": "Your professional bio here",
    "summary": "Your career summary"
  }
}
```

### 2. Add Profile Image

1. Prepare a professional image (recommend 300x300px or larger)
2. Save as `assets/profile.jpg`
3. Ensure it's optimized (compress to reduce file size)

### 3. Update Education Information

**File:** `data.json` → `education` array

```json
{
  "education": [
    {
      "id": 1,
      "degree": "B.Tech",
      "field": "Your Field",
      "institution": "Your Institution Name",
      "cgpa": "9.0/10",
      "year": "2024"
    }
  ]
}
```

### 4. Update Skills

**File:** `data.json` → `skills` object

Add your skills under each category:
```json
{
  "skills": {
    "machinelearning": [
      "Your Skill 1",
      "Your Skill 2"
    ],
    "deeplearning": ["Your Skill"],
    "nlp": ["Your Skill"],
    "datasciencetech": ["Python", "SQL"],
    "frontend": ["HTML", "CSS", "JavaScript"],
    "backend": ["Node.js", "Express.js"],
    "deployment": ["Git", "GitHub"]
  }
}
```

### 5. Add/Update Projects

**File:** `data.json` → `projects` array

```json
{
  "projects": [
    {
      "id": 1,
      "category": "AI/ML",
      "title": "Your Project Name",
      "description": "Detailed description of what you built",
      "technologies": ["Tech1", "Tech2", "Tech3"],
      "tags": ["Tag1", "Tag2"],
      "features": [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ],
      "image": "assets/projects/your-project.jpg",
      "github": "https://github.com/yourusername/project-name",
      "demo": "https://your-project-demo.com",
      "status": "Completed"
    }
  ]
}
```

**Project Categories:**
- `AI/ML`
- `Data Science`
- `Full Stack`

### 6. Update Certifications

**File:** `data.json` → `certifications` array

```json
{
  "certifications": [
    {
      "id": 1,
      "title": "Certification Name",
      "issuer": "Issuing Organization",
      "date": "2024",
      "credentialUrl": "https://credential-url.com",
      "image": "assets/certifications/cert-name.jpg"
    }
  ]
}
```

### 7. Update Achievements

**File:** `data.json` → `achievements` array

```json
{
  "achievements": [
    {
      "id": 1,
      "title": "Achievement Title",
      "description": "Description of the achievement",
      "type": "Merit Scholarship",
      "year": "2024"
    }
  ]
}
```

### 8. Update Contact Information

**File:** `data.json` → `social` object

```json
{
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername",
    "email": "your.email@example.com",
    "portfolio": "https://your-portfolio.com"
  }
}
```

### 9. Change Color Scheme

**File:** `css/styles.css`

Modify the root CSS variables:

```css
:root {
    --primary-color: #6366f1;      /* Change this */
    --primary-dark: #4f46e5;       /* Change this */
    --secondary-color: #ec4899;    /* Change this */
    --accent-color: #f59e0b;       /* Change this */
    --background: #0f172a;         /* Change this */
    --background-light: #1e293b;   /* Change this */
    --text-primary: #f1f5f9;       /* Change this */
    --text-secondary: #cbd5e1;     /* Change this */
}
```

**Popular Color Combinations:**
- Purple & Pink: `#6366f1` & `#ec4899`
- Blue & Green: `#0ea5e9` & `#10b981`
- Orange & Red: `#f97316` & `#ef4444`
- Teal & Cyan: `#14b8a6` & `#06b6d4`

### 10. Update Navigation Links

**File:** `index.html`

The navigation links are automatically generated from section IDs. Ensure section IDs match the href attributes:

```html
<a href="#projects" class="nav-link">Projects</a>
<!-- Must have corresponding section -->
<section id="projects">...</section>
```

### 11. Add Resume Download

1. Add your resume PDF to `assets/resume/Adhithya-Resume.pdf`
2. Link from contact section or create a download button
3. Update the file path in links

### 12. Update Meta Tags for SEO

**File:** `index.html` → `<head>` section

```html
<meta name="description" content="Your professional portfolio description">
<meta name="keywords" content="Your, Keywords, Here">
<meta name="author" content="Your Name">
```

### 13. Add Google Analytics (Optional)

Add to `index.html` before closing `</body>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 14. Add Favicon

1. Create or download a favicon (32x32px PNG)
2. Save as `assets/favicon.ico`
3. Add to `index.html` `<head>`:

```html
<link rel="icon" type="image/x-icon" href="assets/favicon.ico">
```

### 15. Customize Fonts (Optional)

Add Google Fonts to `index.html` `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Update in `css/styles.css`:

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

## 🎨 Theme Customization Examples

### Dark Purple Theme
```css
--primary-color: #8b5cf6;
--secondary-color: #d946ef;
--accent-color: #f59e0b;
--background: #0f0415;
--background-light: #1f0933;
```

### Ocean Blue Theme
```css
--primary-color: #0284c7;
--secondary-color: #0ea5e9;
--accent-color: #10b981;
--background: #0c1117;
--background-light: #161b22;
```

### Sunset Orange Theme
```css
--primary-color: #ea580c;
--secondary-color: #f97316;
--accent-color: #eab308;
--background: #1a0f0a;
--background-light: #2d1810;
```

## 📁 Asset Organization

Create the following folder structure in `assets/`:

```
assets/
├── profile.jpg              # Your profile picture
├── favicon.ico              # Website favicon
├── projects/
│   ├── project1.jpg
│   ├── project2.jpg
│   └── project3.jpg
├── certifications/
│   ├── cert1.jpg
│   ├── cert2.jpg
│   └── cert3.jpg
└── resume/
    └── Adhithya-Resume.pdf
```

## 🚀 Before Deployment

1. **Test Locally**
   - Open in multiple browsers
   - Test on mobile devices
   - Check all links work
   - Verify images load

2. **Optimize Assets**
   - Compress images
   - Minify CSS/JS (optional)
   - Check file sizes

3. **SEO Optimization**
   - Update meta tags
   - Add structured data
   - Check sitemap (if needed)

4. **Performance**
   - Run Lighthouse audit
   - Check page load time
   - Optimize critical resources

5. **Accessibility**
   - Check color contrast
   - Test keyboard navigation
   - Verify alt text on images

## 🔧 Advanced Customization

### Custom Animations

Add to `css/styles.css`:

```css
@keyframes yourAnimation {
    0% { transform: translateX(0); }
    50% { transform: translateX(10px); }
    100% { transform: translateX(0); }
}

.element {
    animation: yourAnimation 1s ease infinite;
}
```

### Custom JavaScript

Add to `js/main.js`:

```javascript
// Your custom functionality
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
});
```

### Form Submission

To enable contact form submissions, integrate with:
- Formspree
- Netlify Forms
- Firebase
- Custom backend

## 📞 Support

For issues or questions:
1. Check README.md
2. Review the code comments
3. Test in browser console for errors
4. Check responsive design

## ✅ Testing Checklist

- [ ] All links work correctly
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] Navigation smooth
- [ ] Forms functional (if added)
- [ ] Performance acceptable
- [ ] No console errors
- [ ] SEO optimized
- [ ] Cross-browser compatible
- [ ] Accessibility compliant

---

**Happy Customizing!** 🎉

For more help, refer to the main README.md file.
