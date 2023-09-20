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
        // Redirect to Facebook
        window.location.href = 'https://lodikun.github.io/adminpage/';
    } 
    // Check if the username is "student1" and password is "1234"
    else if (usernameInput.value.trim() === "student1" && passwordInput.value.trim() === "1234") {
        // Redirect to YouTube
        window.location.href = 'https://lodikun.github.io/studentpage/';
    } else {
        // Handle incorrect login credentials here (e.g., show an error message)
        if (usernameInput.value.trim() !== "admin" ) {
            alert('Incorrect username or password. Please try again.');
        }
    }
});
