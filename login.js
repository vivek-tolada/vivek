// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation for empty fields
    if (username==="" || password==="") { 
        errorMessage.textContent = "Please fill in both fields!";
        errorMessage.style.display = "block";
        
    } else {
        // Hide error message if both fields are filled
        errorMessage.style.display = "none";
        // You can perform additional validation here (e.g., check credentials)
        // alert("Login successful!");
       
        // Redirect to the main page after login (optional)
        window.location.href = "index.html"; // Redirects to the homepage
    }
});
