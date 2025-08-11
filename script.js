// Language translations (optimizado)
const translations = {
    en: {
        work: "Work",
        about: "About",
        contact: "Contact",
        available: "Available for remote work",
        heroTitle: "Designing digital experiences that",
        heroHighlight: "make a difference",
        heroSubtitle: "UX/UI Designer with 9+ years of experience combining design thinking methodology with technical frontend skills to create intuitive interfaces and meaningful brand identities.",
        viewWork: "View My Work",
        getInTouch: "Get in Touch",
        selectedWork: "Selected Work",
        workDescription: "A showcase of projects that demonstrate my approach to user-centered design and technical implementation.",
        uxuiTitle: "UX/UI Design",
        uxuiDesc: "Digital experiences designed with user-centered approach and modern interface patterns.",
        portfolio2: "EDIT School Management System",
        portfolio3: "Cookieng - Sweets with a Twist",
        logoTitle: "Brand Identity",
        logoDesc: "Comprehensive brand systems and visual identities that communicate brand values effectively.",
        musicTitle: "Music Artworks",
        musicDesc: "Creative album covers and music-related visual designs that capture the essence of sound through imagery.",
        productTitle: "Product Design", 
        productDesc: "Print designs that combine striking visuals with effective communication for product marketing.",
        flyerTitle: "Flyer Design",
        flyerDesc: "Event and promotional materials designed to capture attention and communicate key information effectively.",
        aboutTitle: "About Me",
        aboutText: "Hi! I'm Vitor, a UX/UI designer that combines design thinking methodology with technical frontend skills to deliver intuitive interfaces and meaningful brand identities. With 9+ years of design experience, I believe every project is an opportunity to understand users deeply and create solutions that truly make a difference in their lives.",
        linkedin: "LinkedIn",
        downloadCV: "Download CV",
        uxuiSkills: "UX/UI Skills",
        technicalSkills: "Technical Skills",
        designProcess: "Design Process",
        certs: "Recent Certifications",
        fcup: "Faculty of Sciences, University of Porto",
        contactTitle: "Let's work together",
        copy: "Copy Email",
        copied: "Copied!",
        location: "Location",
        locationValue: "Porto, Portugal",
        languages: "Languages",
        languagesValue: "Portuguese (Native), English (C1)",
        workPreference: "Work Preference",
        workPreferenceValue: "Remote, Hybrid, On-site",
        viewLinkedin: "Connect with me professionally",
        viewAbout: "Learn more about my background",
        viewCV: "View my complete resume",
        footerText: "© 2025 Vitor Pinto. All rights reserved. Designed & developed with passion in Porto, Portugal."
    },
    pt: {
        work: "Trabalhos",
        about: "Sobre",
        contact: "Contacto",
        available: "Disponível para trabalho remoto",
        heroTitle: "Criando experiências digitais que",
        heroHighlight: "fazem a diferença",
        heroSubtitle: "Designer UX/UI com mais de 9 anos de experiência combinando metodologia design thinking com competências técnicas frontend para criar interfaces intuitivas e identidades de marca significativas.",
        viewWork: "Ver Trabalhos",
        getInTouch: "Entrar em Contacto",
        selectedWork: "Trabalhos Selecionados",
        workDescription: "Uma mostra de projetos que demonstram a minha abordagem ao design centrado no utilizador e implementação técnica.",
        uxuiTitle: "Design UX/UI",
        uxuiDesc: "Experiências digitais projetadas com abordagem centrada no utilizador e padrões de interface modernos.",
        portfolio2: "Sistema de Gestão, EDIT",
        portfolio3: "Cookieng - Doces com um Twist",
        logoTitle: "Identidade de Marca",
        logoDesc: "Sistemas de marca abrangentes e identidades visuais que comunicam eficazmente os valores da marca.",
        musicTitle: "Artwork Musical",
        musicDesc: "Capas de álbuns e designs visuais relacionados com música que capturam a essência do som através de imagens.",
        productTitle: "Design de Produto",
        productDesc: "Designs gráficos que combinam visuais marcantes com comunicação eficaz para marketing de produtos.",
        flyerTitle: "Design de Flyers",
        flyerDesc: "Materiais promocionais e de eventos projetados para captar atenção e comunicar informações-chave de forma eficaz.",
        aboutTitle: "Sobre Mim",
        aboutText: "Olá! Sou o Vitor, um designer UX/UI que combina metodologia design thinking com competências técnicas frontend para criar interfaces intuitivas e identidades de marca significativas. Com mais de 9 anos de experiência em design, acredito que cada projeto é uma oportunidade para compreender profundamente os utilizadores e criar soluções que realmente fazem a diferença nas suas vidas.",
        linkedin: "LinkedIn",
        downloadCV: "Baixar CV",
        uxuiSkills: "Competências UX/UI",
        technicalSkills: "Competências Técnicas",
        designProcess: "Processo de Design",
        certs: "Certificações Recentes",
        fcup: "Faculdade de Ciências da Universidade do Porto",
        contactTitle: "Vamos trabalhar juntos",
        copy: "Copiar Email",
        copied: "Copiado!",
        location: "Localização",
        locationValue: "Porto, Portugal",
        languages: "Idiomas",
        languagesValue: "Português (Nativo), Inglês (C1)",
        workPreference: "Preferência de Trabalho",
        workPreferenceValue: "Remoto, Híbrido, Presencial",
        viewLinkedin: "Conecta comigo profissionalmente",
        viewAbout: "Descobre mais sobre mim",
        viewCV: "Podes ver aqui o meu currículo", 
        footerText: "© 2025 Vitor Pinto. Todos os direitos reservados. Desenhado e desenvolvido com paixão no Porto, Portugal."
    }
};

