// JavaScript client side form validation -> Check email format.

const emailEl = document.getElementById('email');
const para = document.getElementById('error');


function validateEmail() {
    let valid = false;
    const email = emailEl.value.trim();

    if (!isRequired(email)) {
        showError ('Please, It can\'t be blank');
    } else if (!validEmail(email)) {
        showError ('Please enter a valid email address.');
    } else {
        valid = true;
        para.textContent = '';
    }

    return valid;
}

const validEmail = (email) => {
    const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test(email);
}

const isRequired = value => value === '' ? false : true;

const showError = (message) => {
    para.textContent = message;
}

const form = document.getElementById('emailForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateEmail();
});