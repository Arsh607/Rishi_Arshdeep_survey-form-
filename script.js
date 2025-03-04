function isNotEmpty(input) {
    return input.value.trim() !== '';
}

function isValidEmail(input) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(input.value.trim());
}

function hasCheckedOption(inputName) {
    const radios = document.getElementsByName(inputName);
    return Array.from(radios).some(radio => radio.checked);
}

function isSelected(select) {
    return select.value !== '';
}

function isValidUsername(input) {
    const usernamePattern = /^[a-zA-Z0-9]+$/;
    return usernamePattern.test(input.value.trim());
}

function isValidDate(input) {
    const datePattern = /^\d{2}-\d{2}-\d{4}$/;
    return datePattern.test(input.value.trim());
}

function isValidCustomId(input) {
    const customIdPattern = /^[A-Z]{3}-\d{4}$/;
    return customIdPattern.test(input.value.trim());
}

function showError(input, message) {
    const errorSpan = document.getElementById(input.id + 'Error');
    errorSpan.textContent = message;
    input.classList.add('error');
}

function clearError(input) {
    const errorSpan = document.getElementById(input.id + 'Error');
    errorSpan.textContent = '';
    input.classList.remove('error');
}



    if (!isNotEmpty(name)) {
        showError(name, 'Name is required.');
        isValid = false;
    }

    if (!isValidEmail(email)) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
    }

    if (!hasCheckedOption('gender')) {
        showError(genderRadios[0], 'Please select your gender.');
        isValid = false;
    }

    if (!isSelected(country)) {
        showError(country, 'Please select a country.');
        isValid = false;
    }

    if (!isValidUsername(username)) {
        showError(username, 'Username must be alphanumeric.');
        isValid = false;
    }

    if (!isValidDate(date)) {
        showError(date, 'Date must be in DD-MM-YYYY format.');
        isValid = false;
    }

    if (!isValidCustomId(customId)) {
        showError(customId, 'Custom ID must be in ABC-1234 format.');
        isValid = false;
    }

    if (comments.value.trim().length > 0 && comments.value.length > 500) {
        showError(comments, 'Comments cannot be more than 500 characters.');
        isValid = false;
    }

    if (isValid) {
        document.getElementById('surveyForm').submit();
    }
}

document.getElementById('surveyForm').addEventListener('submit', validateForm);
