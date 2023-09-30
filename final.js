let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link'),
    loginForm = document.querySelector('.form-container.sign-in form');

// Function to check if all input fields are filled
function areFieldsFilled() {
    const inputFields = loginForm.querySelectorAll('input');
    for (const inputField of inputFields) {
        if (inputField.value === '') {
            return false;
        }
    }
    return true;
}

// Function to show the alert message
function showAlertMessage() {
    if (areFieldsFilled()) {
        alert('Data submitted successfully!');
    } else {
        alert('Please fill in all the fields.');
    }
}

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});

// Add an event listener to the login form's submit button
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Show the alert message
    showAlertMessage();
});


