// JavaScript for login form validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Get form inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Error message element
    const errorMessage = document.getElementById("error-message");

    // Basic validation for empty fields
    if (!username || !password) {
        errorMessage.textContent = "Both username and password are required!";
        return;
    }

    // Simulate login logic (In real-world, you should verify credentials with a server)
    if (username === "user" && password === "password123") {
        errorMessage.textContent = "Login successful!";
        errorMessage.style.color = "green";
        // Redirect to the main page (or dashboard) after successful login
        setTimeout(() => {
            window.location.href = "index.html";  // Change to the actual page URL after login
        }, 2000);
    } else {
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.color = "red";
    }
});
