// JavaScript client side form validation -> Password Strength

const passwordEl = document.getElementById('password');
const para = document.getElementById('error');


function validatePassword() {
    let valid = false;
    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError ('Please, It can\'t be blank');
    } else if (!secure_pwd(password)) {
        showError ('Password must has at least 8 characters\n that include: at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        valid = true;
        para.textContent = '';
    }

    return valid;
}

const secure_pwd = (password) => {
    const secure = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return secure.test(password);
}

const isRequired = value => value === '' ? false : true;

const showError = (message) => {
    para.textContent = message;
}

const form = document.getElementById('passwordForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    validatePassword();
});