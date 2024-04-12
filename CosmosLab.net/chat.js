document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform simple validation (e.g., check if username and password are not empty)
    if (username.trim() === "" || password.trim() === "") {
        document.getElementById("login-message").innerText = "Username and password are required.";
    } else {
        // Here you can add your login logic
        // For demonstration purposes, let's assume the login is successful
        // Redirect user to the homepage
        window.location.href = "untitled8.html";
    }
});


    
  