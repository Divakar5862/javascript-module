let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link'),
    loginForm = document.querySelector('.form-container.sign-in form'),
    signupForm = document.querySelector('.form-container.sign-up form');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
})

ick event listener for the login button
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    if (username && password) {
        alert('Login data submitted.'); // Display alert message
        // You can also add an AJAX request here to submit the data to the server
    } else {
        alert('Please fill in all fields.'); // Display an error alert if fields are not filled
    }
});

// Add click event listener for the signup button
signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    const username = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    if (username && email && password) {
        alert('Signup data submitted.'); // Display alert message
        // You can also add an AJAX request here to submit the data to the server
    } else {
        alert('Please fill in all fields.'); // Display an error alert if fields are not filled
    }
});
