// Modern Animated Physics JavaScript

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Animated counter for stats
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const duration = 2000;
        const stepTime = duration / 100;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, stepTime);
    };

    // Intersection Observer for stats animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(stat => {
        statsObserver.observe(stat);
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Add parallax effect to hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');

        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / 600);
        }
    });

    // Feature cards hover effect enhancement
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add scroll reveal animation
    const revealElements = document.querySelectorAll('.feature-card, .stat-item, .about-text, .about-visual');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        revealObserver.observe(element);
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        }
    });

    // Add particle animation on mouse move
    const particles = document.querySelectorAll('.particle');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        particles.forEach((particle, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;

            particle.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    console.log('🚀 Animated Physics - Modern UI Loaded!');
});
