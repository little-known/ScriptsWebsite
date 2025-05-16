const galleryImages = document.querySelectorAll('.gallery img');
const galleryPopup = document.querySelector('.gallery-popup');
const popupImage = galleryPopup.querySelector('img');
const prevArrow = galleryPopup.querySelector('.prev');
const nextArrow = galleryPopup.querySelector('.next');
let currentImageIndex = 0;

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        openGalleryPopup();
    });
});

function openGalleryPopup() {
    popupImage.src = galleryImages[currentImageIndex].src;
    galleryPopup.classList.add('active');
    updateArrows();
}

function closeGalleryPopup() {
    galleryPopup.classList.remove('active');
}

function changeImage(direction) {
    currentImageIndex += direction;
    popupImage.src = galleryImages[currentImageIndex].src;
    updateArrows();
}

function updateArrows() {
    prevArrow.style.display = currentImageIndex === 0 ? 'none' : 'block';
    nextArrow.style.display = currentImageIndex === galleryImages.length - 1 ? 'none' : 'block';
}