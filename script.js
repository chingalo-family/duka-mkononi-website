// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close mobile menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .benefit-item, .visual-card');
    animateElements.forEach(el => observer.observe(el));
    
    // Add loading state handling
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Handle external links
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
    
    // Stats animation (count up effect)
    function animateValue(element, start, end, duration) {
        const range = end - start;
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            current = start + (range * progress);
            
            if (progress < 1) {
                element.textContent = Math.round(current).toLocaleString();
                requestAnimationFrame(update);
            } else {
                element.textContent = Math.round(end).toLocaleString();
            }
        }
        
        requestAnimationFrame(update);
    }
    
    // Trigger stat animations when visible
    const statElements = document.querySelectorAll('.stat-value');
    if (statElements.length > 0) {
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const text = element.textContent.trim();
                    
                    // Extract number from text
                    const match = text.match(/[\d,]+/);
                    if (match) {
                        const value = parseInt(match[0].replace(/,/g, ''));
                        const prefix = text.split(match[0])[0];
                        const suffix = text.split(match[0])[1] || '';
                        
                        element.textContent = prefix + '0' + suffix;
                        animateValue(element, 0, value, 1500);
                    }
                    
                    statObserver.unobserve(element);
                }
            });
        }, { threshold: 0.5 });
        
        statElements.forEach(el => statObserver.observe(el));
    }
    
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = hero.querySelector('.hero-image');
            if (parallax && scrolled < window.innerHeight) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
});

// Handle page visibility change
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = 'Come back! - Duka Mkononi';
    } else {
        document.title = 'Duka Mkononi - Modern Mobile POS Solution';
    }
});

// Service Worker registration (for future PWA support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when service worker is ready
        // navigator.serviceWorker.register('/sw.js').then(function(registration) {
        //     console.log('ServiceWorker registration successful');
        // }, function(err) {
        //     console.log('ServiceWorker registration failed: ', err);
        // });
    });
}
