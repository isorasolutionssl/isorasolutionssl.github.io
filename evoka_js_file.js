// Evoka Powered by Isora Neurociencia - JavaScript

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollAnimations();
    initializeHoverEffects();
    initializeLoadingAnimations();
});

/**
 * Navigation functionality
 */
function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navigation scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav');
        const scrolled = window.scrollY > 50;
        
        if (scrolled) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

/**
 * Scroll animations using Intersection Observer
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in-up, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Enhanced hover effects for interactive elements
 */
function initializeHoverEffects() {
    // Card hover effects
    document.querySelectorAll('.card, .diff-item, .audience-card, .alliance-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('card') ? 
                'translateY(-15px)' : 
                'translateY(-8px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Navigation link effects
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Button effects
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

/**
 * Loading animations for header elements
 */
function initializeLoadingAnimations() {
    window.addEventListener('load', () => {
        const headerElements = document.querySelectorAll('.logo, .tagline, .hero-description');
        headerElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 200 + (index * 200));
        });
    });
}

/**
 * Utility functions for enhanced interactions
 */

// Debounce function for performance optimization
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

/**
 * Advanced features (optional enhancements)
 */

// Parallax effect for background elements (if needed)
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length > 0) {
        const handleParallax = throttle(() => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.parallax || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        }, 16);
        
        window.addEventListener('scroll', handleParallax);
    }
}

// Intersection Observer for counting animations (if numbers are added)
function initializeCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.count);
                    const increment = target / 100;
                    let current = 0;
                    
                    const counter = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            entry.target.textContent = target;
                            clearInterval(counter);
                        } else {
                            entry.target.textContent = Math.floor(current);
                        }
                    }, 20);
                    
                    counterObserver.unobserve(entry.target);
                }
            });
        });

        counters.forEach(counter => counterObserver.observe(counter));
    }
}

// Dynamic background color changes on scroll
function initializeDynamicBackgrounds() {
    const sections = document.querySelectorAll('.section');
    const sectionColors = [
        'linear-gradient(135deg, #f0f8ff 0%, #e1f5fe 100%)',
        'linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)',
        'linear-gradient(135deg, #f0f8ff 0%, #e3f2fd 100%)',
        'linear-gradient(135deg, #ffffff 0%, #f8fffe 100%)'
    ];

    const handleBackgroundChange = throttle(() => {
        const scrollPosition = window.pageYOffset;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop - window.innerHeight / 2 && 
                scrollPosition < sectionTop + sectionHeight - window.innerHeight / 2) {
                document.body.style.background = sectionColors[index % sectionColors.length];
            }
        });
    }, 50);

    window.addEventListener('scroll', handleBackgroundChange);
}

// Mobile touch interactions
function initializeMobileInteractions() {
    if ('ontouchstart' in window) {
        document.querySelectorAll('.card, .diff-item, .audience-card, .alliance-item').forEach(item => {
            item.addEventListener('touchstart', function() {
                this.style.transform = this.classList.contains('card') ? 
                    'translateY(-10px) scale(1.02)' : 
                    'translateY(-5px) scale(1.01)';
            });
            
            item.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }
}

// Form validation (if contact forms are added)
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = form.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Handle form submission
                console.log