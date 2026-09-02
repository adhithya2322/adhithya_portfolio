# Gunti Adhithya - Portfolio

A professional, modern, and fully responsive portfolio website showcasing AI/ML expertise and Full Stack development skills.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Sections](#sections)
- [Deployment](#deployment)
- [Contact](#contact)

## ✨ Features

- **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI** - Beautiful gradient design with smooth animations
- **Dark Theme** - Easy on the eyes with a professional dark aesthetic
- **Fast Performance** - Optimized for speed and SEO
- **Smooth Scrolling** - Elegant navigation and scroll behavior
- **Project Showcase** - Organized by categories (AI/ML, Data Science, Full Stack)
- **Skill Display** - Comprehensive skill tags across multiple categories
- **Education Timeline** - Clear presentation of academic achievements
- **Certifications** - Display of professional certifications
- **Achievements** - Highlight of scholarships and community service
- **Contact Section** - Easy way to get in touch

## 📁 Project Structure

```
adhithya-portfolio/
├── index.html                 # Main HTML file
├── data.json                  # Portfolio data (JSON format)
├── css/
│   ├── styles.css            # Main stylesheet
│   └── responsive.css        # Responsive breakpoints
├── js/
│   └── main.js               # JavaScript functionality
├── assets/
│   ├── profile.jpg           # Profile image
│   ├── projects/             # Project images
│   ├── certifications/       # Certification images
│   └── resume/               # Resume PDF
└── README.md                 # This file
```

## 🛠 Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and gradients
- **JavaScript (Vanilla)** - No framework dependencies
- **Responsive Design** - Mobile-first approach

### Features
- Intersection Observer API for scroll animations
- LocalStorage for preferences
- CSS Grid and Flexbox
- CSS Custom Properties (Variables)
- Smooth Scrolling API

## 🚀 Getting Started

### Option 1: Simple HTML (No Build Required)

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/yourusername/adhithya-portfolio.git
   cd adhithya-portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (http-server)
     npm install -g http-server
     http-server
     ```

3. **Visit in browser**
   - Open `http://localhost:8000` (or `http://localhost:5500` if using Live Server)

### Option 2: Using Live Server (VS Code Extension)

1. Install "Live Server" extension in VS Code
2. Right-click `index.html` and select "Open with Live Server"
3. The portfolio will open in your default browser

## ✏️ Customization

### 1. Update Personal Information

Edit the `data.json` file to update:
- Name and title
- Email and contact information
- Social media links
- Bio and summary

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    "phone": "+91-XXXXXXXXXX",
    "location": "Your Location"
  }
}
```

### 2. Update Skills

Modify the `skills` section in `data.json`:
```json
{
  "skills": {
    "machinelearning": [
      "Skill 1",
      "Skill 2"
    ]
  }
}
```

### 3. Add/Update Projects

Update the `projects` array in `data.json`:
```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "technologies": ["Tech 1", "Tech 2"],
      "github": "https://github.com/...",
      "demo": "https://..."
    }
  ]
}
```

### 4. Update Colors

Modify CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --accent-color: #f59e0b;
    /* ... other colors ... */
}
```

### 5. Update Social Links

Edit the `social` section in `data.json`:
```json
{
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername"
  }
}
```

## 📑 Sections

### 1. **Navigation**
- Sticky navbar with smooth navigation
- Active link highlighting
- Responsive mobile menu

### 2. **Hero Section**
- Eye-catching introduction
- Call-to-action buttons
- Animated background

### 3. **About**
- Professional summary
- Core competencies
- Statistics cards

### 4. **Skills**
- Organized by categories
- Skill tags with hover effects
- Current learning section

### 5. **Projects**
- Organized by category (AI/ML, Data Science, Full Stack)
- Detailed project cards
- Technologies, features, and links

### 6. **Education**
- Educational institutions
- CGPA display
- Certifications section

### 7. **Achievements**
- Merit scholarships
- Community service
- Special recognitions

### 8. **Contact**
- Email and phone
- Social media links
- Location information

## 📱 Responsive Breakpoints

The portfolio is optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎨 Color Scheme

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#ec4899` (Pink)
- **Accent**: `#f59e0b` (Amber)
- **Background**: `#0f172a` (Dark Blue)
- **Text**: `#f1f5f9` (Light Gray)

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Your portfolio will be live at `https://yourusername.github.io/adhithya-portfolio`

### Option 3: Netlify

1. Connect your GitHub repository
2. Set build command: (leave empty for static sites)
3. Set publish directory: `.`
4. Deploy!

### Option 4: Traditional Hosting

1. Upload files via FTP to your hosting provider
2. Ensure `index.html` is in the root directory

## 📊 SEO Optimization

- Semantic HTML5 markup
- Meta tags for description and keywords
- Proper heading hierarchy
- Fast loading performance
- Mobile-friendly design

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Resume Integration

To add a downloadable resume:

1. Place your resume PDF in `assets/resume/Adhithya-Resume.pdf`
2. Add a download button in the appropriate section
3. Link to the file for download

## 🎯 Performance Tips

1. **Optimize Images**
   - Use modern formats (WebP)
   - Compress images
   - Use appropriate dimensions

2. **Lazy Loading**
   - Images use data-src attribute
   - Loaded only when visible

3. **Caching**
   - Browser caching enabled
   - Static assets cached

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📝 License

This project is open source and available under the MIT License.

## 💬 Contact & Support

**Gunti Adhithya**
- Email: your.email@example.com
- Phone: +91-XXXXXXXXXX
- Location: Hyderabad, India

### Social Links
- [GitHub](https://github.com/yourusername)
- [LinkedIn](https://linkedin.com/in/yourusername)
- [Twitter](https://twitter.com/yourusername)

## 🙏 Acknowledgments

- Inspiration from modern portfolio designs
- CSS techniques and best practices
- Open-source community

---

**Last Updated**: 2024

Built with ❤️ using HTML, CSS & JavaScript
