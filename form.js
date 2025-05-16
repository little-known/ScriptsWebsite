const formPopup = document.querySelector('.form-popup');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

function openFormPopup() {
    formPopup.classList.add('active');
}

function closeFormPopup() {
    formPopup.classList.remove('active');
    contactForm.reset();
}

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const apiUrl = document.getElementById('apiUrl').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Валидация
    const urlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageRegex = /^[а-яА-Яa-zA-Z\s.,!?]+$/;

    if (!urlRegex.test(apiUrl)) {
        alert('Введите корректный адрес API (например, https://api.example.com)');
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert('Введите корректный номер телефона (например, +79991234567)');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Введите корректный email (например, example@domain.com)');
        return;
    }

    if (!messageRegex.test(message)) {
        alert('Сообщение должно содержать только русские или английские буквы, пробелы и знаки пунктуации');
        return;
    }

    submitBtn.classList.add('sending');
    submitBtn.textContent = 'Отправляем...';
    submitBtn.disabled = true;
    submitBtn.style.cursor = 'wait';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, email, message }),
        });

        if (response.ok) {
            submitBtn.classList.remove('sending');
            submitBtn.classList.add('success');
            submitBtn.textContent = 'Успешно отправлено';
            submitBtn.style.cursor = 'default';
            setTimeout(closeFormPopup, 1000);
        } else {
            throw new Error('Ошибка отправки');
        }
    } catch (error) {
        alert('Ошибка отправки запроса');
        submitBtn.classList.remove('sending');
        submitBtn.textContent = 'Отправить';
        submitBtn.disabled = false;
        submitBtn.style.cursor = 'pointer';
    }
});