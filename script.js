// Language translations (optimizado)
const translations = {
en: {
    work: "Work",
    about: "About",
    contact: "Contact",
    available: "Available for remote work",
    heroTitle: "Designing digital experiences that",
    heroHighlight: "make a difference",
    heroSubtitle: "Hi! I'm Vitor, a UX/UI designer from Porto / Portugal, who combines design thinking with technical skills to create intuitive interfaces and brand identities.",
    viewWork: "View Work",
    getInTouch: "Get in Touch",
    selectedWork: "Selected Work",
    workDescription: "Projects demonstrating user-centered design and technical implementation.",
    uxuiTitle: "UX/UI Design",
    uxuiDesc: "Digital experiences with user-centered approach and modern interfaces.",
    portfolio2: "EDIT School Management System",
    portfolio3: "Cookieng - Sweets with a Twist",
    logoTitle: "Brand Identity",
    logoDesc: "Visual identities that communicate brand values.",
    productTitle: "Product Design",
    productDesc: "Graphic designs for product marketing.",
    flyerTitle: "Flyer Design",
    flyerDesc: "Promotional materials for cultural events.",
    aboutTitle: "About Me",
    aboutText: "UX/UI Designer with 9+ years of graphic design experience. I combine design thinking methodology with technical skills to create intuitive interfaces and effective brand identities.",
    linkedin: "LinkedIn",
    downloadCV: "Download CV",
    uxuiSkills: "Relevant Skills",
    technicalSkills: "Software",
    certs: "🎓 Education",
    fcup: "Faculty of Sciences, University of Porto",
    contactTitle: "Let's work together!",
    copy: "Copy Email",
    copied: "Copied!",
    location: "Location",
    locationValue: "Porto, Portugal",
    languages: "Languages",
    languagesValue: "Portuguese (Native), English (C1)",
    workPreference: "Work Preference",
    workPreferenceValue: "On-site, Hybrid or Remote",
    viewLinkedin: "Connect professionally",
    viewAbout: "Learn more",
    viewCV: "View resume",
    footerText: "© 2025 Vitor Pinto. All rights reserved."
},
    pt: {
    work: "Trabalhos",
    about: "Sobre",
    contact: "Contacto",
    available: "Disponível para trabalho remoto",
    heroTitle: "A criar experiências digitais que",
    heroHighlight: "fazem a diferença",
    heroSubtitle: "Olá! Sou o Vitor, designer UX/UI do Porto que combina design thinking com competências técnicas para criar interfaces intuitivas e identidades de marca.",
    viewWork: "Ver Trabalhos",
    getInTouch: "Entrar em Contacto",
    selectedWork: "Trabalhos Selecionados",
    workDescription: "Projetos que demonstram design centrado no utilizador e implementação técnica.",
    uxuiTitle: "Design UX/UI",
    uxuiDesc: "Experiências digitais com abordagem centrada no utilizador e interfaces modernas.",
    portfolio2: "Sistema de Gestão, EDIT",
    portfolio3: "Cookieng - Doces com um Twist",
    logoTitle: "Identidade de Marca",
    logoDesc: "Identidades visuais que comunicam valores das marcas.",
    productTitle: "Design de Produto",
    productDesc: "Designs gráficos para marketing de produtos.",
    flyerTitle: "Design de Flyers",
    flyerDesc: "Materiais promocionais para eventos culturais.",
    aboutTitle: "Sobre Mim",
    aboutText: "Designer UX/UI com mais de 9 anos de experiência em design gráfico. Combino metodologia design thinking com competências técnicas para criar interfaces intuitivas e identidades de marca eficazes.",
    linkedin: "LinkedIn",
    downloadCV: "Baixar CV",
    uxuiSkills: "Competências Relevantes",
    technicalSkills: "Software",
    certs: "🎓 Experiência Académica",
    fcup: "Faculdade de Ciências da Universidade do Porto",
    contactTitle: "Vamos trabalhar juntos!",
    copy: "Copiar Email",
    copied: "Copiado!",
    location: "Localização",
    locationValue: "Porto, Portugal",
    languages: "Idiomas",
    languagesValue: "Português (Nativo), Inglês (C1)",
    workPreference: "Preferência de Trabalho",
    workPreferenceValue: "Presencial, Híbrido ou Remoto",
    viewLinkedin: "Conectar profissionalmente",
    viewAbout: "Saber mais",
    viewCV: "Ver currículo",
    footerText: "© 2025 Vitor Pinto. Todos os direitos reservados."
}
};

