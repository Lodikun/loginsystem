const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

// Add an event listener to the login form
const loginForm = document.querySelector(".sign-in-form");
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const usernameInput = loginForm.querySelector('input[type="text"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');

    // Check if the username and password are "admin"
    if (usernameInput.value.trim() === "admin" && passwordInput.value.trim() === "admin") {
        // Redirect to another website (replace 'https://example.com' with the desired URL)
        window.location.href = 'https://facebook.com';
    } 
        if (usernameInput.value.trim() === "student1" && passwordInput.value.trim() === "1234") {
        // Redirect to another website (replace 'https://example.com' with the desired URL)
        window.location.href = 'https://youtube.com';
    } else {
        // Handle incorrect login credentials here (e.g., show an error message)
        alert('Incorrect username or password. Please try again.');
    }
});
