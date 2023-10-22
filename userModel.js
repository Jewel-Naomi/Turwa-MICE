const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures that email addresses are unique
  },
  location: String, // Optional field for user's location
  password: {
    type: String,
    required: true,
  },
  // You can add more fields as needed, such as user roles, profile picture, etc.
});

const User = mongoose.model('User', userSchema);

module.exports = User;