let currentLanguage = 'en';
let isNavigating = false;

// Initialize application with Apple-inspired optimizations
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializeAnimations();
    initializeLightbox();
    initializeNavigation();
    initializeSmoothScroll();
    initializeImageOptimization();
    initializePerformanceOptimizations();
    initializeAppleFeatures();
});

// Language Management (optimizado)
function initializeLanguage() {
    try {
        currentLanguage = localStorage.getItem('language') || 'en';
    } catch (e) {
        currentLanguage = 'en';
    }
    updateContent();
    updateLanguageButton();
}

function toggleLanguage() {
    if (isNavigating) return;
    
    isNavigating = true;
    currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    
    // Apple-style animation
    const toggle = document.querySelector('.language-toggle');
    if (toggle) {
        toggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            toggle.style.transform = '';
        }, 150);
    }
    
    updateContent();
    updateLanguageButton();
    
    try {
        localStorage.setItem('language', currentLanguage);
    } catch (e) {
        console.warn('Cannot save language preference');
    }
    
    handlePortfolioRedirection();
    
    setTimeout(() => {
        isNavigating = false;
    }, 300);
}

function updateContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[currentLanguage]?.[key];
        if (translation) {
            element.textContent = translation;
        }
    });

    updateCVLink();
}

function updateCVLink() {
    const cvLinks = document.querySelectorAll('#cv-link');
    cvLinks.forEach(cvLink => {
        if (cvLink) {
            const cvFile = currentLanguage === 'pt' ? 'vitorcv2025-en.pdf' : 'vitorcv2025-en.pdf';
            cvLink.href = cvFile;
            cvLink.download = cvFile;
        }
    });
}

function updateLanguageButton() {
    const languageToggle = document.querySelector('.language-toggle');
    if (languageToggle) {
        const labels = languageToggle.querySelectorAll('.toggle-label');
        
        if (currentLanguage === 'pt') {
            languageToggle.classList.add('pt');
            labels[0]?.classList.remove('active');
            labels[1]?.classList.add('active');
        } else {
            languageToggle.classList.remove('pt');
            labels[0]?.classList.add('active');
            labels[1]?.classList.remove('active');
        }
    }
}

function handlePortfolioRedirection() {
    const currentPage = window.location.pathname;
    if (currentPage.includes('portfolio-item-')) {
        const match = currentPage.match(/portfolio-item-(\d+)/);
        if (match) {
            const itemNumber = match[1];
            const langSuffix = currentLanguage === 'pt' ? '' : 'en';
            const newUrl = `portfolio-item-${itemNumber}${langSuffix ? langSuffix : ''}.html`;
            window.location.href = newUrl;
        }
    }
}

