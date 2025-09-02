document.getElementById("signupForm").addEventListener("submit", function (event) {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const usernamePattern = /^[a-zA-Z0-9]{6,15}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordPattern = /^.{8,15}$/;

    // Get error message elements
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous error messages
    usernameError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";

    let isValid = true;

    // Validate username
    if (!usernamePattern.test(username)) {
        usernameError.textContent = "Username must be between 6-15 characters and contain only letters and numbers.";
        usernameError.style.display = "block";
        isValid = false;
    }

    // Validate email
    if (!emailPattern.test(email)) {
        emailError.textContent = "Email must be a valid Gmail address (e.g., user@gmail.com).";
        emailError.style.display = "block";
        isValid = false;
    }

    // Validate password
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be between 8-15 characters.";
        passwordError.style.display = "block";
        isValid = false;
    }

    // Prevent form submission if any validation fails
    if (!isValid) {
        event.preventDefault();
    }
});