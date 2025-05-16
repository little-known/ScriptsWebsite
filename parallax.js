const sections = document.querySelectorAll('.section:not(#home)');
const emojis = {
    gallery: ['📷', '🖼️', '🎨', '📸'],
    contact: ['📩', '📞', '✉️', '📬'],
    countdown: ['⏰', '⏳', '🕒', '📅'],
    popup: ['📢', '🔔', '💬', '🚨'],
    animation: ['🎞️', '✨', '🎥', '⚙️'],
    header: ['📍', '🧭', '🔗', '📜']
};

sections.forEach(section => {
    const sectionId = section.id;
    const emojiList = emojis[sectionId];
    const emojiCount = Math.floor(Math.random() * 7) + 9; // 9-15 эмодзи

    for (let i = 0; i < emojiCount; i++) {
        const emoji = document.createElement('span');
        emoji.className = 'emoji';
        emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
        
        // Случайные позиции
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Случайные параметры параллакса
        const size = Math.random() * 3.4 + 1; // 1-3rem
        const blur = Math.random() * 3; // 0-3px
        const speed = Math.random() * 20 + 10; // 10-30px смещение
        const rotation = Math.random() * 90 - 45; // -45° to 45°
        
        emoji.style.left = `${x}%`;
        emoji.style.top = `${y}%`;
        emoji.style.fontSize = `${size}rem`;
        emoji.style.filter = `blur(${blur}px)`;
        emoji.style.transform = `rotate(${rotation}deg)`;
        emoji.dataset.speed = speed;
        emoji.dataset.rotation = rotation;
        
        section.appendChild(emoji);
    }
});

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    document.querySelectorAll('.emoji').forEach(emoji => {
        const speed = parseFloat(emoji.dataset.speed);
        const rotation = parseFloat(emoji.dataset.rotation);
        const translateX = mouseX * speed;
        const translateY = mouseY * speed;
        emoji.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`;
    });
});