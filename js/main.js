/**
 * MAIN JAVASCRIPT
 * Handles navigation, scrolling, intersection observer, and contact form.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    function toggleMobileMenu() {
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
        mobileNav.setAttribute('aria-hidden', isExpanded);
        
        if (!isExpanded) {
            document.body.style.overflow = 'hidden'; // Lock scroll
        } else {
            document.body.style.overflow = ''; // Unlock scroll
        }
    }
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu on any navigation link click inside mobile nav
    const allMobileNavLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];
    allMobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuBtn && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
                toggleMobileMenu();
            }
        });
    });
    
    // Close menu on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
            toggleMobileMenu();
        }
    });

    // 2. Sticky Header
    const header = document.getElementById('header');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init

    // 3. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Add staggered animation for grids
                const gridChildren = entry.target.querySelectorAll('.music-card, .video-card, .gallery-item');
                if (gridChildren.length > 0) {
                    entry.target.classList.add('stagger-children');
                    gridChildren.forEach((child, index) => {
                        child.style.transitionDelay = `${index * 0.1}s`;
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Active Navigation Highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const navObserverOptions = {
        threshold: 0.3,
        rootMargin: "-20% 0px -80% 0px" // Triggers when section is in top part of viewport
    };
    
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Update desktop nav
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
                
                // Update mobile nav
                mobileLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);
    
    sections.forEach(section => {
        navObserver.observe(section);
    });

    // 5. Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 6. Contact Form Validation and Fake Submit
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const gotcha = contactForm.querySelector('input[name="_gotcha"]');
            
            // Honeypot check
            if (gotcha && gotcha.value !== "") {
                return; // Bot detected, silent fail
            }
            
            // Clear previous errors
            contactForm.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            
            if (!name.value.trim()) {
                name.nextElementSibling.textContent = "Name is required";
                isValid = false;
            }
            
            if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                email.nextElementSibling.textContent = "Valid email is required";
                isValid = false;
            }
            
            if (!message.value.trim()) {
                message.nextElementSibling.textContent = "Message is required";
                isValid = false;
            }
            
            if (isValid) {
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'SENDING...';
                submitBtn.disabled = true;

                // Client-side confirmation
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    contactForm.reset();
                    formStatus.textContent = "Thank you! Your message has been sent successfully. Muthuja's team will get back to you soon.";
                    formStatus.className = "form-status success";
                    setTimeout(() => { formStatus.textContent = ""; }, 6000);
                }, 600);
            }
        });
    }

    // 7. Live Events, Timeline, and Collective are preserved statically in index.html
});
