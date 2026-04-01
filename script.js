// 1. Core State & Constants
const countdownDate = new Date('June 26, 2026 00:00:00').getTime();
let carouselInterval;
let currentSlide = 0;

// 2. Intersection Observer for Reveal Effects
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 3. Update Functionality (Re-run on every page load)
const initAllFeatures = () => {
    console.log("Initializing all features...");

    // A. Re-attach Reveal Effects
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    // B. Re-attach Modal Logic
    const modal = document.getElementById('reg-modal');
    if (modal) {
        document.querySelectorAll('.open-modal').forEach(btn => {
            btn.onclick = () => modal.classList.add('active');
        });
        const closeBtn = document.querySelector('.close-modal');
        if (closeBtn) closeBtn.onclick = () => modal.classList.remove('active');
        window.onclick = (e) => { if (e.target == modal) modal.classList.remove('active'); };

        const regForm = document.getElementById('reg-form');
        if (regForm) {
            regForm.onsubmit = (e) => {
                e.preventDefault();
                modal.classList.remove('active');
                const toast = document.getElementById('toast');
                if (toast) {
                    toast.className = 'show';
                    setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3000);
                }
                regForm.reset();
            };
        }
    }

    // C. Re-attach Carousel Logic (index.html)
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    if (slides.length > 0) {
        clearInterval(carouselInterval);
        currentSlide = 0;
        const showSlide = (index) => {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        };
        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        };
        carouselInterval = setInterval(nextSlide, 5000);
        dots.forEach(dot => {
            dot.onclick = () => {
                clearInterval(carouselInterval);
                currentSlide = parseInt(dot.getAttribute('data-index'));
                showSlide(currentSlide);
                carouselInterval = setInterval(nextSlide, 5000);
            };
        });
    }

    // D. Re-attach Countdown (index.html)
    const daysEl = document.getElementById('days');
    if (daysEl) {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            if (distance < 0) return;
            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);
            daysEl.innerText = d.toString().padStart(2, '0');
            document.getElementById('hours').innerText = h.toString().padStart(2, '0');
            document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
            document.getElementById('seconds').innerText = s.toString().padStart(2, '0');
        };
        setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    // E. Handle Active Nav Link & SPA Links
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath) link.classList.add('active');
        
        // Intercept internal links for SPA
        link.onclick = (e) => {
            const url = link.getAttribute('href');
            if (url && !url.startsWith('http') && !url.startsWith('#')) {
                e.preventDefault();
                handleNavigation(url);
            }
        };
    });

    // F. Logo and Other Internal Links
    document.querySelectorAll('.logo, footer a').forEach(link => {
        const url = link.getAttribute('href');
        if (url && !url.startsWith('http') && !url.startsWith('#')) {
            link.onclick = (e) => {
                e.preventDefault();
                handleNavigation(url);
            };
        }
    });

    // G. Mobile Toggle Logic
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle) {
        navToggle.onclick = () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        };
    }

    // H. Reset Scroll Position
    window.scrollTo({ top: 0, behavior: 'instant' });
};

// 4. SPA Navigation Logic
const handleNavigation = async (url) => {
    // Start page transition
    document.body.style.opacity = '0.5';
    document.body.style.transition = 'opacity 0.2s ease';

    try {
        const response = await fetch(url);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Swap Content
        document.title = doc.title;
        document.body.innerHTML = doc.body.innerHTML;
        
        // Update URL
        window.history.pushState({}, '', url);

        // Re-initialize all scripts
        initAllFeatures();
        
        // Reset Cursor (it was inside body)
        initCursor();
        
        document.body.style.opacity = '1';
    } catch (err) {
        console.error("Navigation Error:", err);
        window.location.href = url; // Fallback
    }
};

// 5. Custom Cursor Initialization
const initCursor = () => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    document.onmousemove = (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    };
    document.querySelectorAll('a, button, .saas-card').forEach(el => {
        el.onmouseenter = () => cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        el.onmouseleave = () => cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
};

// 6. Handle Browser Back/Forward
window.onpopstate = () => {
    handleNavigation(window.location.pathname.split("/").pop() || "index.html");
};

// 7. Initial Load
document.addEventListener('DOMContentLoaded', () => {
    initAllFeatures();
    initCursor();
});
