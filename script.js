// 1. Navigation & Scroll Effects
const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

// 2. Custom Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .feature-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%, -50%) scale(1.5)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');
});

// 3. Countdown Timer (Target: June 26, 2026)
const countdownDate = new Date('June 26, 2026 00:00:00').getTime();

const updateCountdown = () => {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    // Only run if these elements exist on the page
    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    const now = new Date().getTime();
    const distance = countdownDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = d.toString().padStart(2, '0');
    hoursEl.innerText = h.toString().padStart(2, '0');
    minsEl.innerText = m.toString().padStart(2, '0');
    secsEl.innerText = s.toString().padStart(2, '0');

    if (distance < 0) clearInterval(timer);
};
const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// 4. Registration Modal Logic
const modal = document.getElementById('reg-modal');
if (modal) {
    const openBtns = document.querySelectorAll('.open-modal');
    const closeBtn = document.querySelector('.close-modal');

    openBtns.forEach(btn => {
        btn.onclick = () => modal.classList.add('active');
    });

    if (closeBtn) {
        closeBtn.onclick = () => modal.classList.remove('active');
    }

    window.onclick = (e) => {
        if (e.target == modal) modal.classList.remove('active');
    };

    // 5. Form Submission Simulation & Toast
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

// 6. Intersection Observer for Reveal
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Match CSS '.active'
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
// 7. Hero Carousel Logic
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
let currentSlide = 0;
let carouselInterval;

const showSlide = (index) => {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
};

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
};

const startCarousel = () => {
    carouselInterval = setInterval(nextSlide, 5000); // 5 seconds
};

if (slides.length > 0) {
    startCarousel();
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(carouselInterval);
            currentSlide = parseInt(dot.getAttribute('data-index'));
            showSlide(currentSlide);
            startCarousel();
        });
    });
}
