// Language translations
const translations = {
    en: {
        work: "Work",
        about: "About",
        contact: "Contact",
        aboutText: "Hi! I'm Vitor, passionate about creating intuitive and aesthetically pleasing digital experiences. At 32, I have a solid foundation in UX/UI Design (Research and Figma) and Digital Marketing, backed by relevant industry certifications. I'm a multifaceted professional with knowledge in HTML, CSS, some JavaScript, Photoshop, Illustrator, InDesign, and Affinity software, which allows me to bring my designs to life and ensure a fluid user experience. Additionally, my familiarity with the Azure platform and SQL opens doors for creating scalable and robust solutions.",
        linkedin: "LinkedIn",
        downloadCV: "Download CV",
        contactTitle: "Contact",
        copy: "Copy",
        copied: "Copied!",
        uxuiTitle: "UX/UI Design",
        uxuiDesc: "Digital experiences designed with user-centered approach.",
        logoTitle: "Logo Design",
        logoDesc: "A collection of logo designs showcasing brand identity work for various clients.",
        musicTitle: "Music Artworks",
        musicDesc: "Album covers and music-related visual designs.",
        flyerTitle: "Flyer Design",
        flyerDesc: "A collection of flyer designs.",
        productTitle: "Product Design",
        productDesc: "Labels & ad's."
    },
    pt: {
        work: "Trabalhos",
        about: "Sobre",
        contact: "Contacto",
        aboutText: "Olá! Sou o Vitor, apaixonado por criar experiências digitais intuitivas e esteticamente agradáveis. Aos 32 anos, tenho uma base sólida em UX/UI Design (Research e Figma) e Marketing Digital, respaldada por certificações relevantes da indústria. Sou um profissional multifacetado com conhecimentos em HTML, CSS, algum JavaScript, Photoshop, Illustrator, InDesign e software Affinity, o que me permite dar vida aos meus designs e garantir uma experiência fluida ao utilizador. Além disso, a minha familiaridade com a plataforma Azure e SQL abre portas para a criação de soluções escaláveis e robustas.",
        linkedin: "LinkedIn",
        downloadCV: "Baixar CV",
        contactTitle: "Contacto",
        copy: "Copiar",
        copied: "Copiado!",
        uxuiTitle: "Design UX/UI",
        uxuiDesc: "Experiências digitais projetadas com abordagem centrada no utilizador.",
        logoTitle: "Design de Logotipos",
        logoDesc: "Uma coleção de designs de logotipos para vários clientes.",
        musicTitle: "Artwork Musical",
        musicDesc: "Capas de álbuns e designs visuais para bandas.",
        flyerTitle: "Design de Flyers",
        flyerDesc: "Uma coleção de flyers.",
        productTitle: "Produto",
        productDesc: "Labels e visuais"
    }
};

let currentLanguage = 'en';

// Create cursor elements
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

const cursorInversion = document.createElement('div');
cursorInversion.classList.add('cursor-inversion');
document.body.appendChild(cursorInversion);

// Update cursor position
document.addEventListener('mousemove', (e) => {
    // Position the black ball cursor
    cursor.style.left = e.clientX - 10 + 'px';  // 10 is half the cursor width
    cursor.style.top = e.clientY - 10 + 'px';   // 10 is half the cursor height

    // Position the inversion area
    cursorInversion.style.left = e.clientX - 20 + 'px';  // 20 is half the inversion area width
    cursorInversion.style.top = e.clientY - 20 + 'px';   // 20 is half the inversion area height
});

// Optional: Add scale effect when clicking
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});

// Function to handle UX/UI portfolio item clicks
function openPortfolioItem(itemNumber) {
    const currentLang = currentLanguage; // 'en' or 'pt'
    const langSuffix = currentLang === 'en' ? 'en' : '';
    window.location.href = `portfolio-item-${itemNumber}${langSuffix}.html`;
}

