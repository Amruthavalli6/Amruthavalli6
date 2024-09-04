document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form input values
        var fullName = document.getElementById('fullName').value.trim();
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();
        var confirmPassword = document.getElementById('confirmPassword').value.trim();
        var phoneNumber = document.getElementById('phoneNumber').value.trim();

        // Validate form inputs
        if (fullName === '' || email === '' || password === '' || confirmPassword === '' || phoneNumber === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Password and confirm password do not match.');
            return;
        }

        // Additional validation for email format
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');a
            return;
        }

        // Additional validation for phone number format
        var phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
        if (!phoneRegex.test(phoneNumber)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        // If all validations pass, redirect to code.html
        window.location.href = "code.html";
    });
});