document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.heritage-text, .benefit-card');
    revealElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(el);
    });

    // Modal Logic
    const exploreBtn = document.getElementById('explore-btn');
    const modal = document.getElementById('collection-modal');
    const closeBtn = document.querySelector('.close-modal');

    if (exploreBtn && modal && closeBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('show');
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }

    // Video Modal Logic
    const videoBtn = document.getElementById('video-btn');
    const videoModal = document.getElementById('video-modal');
    const closeVideoBtn = document.querySelector('.close-video-modal');
    const productVideo = document.getElementById('product-video');

    if (videoBtn && videoModal && closeVideoBtn && productVideo) {
        videoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            videoModal.classList.add('show');
            productVideo.play();
        });

        const closeVideo = () => {
            videoModal.classList.remove('show');
            productVideo.pause();
            productVideo.currentTime = 0;
        };

        closeVideoBtn.addEventListener('click', closeVideo);

        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideo();
            }
        });
    }

    // Contact Modal Logic
    const bookBtn = document.getElementById('book-btn');
    const contactNavLink = document.getElementById('contact-nav-link');
    const contactModal = document.getElementById('contact-modal');
    const closeContactBtn = document.querySelector('.close-contact-modal');

    if (contactModal && closeContactBtn) {
        const openContact = (e) => {
            e.preventDefault();
            contactModal.classList.add('show');
        };

        if (bookBtn) bookBtn.addEventListener('click', openContact);
        if (contactNavLink) contactNavLink.addEventListener('click', openContact);

        const closeContact = () => {
            contactModal.classList.remove('show');
        };

        closeContactBtn.addEventListener('click', closeContact);

        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                closeContact();
            }
        });
    }

    // Benefits Modal Logic
    const benefitsBtn = document.getElementById('benefits-popup-btn');
    const benefitsModal = document.getElementById('benefits-modal');
    const closeBenefitsBtn = document.querySelector('.close-benefits-modal');

    if (benefitsBtn && benefitsModal && closeBenefitsBtn) {
        benefitsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            benefitsModal.classList.add('show');
        });

        const closeBenefits = () => {
            benefitsModal.classList.remove('show');
        };

        closeBenefitsBtn.addEventListener('click', closeBenefits);

        window.addEventListener('click', (e) => {
            if (e.target === benefitsModal) {
                closeBenefits();
            }
        });
    }
});
