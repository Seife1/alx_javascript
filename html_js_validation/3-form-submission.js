// Implement JavaScript to handle form submission and
// perform validation before submitting.

function handleFormSubmit(event) {
    event.preventDefault();

    let checker = true;

    const inputElements = document.querySelectorAll('input');

    for (let elem of inputElements) {
        const value = elem.value.trim();
        if (!isRequired(value)) {
            checker = false;
            showError('Please fill in all required fields.');
            break;
        }
    }

    if (checker) {
        showSuccess('Form submitted successfully!');
    }
    const small = document.getElementsByTagName('small')[0];
    setTimeout(function(){small.style.display = 'none'}, 3000);

    return checker;
}


// Show and then hide the message after a delay
const form = document.getElementById('submitForm');
form.addEventListener('submit', handleFormSubmit);

const isRequired = (value) => value === '' ? false : true;

const showError = (message) => {
    const success = document.getElementById('success');
    if (success) {
        success.remove();
    }
    const error = document.createElement('small');
    error.id = 'error';
    error.textContent = message;

    const prevmsg = document.querySelector('#error')
    if (prevmsg) {
        prevmsg.remove();
    }

    form.appendChild(error);
}

const showSuccess = (message) => {
    const error = document.getElementById('error');
    if (error) {
        error.remove();
    }
    const success = document.createElement('small');
    success.id = 'success';
    success.textContent = message;

    const prevmsg = document.querySelector('#success')
    if (prevmsg) {
        prevmsg.remove();
    }

    form.appendChild(success);
}