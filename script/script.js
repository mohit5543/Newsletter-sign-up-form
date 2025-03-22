const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const newsletterSection = document.querySelector('.newsletter');
const successSection = document.querySelector('.success');
const emailSpan = document.querySelector('.email');
const dismissButton = document.querySelector('.success button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        // Show success message
        newsletterSection.classList.add('hidden');
        successSection.classList.remove('hidden');
        successSection.setAttribute('aria-hidden', 'false');
        emailSpan.textContent = email;
    } else {
        // Show error state
        emailInput.classList.add('error');
        // Add error message if not exists
        if (!document.querySelector('.error-message')) {
            const errorMessage = document.createElement('span');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = 'Valid email required';
            emailInput.parentNode.appendChild(errorMessage);
        }
    }
});

dismissButton.addEventListener('click', () => {
    newsletterSection.classList.remove('hidden');
    successSection.classList.add('hidden');
    successSection.setAttribute('aria-hidden', 'true');
    emailInput.value = '';
    emailInput.classList.remove('error');
    const errorMessage = document.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
});