// Toggle between languages
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    updateContent();
    localStorage.setItem('language', currentLanguage);
    
    // If on a portfolio item page, redirect to the corresponding language version
    const currentPage = window.location.pathname;
    if (currentPage.includes('portfolio-item-')) {
        const itemNumber = currentPage.match(/portfolio-item-(\d+)/)[1];
        const langSuffix = currentLanguage === 'en' ? 'en' : '';
        window.location.href = `portfolio-item-${itemNumber}${langSuffix}.html`;
    }
}

// Update content based on selected language
function updateContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Gallery navigation function
function navigate(galleryId, direction) {
    const gallery = document.getElementById(`${galleryId}-gallery`);
    const container = gallery.closest('.project-gallery');
    const prevButton = container.querySelector('.gallery-nav.prev');
    const nextButton = container.querySelector('.gallery-nav.next');
    
    // Get total width of all items including gaps
    const itemWidth = 200; // Width of each item
    const gap = 32; // 2rem gap converted to pixels
    const itemTotalWidth = itemWidth + gap;
    const items = gallery.children.length;
    const maxScroll = (items * itemTotalWidth) - container.clientWidth;
    
    // Get current scroll position
    const currentScroll = gallery.style.transform ? 
        parseInt(gallery.style.transform.replace(/[^\d-]/g, '')) : 0;
    
    // Calculate new scroll position
    let newScroll = currentScroll + (direction * itemTotalWidth * -1);
    
    // Limit scroll boundaries
    newScroll = Math.max(-maxScroll, Math.min(0, newScroll));
    
    // Apply new scroll position
    gallery.style.transform = `translateX(${newScroll}px)`;
    
    // Update button visibility
    updateNavigationButtons(prevButton, nextButton, newScroll, maxScroll);
}

// Update navigation buttons visibility
function updateNavigationButtons(prevButton, nextButton, currentScroll, maxScroll) {
    // Show/hide previous button based on scroll position
    prevButton.style.display = currentScroll === 0 ? 'none' : 'block';
    
    // Show/hide next button based on scroll position
    nextButton.style.display = currentScroll <= -maxScroll ? 'none' : 'block';
}

// Copy email function
function copyEmail() {
    navigator.clipboard.writeText('vitorlanzanapinto@gmail.com');
    const button = document.querySelector('.copy-button');
    button.textContent = translations[currentLanguage].copied;
    setTimeout(() => {
        button.textContent = translations[currentLanguage].copy;
    }, 2000);
}

// Lightbox functions
function openLightbox(imageSrc) {
     // Check if the image path contains 'logos' - if it does, don't open the lightbox
     //If you want to change this in the future, just delete 'logos' from below and the logos will open again
     if (imageSrc.includes('logos')) {
        return; // Exit the function without opening the lightbox
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize language from localStorage and setup event listeners
document.addEventListener('DOMContentLoaded', () => {
    currentLanguage = localStorage.getItem('language') || 'en';
    updateContent();

    // Initialize navigation buttons for each gallery
    const galleries = document.querySelectorAll('.project-gallery');
    galleries.forEach(container => {
        const gallery = container.querySelector('.gallery-container');
        const prevButton = container.querySelector('.gallery-nav.prev');
        const nextButton = container.querySelector('.gallery-nav.next');
        
        // Calculate initial maxScroll
        const itemWidth = 200;
        const gap = 32;
        const itemTotalWidth = itemWidth + gap;
        const items = gallery.children.length;
        const maxScroll = (items * itemTotalWidth) - container.clientWidth;
        
        // Initially hide prev button as we start at the beginning
        prevButton.style.display = 'none';
        
        // Hide next button if all items fit in container
        if (container.clientWidth >= items * itemTotalWidth) {
            nextButton.style.display = 'none';
        }
    });

    // Add lightbox click listener if it exists
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });
    }

    function navigate(galleryId, direction) {
        // Don't run navigation on mobile
        if (window.innerWidth <= 768) return;
        
        // Rest of your existing navigation code...
    }
});