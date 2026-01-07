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
const scriptURL = 'https://script.google.com/macros/s/AKfycbxZHoDpQ-JJnpplwbDh5N8gJwJ60dp6ZRbXsvM8i0n4UQF0r7qPzdeYoLBStef8sRIR/exec'
const form = document.getElementById('rsvpForm')
const btn = document.getElementById('submitBtn')

form.addEventListener('submit', e => {
    e.preventDefault()
    
    // Mengubah teks tombol saat loading
    btn.disabled = true
    btn.innerHTML = "Mengirim..."

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            btn.disabled = false
            btn.innerHTML = "Kirim Pesan"
            alert('Terima kasih! Konfirmasi kehadiran Anda telah tersimpan.')
            form.reset()
        })
        .catch(error => {
            btn.disabled = false
            btn.innerHTML = "Kirim Pesan"
            alert('Maaf, terjadi kesalahan saat mengirim data.')
            console.error('Error!', error.message)
        })
})

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