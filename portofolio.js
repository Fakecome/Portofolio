document.addEventListener('DOMContentLoaded', () => {

    const scrollBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    // Animate on Scroll Logic
    const animatedElements = document.querySelectorAll('.scroll-fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1 // Animate when 10% of the element is visible
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // --- Modal Popup Logic ---
    const modal = document.getElementById('popup-modal');
    const downloadCvBtn = document.querySelector('.btn-download');
    const closeBtn = document.querySelector('.close-btn');

    const openModal = (e) => {
        e.preventDefault();
        modal.classList.add('show');
    };

    const closeModal = () => {
        modal.classList.remove('show');
    };

    if (downloadCvBtn) downloadCvBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const typingTextElement = document.getElementById('typing-text');
    const textToType = "Handoyo";
    let index = 0;

    // Add a cursor element
    const cursor = document.createElement('span');
    cursor.classList.add('typing-cursor');
    typingTextElement.parentNode.insertBefore(cursor, typingTextElement.nextSibling);

    function type() {
        if (index < textToType.length) {
            typingTextElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 500); // Typing speed
        } else {
            cursor.style.display = 'none';
        }
    }

    type();
}); 
