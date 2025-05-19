document.querySelectorAll('.nagyithatoimg').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxMeta = document.querySelector('.lightbox-meta');

    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';

    const meta = img.dataset.meta || 'Nincs elérhető adat';
    lightboxMeta.innerText = meta;
  });
});

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);

function closeLightbox() {
  document.querySelector('.lightbox').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mainNav = document.querySelector('.main-nav');
    
    hamburgerBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        
        this.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '🌙 Dark Mode';
    
    const menuSection = document.querySelector('.nav-group');
    if (menuSection) {
        menuSection.appendChild(darkModeToggle);
    }
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '☀️ Light Mode';
    }
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.innerHTML = '☀️ Light Mode';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.innerHTML = '🌙 Dark Mode';
        }
    });
});