// Apple-style animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.style.opacity = '1';
                target.style.transform = 'translateY(0)';
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    // Apple-style staggered animation
    const animatedElements = document.querySelectorAll('.project-card, .brand-card, .print-card');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${Math.min(index * 0.08, 0.6)}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${Math.min(index * 0.08, 0.6)}s`;
        observer.observe(el);
    });
}

// Portfolio Navigation (optimizado)
function openPortfolioItem(itemNumber) {
    if (isNavigating) return;
    
    isNavigating = true;
    const langSuffix = currentLanguage === 'pt' ? '' : 'en';
    const url = `portfolio-item-${itemNumber}${langSuffix ? langSuffix : ''}.html`;
    
    // Apple-style smooth transition
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
    
    setTimeout(() => {
        window.location.href = url;
    }, 100);
}

// Enhanced Lightbox
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    
    if (!lightbox || !lightboxImg) return;
    
    const img = new Image();
    img.onload = () => {
        lightboxImg.src = imageSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Apple-style fade in
        lightboxImg.style.opacity = '0';
        lightboxImg.style.transform = 'scale(0.9)';
        requestAnimationFrame(() => {
            lightboxImg.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            lightboxImg.style.opacity = '1';
            lightboxImg.style.transform = 'scale(1)';
        });
    };
    img.src = imageSrc;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        
        const lightboxImg = document.getElementById('lightbox-image');
        if (lightboxImg) {
            setTimeout(() => {
                lightboxImg.src = '';
                lightboxImg.style.transition = '';
            }, 300);
        }
    }
}

// Apple-style Navigation
function initializeNavigation() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNav() {
        const scrollY = window.scrollY;
        
        if (Math.abs(scrollY - lastScrollY) < 5 && ticking) return;
        
        // Apple-style backdrop blur effect
        if (scrollY > 50) {
            nav.style.background = 'rgba(250, 250, 250, 0.8)';
            nav.style.backdropFilter = 'blur(20px)';
            nav.style.borderBottomColor = 'rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(250, 250, 250, 0.9)';
            nav.style.backdropFilter = 'blur(20px)';
            nav.style.borderBottomColor = 'rgba(0, 0, 0, 0.05)';
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNav);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
}

// Enhanced Smooth Scroll
function initializeSmoothScroll() {
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for nav height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// Enhanced Email Copy
function copyEmail() {
    const email = 'vitorlanzanapinto@gmail.com';
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
            showCopyFeedback();
        }).catch(() => {
            fallbackCopyText(email);
        });
    } else {
        fallbackCopyText(email);
    }
}

function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.cssText = 'position:fixed;left:-999999px;top:-999999px;opacity:0;';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyFeedback();
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
    
    document.body.removeChild(textArea);
}

function showCopyFeedback() {
    const button = document.querySelector('.copy-button');
    if (!button) return;
    
    const originalText = button.textContent;
    const copiedText = translations[currentLanguage].copied;
    
    // Apple-style success animation
    button.textContent = copiedText;
    button.classList.add('copied');
    button.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        button.style.transform = '';
    }, 150);
    
    setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('copied');
    }, 2000);
}

// Enhanced Image Optimization
function initializeImageOptimization() {
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.loading = 'lazy';
            }
        });
    } else {
        initializeLazyLoading();
    }
}

function initializeLazyLoading() {
    if (!('IntersectionObserver' in window)) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
                observer.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Apple-specific features
function initializeAppleFeatures() {
    // Reduced motion support
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }
    
    // Enhanced touch interactions
    initializeTouchOptimizations();
    
    // Parallax scroll indicator
    initializeScrollIndicator();
}

function initializeTouchOptimizations() {
    if (!('ontouchstart' in window)) return;

    const cards = document.querySelectorAll('.project-card, .brand-card, .print-card');
    cards.forEach(card => {
        let touchStartTime;
        
        card.addEventListener('touchstart', function(e) {
            touchStartTime = Date.now();
            this.style.transform = 'scale(0.97)';
            this.style.transition = 'transform 0.1s ease';
        }, { passive: true });
        
        card.addEventListener('touchend', function(e) {
            const touchEndTime = Date.now();
            const touchDuration = touchEndTime - touchStartTime;
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            }, touchDuration < 150 ? 150 - touchDuration : 0);
        }, { passive: true });
    });
}

function initializeScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scrollIndicator.style.opacity = '1';
            } else {
                scrollIndicator.style.opacity = '0.5';
            }
        });
    });
    
    const hero = document.querySelector('.hero');
    if (hero) observer.observe(hero);
}

// Performance optimizations
function initializePerformanceOptimizations() {
    preloadCriticalResources();
    
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            handleResize();
        }, 250);
    }, { passive: true });
}

function preloadCriticalResources() {
    const criticalImages = [
        './images/uxui/gtpreview.png',
        './images/uxui/editpreview.png',
        './images/uxui/cookiengpreview.png'
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

function handleResize() {
    // Responsive adjustments
    const viewportWidth = window.innerWidth;
    
    if (viewportWidth <= 768) {
        // Mobile optimizations
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }
        }, 0);
    });
}
