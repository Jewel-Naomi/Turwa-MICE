document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var location = document.getElementById('location').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Add code here to send the form data to your server (e.g., using AJAX or form submission).

    // Optionally, you can redirect the user to a different page after successful sign-up.
    // window.location.href = 'success.html';
});

