const svg = document.querySelector('.svg-animation');
const screen = svg.querySelector('.screen');
const stickers = svg.querySelectorAll('.sticker');

function updateColors() {
    const hue = Math.random() * 360;
    screen.style.fill = `hsl(${hue}, 70%, 60%)`;
    stickers.forEach((sticker, index) => {
        sticker.style.fill = `hsl(${(hue + index * 30) % 360}, 70%, 50%)`;
    });
}

svg.addEventListener('click', updateColors);
window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const hue = mouseX * 360;
    screen.style.fill = `hsl(${hue}, 70%, 60%)`;
    stickers.forEach((sticker, index) => {
        sticker.style.fill = `hsl(${(hue + index * 30) % 360}, 70%, 50%)`;
    });
});