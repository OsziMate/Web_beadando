document.querySelectorAll('.nagyithatoimg').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';

    const meta = img.dataset.meta || 'Nincs elérhető adat';
    document.getElementById('lightbox-meta').innerText = meta;
  });
});

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mainNav = document.querySelector('.main-nav');
    
    hamburgerBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        
        // Animáljuk a hamburger ikont "X"-ré
        this.classList.toggle('active');
    });
});