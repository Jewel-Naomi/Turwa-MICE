const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });
const User = require('./userModel'); // Create a user model for MongoDB schema

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define routes for registration and login

app.post('/register', (req, res) => {
  // Implement user registration logic here
});

app.post('/login', (req, res) => {
  // Implement user login logic here
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});




document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    // Make an AJAX request to your backend for authentication
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Redirect the user to their dashboard or another page
        window.location.href = '/dashboard';
      } else {
        // Display an error message
        alert('Login failed. Please check your credentials.');
      }
    });
  });

  