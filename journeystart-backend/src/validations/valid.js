// Function to validate if a string is valid data
isValidData = function (a) {
    if (a === null || a === undefined) return false; // Check if the input is null or undefined
    if (typeof a !== 'string' || a.trim().length === 0) return false; // Check if the input is not a string or if it is an empty string after trimming
    if (!(/^[A-Za-z\s]+$/.test(a))) return false; // Check if the input contains only letters or whitespace
    return true; // If all conditions pass, the data is considered valid
  };
  
  // Function to validate an email address
  validEmail = function (email) {
    return /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); // Check if the email matches the required pattern
  };
  
  // Function to validate a password
  validPassword = function (password) {
    const pass = password.replace(/\s/g, ''); // Remove spaces from the password
    return /^[^\s]{8,15}$/.test(pass); // Check if the password is between 8 and 15 characters and doesn't contain spaces
  };
  
  // Function to validate a mobile number
  validMobile = function (mob) {
    const trimmedMobile = mob.replace(/\s/g, ''); // Remove spaces from the mobile number
    return /^[0-9]{10}$/.test(trimmedMobile); // Check if the mobile number consists of exactly 10 digits
  };
  
  module.exports = { isValidData, validEmail, validMobile, validPassword };
  