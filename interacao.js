document.addEventListener("DOMContentLoaded", function() {
    // Animação de Fade-In para o header
    const header = document.querySelector('header');
    header.style.opacity = 0;
    window.setTimeout(() => {
        header.style.opacity = 1;
    }, 500);

    // Validação do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
        contactForm.reset();
    });

    // Galeria de Fotos Interativa
    const galleryImages = document.querySelectorAll('.gallery-container img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            img.classList.toggle('active');
        });
    });
});
