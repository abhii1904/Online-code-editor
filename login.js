const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');
const loginContainer = document.getElementById('loginContainer');

// Create error messages
const usernameError = document.createElement('div');
usernameError.classList.add('error-message');
usernameError.innerText = 'Please fill out this field';
const passwordError = document.createElement('div');
passwordError.classList.add('error-message');
passwordError.innerText = 'Please fill out this field';

const usernameField = loginForm.querySelector('input[type="text"]');
const passwordField = loginForm.querySelector('input[type="password"]');

// Allow button click to trigger fade out
loginBtn.addEventListener('click', () => {
    clearErrorMessages();
    if (isFormValid()) {
        loginContainer.style.opacity = '0';
        setTimeout(() => {
            login();
        }, 500);
    } else {
        if (!usernameField.value.trim()) {
            usernameField.parentElement.appendChild(usernameError);
        }
        if (!passwordField.value.trim()) {
            passwordField.parentElement.appendChild(passwordError);
        }
    }
});

function isFormValid() {
    return usernameField.value.trim() !== "" && passwordField.value.trim() !== "";
}

function clearErrorMessages() {
    const existingErrors = document.querySelectorAll('.error-message');
    existingErrors.forEach(error => error.remove());
}

function login() {
    window.location.href = "anuj.html"; // Redirect to index.html
}

// Google Sign-In function
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    login(); // Call login function after successful sign-in
}