document.addEventListener('DOMContentLoaded', () => {
    // Generate dynamic blog cards if container exists
    const blogGridContainer = document.getElementById('blogGridContainer');
    if (blogGridContainer && typeof articleData !== 'undefined') {
        let delay = 0;
        for (const [id, article] of Object.entries(articleData)) {
            const delayClass = delay > 0 ? `delay-${delay}` : '';
            const cardHtml = `
                <article class="blog-card reveal ${delayClass}">
                    <div class="blog-image" style="background-image: url('${article.imageUrl}');" aria-label="Imagen de ${article.title}">
                    </div>
                    <div class="blog-content">
                        <h3>${article.title}</h3>
                        <p>${article.summary}</p>
                        <a href="articulo.html?id=${id}" class="read-more">Leer artículo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </article>
            `;
            blogGridContainer.innerHTML += cardHtml;
            delay += 100;
        }
    }

    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    const handleScroll = () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    if (navLinks && hamburger && navMenu) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // Active Navigation Link on Scroll using IntersectionObserver
    const sections = document.querySelectorAll('section[id], footer[id]');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Scroll Reveal Animation using IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: unobserve after revealing if you only want it to animate once
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Testimonials Carousel Logic
    const evidenceData = {
        0: [
            'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=800&auto=format&fit=crop'
        ],
        1: [
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop'
        ],
        2: [
            'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1582407947304-fd86f1f09516?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556156653-e5a7c69cc263?q=80&w=800&auto=format&fit=crop'
        ]
    };

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const carouselContainer = document.getElementById('testimonialCarousel');
    const btnPrev = document.getElementById('carouselPrev');
    const btnNext = document.getElementById('carouselNext');
    let currentTestimonialId = 0;
    let currentSlideIndex = 0;

    function renderCarousel(testimonialId) {
        if (!carouselContainer) return;
        currentSlideIndex = 0;
        const images = evidenceData[testimonialId] || evidenceData[0];
        
        // Fade out slightly during swap
        carouselContainer.style.opacity = '0.5';
        
        setTimeout(() => {
            carouselContainer.innerHTML = '';
            images.forEach(imgSrc => {
                const slide = document.createElement('div');
                slide.className = 'carousel-slide';
                slide.style.backgroundImage = `url('${imgSrc}')`;
                carouselContainer.appendChild(slide);
            });
            updateCarouselPosition();
            carouselContainer.style.opacity = '1';
        }, 200);
        
        // Hide buttons if only 1 image
        if(btnPrev && btnNext) {
            btnPrev.style.display = images.length > 1 ? 'block' : 'none';
            btnNext.style.display = images.length > 1 ? 'block' : 'none';
        }
    }

    function updateCarouselPosition() {
        if (carouselContainer) {
            carouselContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        }
    }

    if (testimonialCards.length > 0 && carouselContainer) {
        // Initialize
        renderCarousel(0);

        testimonialCards.forEach(card => {
            card.addEventListener('click', function() {
                // Remove active from all
                testimonialCards.forEach(c => c.classList.remove('active'));
                // Add active to clicked
                this.classList.add('active');
                
                // Update carousel
                const id = this.getAttribute('data-id');
                if (id != currentTestimonialId) {
                    currentTestimonialId = id;
                    renderCarousel(id);
                }
            });
        });

        if(btnPrev) {
            btnPrev.addEventListener('click', () => {
                const images = evidenceData[currentTestimonialId];
                currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : images.length - 1;
                updateCarouselPosition();
            });
        }

        if(btnNext) {
            btnNext.addEventListener('click', () => {
                const images = evidenceData[currentTestimonialId];
                currentSlideIndex = (currentSlideIndex < images.length - 1) ? currentSlideIndex + 1 : 0;
                updateCarouselPosition();
            });
        }
    }
});
