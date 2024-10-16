document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting automatically
  
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password !== confirmPassword) { // password chack 
      alert('Passwords do not match!');
    } else {
      alert('Registration successful!');
    }
  });
  