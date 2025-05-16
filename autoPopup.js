const autoPopup = document.querySelector('.auto-popup');
const popupClosedValue = document.getElementById('popupClosedValue');

function updatePopupClosedValue() {
    const popupClosed = localStorage.getItem('popupClosed');
    popupClosedValue.textContent = popupClosed ? `${popupClosed}` : 'null';
}

if (!localStorage.getItem('popupClosed')) {
    setTimeout(() => {
        autoPopup.classList.add('active');
    }, 30000);
}

function closeAutoPopup() {
    autoPopup.classList.remove('active');
    localStorage.setItem('popupClosed', 'true');
    updatePopupClosedValue();
}

function resetPopupClosed() {
    localStorage.removeItem('popupClosed');
    updatePopupClosedValue();
    alert('Состояние попапа сброшено. Перезагрузите страницу, чтобы он появился через 30 секунд.');
}

updatePopupClosedValue();