let currentLanguage = 'en';
let isNavigating = false;

// Initialize application with performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializeAnimations();
    initializeLightbox();
    initializeNavigation();
    initializeSmoothScroll();
    initializeImageOptimization();
    initializePerformanceOptimizations();
});

// Language Management (otimizado)
function initializeLanguage() {
    // Use localStorage com fallback
    try {
        currentLanguage = localStorage.getItem('language') || 'en';
    } catch (e) {
        currentLanguage = 'en';
    }
    updateContent();
    updateLanguageButton();
}

function toggleLanguage() {
    if (isNavigating) return; // Previne múltiplos cliques
    
    isNavigating = true;
    currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    
    // Animação suave no toggle
    const toggle = document.querySelector('.language-toggle');
    if (toggle) {
        toggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            toggle.style.transform = '';
        }, 150);
    }
    
    updateContent();
    updateLanguageButton();
    
    // Save to localStorage with error handling
    try {
        localStorage.setItem('language', currentLanguage);
    } catch (e) {
        console.warn('Cannot save language preference');
    }
    
    // Handle portfolio item page redirects
    handlePortfolioRedirection();
    
    setTimeout(() => {
        isNavigating = false;
    }, 300);
}

function updateContent() {
    // Use DocumentFragment para melhor performance
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[currentLanguage]?.[key];
        if (translation) {
            element.textContent = translation;
        }
    });

    // Update CV link
    updateCVLink();
}

function updateCVLink() {
    const cvLinks = document.querySelectorAll('#cv-link');
    cvLinks.forEach(cvLink => {
        if (cvLink) {
            const cvFile = currentLanguage === 'pt' ? 'vitorcv2025.pdf' : 'vitorcv2025-en.pdf';
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

// Animations (otimizado para performance)
function initializeAnimations() {
    // Use Intersection Observer para animações mais eficientes
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
                observer.unobserve(target); // Remove observer após animação
            }
        });
    }, observerOptions);

    // Observe elements for animation com delay otimizado
    const animatedElements = document.querySelectorAll('.project-card, .brand-card, .music-card, .print-card');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${Math.min(index * 0.1, 1)}s, transform 0.6s ease ${Math.min(index * 0.1, 1)}s`;
        observer.observe(el);
    });
}

// Portfolio Navigation (otimizado)
function openPortfolioItem(itemNumber) {
    if (isNavigating) return;
    
    isNavigating = true;
    const langSuffix = currentLanguage === 'pt' ? '' : 'en';
    const url = `portfolio-item-${itemNumber}${langSuffix ? langSuffix : ''}.html`;
    
    // Preload da página antes de navegar
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
    
    setTimeout(() => {
        window.location.href = url;
    }, 100);
}

// Lightbox Functionality (melhorado)
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    // Event delegation para melhor performance
    lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });

    // Close on Escape key
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
    
    // Preload image
    const img = new Image();
    img.onload = () => {
        lightboxImg.src = imageSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Smooth fade in
        lightboxImg.style.opacity = '0';
        requestAnimationFrame(() => {
            lightboxImg.style.opacity = '1';
        });
    };
    img.src = imageSrc;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear image src para libertar memória
        const lightboxImg = document.getElementById('lightbox-image');
        if (lightboxImg) {
            setTimeout(() => {
                lightboxImg.src = '';
            }, 300);
        }
    }
}

// Navigation Enhancement (otimizado)
function initializeNavigation() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNav() {
        const scrollY = window.scrollY;
        
        // Reduz calls desnecessárias
        if (Math.abs(scrollY - lastScrollY) < 5 && ticking) return;
        
        if (scrollY > 100) {
            nav.style.background = 'rgba(0, 0, 0, 0.9)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.85)';
            nav.style.backdropFilter = 'blur(20px)';
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

    // Use passive listener para melhor performance
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Smooth Scroll (otimizado)
function initializeSmoothScroll() {
    // Event delegation para links internos
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// Email Copy Functionality (melhorado)
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
    
    button.textContent = copiedText;
    button.classList.add('copied');
    
    setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('copied');
    }, 2000);
}

// Image optimization (novo)
function initializeImageOptimization() {
    // Lazy loading nativo quando suportado
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.loading = 'lazy';
            }
        });
    } else {
        // Fallback para browsers mais antigos
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

// Performance optimizations (novo)
function initializePerformanceOptimizations() {
    // Preload critical resources
    preloadCriticalResources();
    
    // Initialize touch optimizations for mobile
    initializeTouchOptimizations();
    
    // Debounce resize events
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Handle resize events here
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

function initializeTouchOptimizations() {
    if (!('ontouchstart' in window)) return;

    // Add touch feedback for cards
    const cards = document.querySelectorAll('.project-card, .brand-card, .music-card, .print-card');
    cards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        }, { passive: true });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        }, { passive: true });
    });
}

function handleResize() {
    // Handle responsive changes if needed
    const nav = document.querySelector('.nav');
    if (nav && window.innerWidth <= 768) {
        nav.style.left = '16px';
        nav.style.right = '16px';
        nav.style.transform = 'none';
    } else if (nav) {
        nav.style.left = '50%';
        nav.style.right = 'auto';
        nav.style.transform = 'translateX(-50%)';
    }
}

// Utility functions
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

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    // Pode adicionar reporting aqui se necessário
});

// Performance monitoring (opcional)
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