const navbar = document.querySelector('.navbar');
const gallerySection = document.getElementById('header');

window.addEventListener('scroll', () => {
    const galleryTop = gallerySection.getBoundingClientRect().top;
    if (galleryTop <= 0) {
        navbar.classList.add('fixed');
        document.body.style.paddingTop = `${navbar.offsetHeight}px`;
    } else {
        navbar.classList.remove('fixed');
        document.body.style.paddingTop = '0';
    }
});