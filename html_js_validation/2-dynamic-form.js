// Implement JavaScript to generate a dynamic number of text input fields based on the selected value in the dropdown menu.

const div = document.getElementById('inputContainer');

function generateInputFields(value) {

    for (let i = 1; i <= value; i++) {
        const label = document.createElement('label');
        label.for = "field" + i;
        const input = document.createElement('input');
        input.id = "field" + i;
        input.placeholder = "Field" + i;
        input.style.borderRadius = '0.25rem';
        input.style.borderColor = 'cyan';
        input.style.marginBottom = '1rem';

        div.appendChild(label);
        div.appendChild(input);
    }
}

const generate = document.getElementById('numFields');
generate.addEventListener('click', function(e) {
    div.innerHTML = '';
    e.preventDefault();
    const selectedValue = parseInt(generate.value);
    generateInputFields(selectedValue);

});

// An element to display the error message
const error = document.createElement('small');
const form = document.getElementById('dynamicForm');

form.appendChild(error);
error.style.color = 'red';

// Implement JavaScript validation to ensure that all dynamically
// generated fields are filled before submitting the form.


function validateForm() {

    let valid = true;
    const vals = parseInt(document.getElementById('numFields').value);

    for (let j = 1; j <= vals; j++) {
        if (document.getElementById('field' + j).value.trim() === '') {
            valid = false;
        }
    }
  
    if (!valid) {
        showError('Please fill all fields');
    } else {
        error.textContent = '';
    }
  
    return valid;
  
  }


const showError = (message) => {
    error.textContent = message;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm();
});
