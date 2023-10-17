document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // You can add your authentication logic here
    // For this example, we'll simply log the values
    console.log('Username:', username);
    console.log('Password:', password);
});

