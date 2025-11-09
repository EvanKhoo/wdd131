const form = document.getElementById('checkoutForm');
const cardInput = document.getElementById('cardNum');
const expMonthInput = document.getElementById('expMonth');
const expYearInput = document.getElementById('expYear');
const cvvInput = document.getElementById('cvvInput');
const errorsContainer = document.querySelector('.errors');

function isCardNumberValid(number) {
    return number === '1234123412341234';
}

function displayError(msg) {
    errorsContainer.innerHTML = msg.split('\n').filter(Boolean).map(line => `<div>${line}</div>`).join('');
}

function submitHandler(event) {
    event.preventDefault();
    displayError('');
    let errorMsg = '';

    const cardNum = cardInput.value.replace(/\D/g, '');
    if (!/^\d{16}$/.test(cardNum)) {
        errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNum)) {
        errorMsg += 'Card number is not valid\n';
    }

    const expMonth = Number(expMonthInput.value);
    const expYear = Number(expYearInput.value);
    const now = new Date();
    if (!expMonth || expMonth < 1 || expMonth > 12) {
        errorMsg += 'Expiration month must be 1-12\n';
    }
    if (!expYear || expYear < 0) {
        errorMsg += 'Expiration year is invalid\n';
    }

    if (expYear && expMonth) {
        if (2000 + expYear < now.getFullYear() ||
            (2000 + expYear === now.getFullYear() && expMonth <= now.getMonth() + 1)) {
            errorMsg += 'Card is expired\n';
        }
    }

    const cvv = cvvInput.value.trim();
    if (!/^\d{3}$/.test(cvv)) {
        errorMsg += 'CVV must be 3 digits\n';
    }

    if (errorMsg) {
        displayError(errorMsg);
        return;
    }

    form.innerHTML = '<h2>Thank you for your purchase.</h2>';
}

form.addEventListener('submit', submitHandler);
