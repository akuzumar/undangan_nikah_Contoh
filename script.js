// Initialize AOS Animations
AOS.init({
    duration: 1200,
    easing: 'ease-out-cubic',
    once: false,
    mirror: true
});

// Navigation Highlight on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

// RSVP Form Handle
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Konfirmasi kehadiran Anda telah kami simpan.');
    this.reset();
});

// Smooth Scroll for Navigation
navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});