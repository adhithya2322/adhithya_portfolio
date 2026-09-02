// =====================
// Smooth Scrolling & Navigation
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.querySelector('.nav-menu')?.classList.remove('active');
        }
    });
});

// =====================
// Navbar Active Link
// =====================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// =====================
// Animate Elements on Scroll
// =====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and content elements
document.querySelectorAll('.project-card, .skill-category, .education-item, .achievement-card, .cert-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// =====================
// Smooth Page Load Animation
// =====================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// =====================
// Copy to Clipboard Function
// =====================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const message = document.createElement('div');
        message.textContent = 'Copied to clipboard!';
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 1000;
            animation: slideInRight 0.3s ease;
        `;
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.animation = 'slideInLeft 0.3s ease reverse';
            setTimeout(() => message.remove(), 300);
        }, 2000);
    });
}

// =====================
// Mobile Menu Toggle
// =====================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// =====================
// Scroll to Top Button
// =====================
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =====================
// Form Validation (if needed)
// =====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        try {
            // Here you would send data to your backend
            console.log('Form data:', data);
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred. Please try again.');
        }
    });
}

// =====================
// Dynamic Year in Footer
// =====================
const yearElements = document.querySelectorAll('.year-dynamic');
yearElements.forEach(el => {
    el.textContent = new Date().getFullYear();
});

// =====================
// Skill Filter (Optional)
// =====================
const skillFilters = document.querySelectorAll('.skill-filter');
const skillCards = document.querySelectorAll('.skill-category');

if (skillFilters.length > 0) {
    skillFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const category = filter.getAttribute('data-category');
            
            skillFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            skillCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// =====================
// Project Filter (Optional)
// =====================
const projectFilters = document.querySelectorAll('.project-filter');
const projectCards = document.querySelectorAll('.project-card');

if (projectFilters.length > 0) {
    projectFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const category = filter.getAttribute('data-category');
            
            projectFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// =====================
// Lazy Load Images
// =====================
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
} else {
    // Fallback for older browsers
    document.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
    });
}

// =====================
// Download Resume
// =====================
const downloadResumeBtn = document.getElementById('downloadResumeBtn');

if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', () => {
        // Create or link to your resume file
        const resumeUrl = 'assets/resume/Adhithya-Resume.pdf';
        window.open(resumeUrl, '_blank');
    });
}

// =====================
// Track Active Navigation
// =====================
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

updateActiveNav();

// =====================
// Performance Monitoring
// =====================
if ('PerformanceObserver' in window) {
    try {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log(`${entry.name}: ${entry.duration}ms`);
            }
        });
        observer.observe({ entryTypes: ['measure', 'navigation'] });
    } catch (e) {
        // Performance API not supported
    }
}

// =====================
// Initialize Tooltips (if using)
// =====================
const tooltips = document.querySelectorAll('[data-tooltip]');
tooltips.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = el.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);

        const rect = el.getBoundingClientRect();
        tooltip.style.position = 'fixed';
        tooltip.style.top = `${rect.top - 30}px`;
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.backgroundColor = '#6366f1';
        tooltip.style.color = 'white';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.fontSize = '12px';
        tooltip.style.zIndex = '1000';
    });

    el.addEventListener('mouseleave', () => {
        document.querySelector('.tooltip')?.remove();
    });
});

// =====================
// Console Welcome Message
// =====================
console.log('%cWelcome to Gunti Adhithya\'s Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cCheck out the projects and get in touch for collaborations!', 'color: #ec4899; font-size: 14px;');

// =====================
// Utility Functions
// =====================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// =====================
// Add Active Link CSS
// =====================
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #6366f1;
        border-bottom: 2px solid #6366f1;
    }

    .tooltip {
        animation: fadeInUp 0.3s ease;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// =====================
// Page Visibility API
// =====================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('You left the portfolio. Come back soon!');
    } else {
        console.log('Welcome back to the portfolio!');
    }
});
