<form id="contactForm" action="/contactus" method="POST" onsubmit="return validateForm()">
  <div class="input-box">
    <input type="text" id="nameInput" placeholder="Enter your name" required>
  </div>
  <div class="input-box">
    <input type="email" id="emailInput" placeholder="Enter your email" required>
  </div>
  <div class="input-box message-box">
    <textarea id="messageInput" placeholder="Message" required></textarea>
  </div>
  <div class="button">
    <input type="submit" value="Send Now">
  </div>
</form>

<script>
  // Get form elements
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const messageInput = document.getElementById('messageInput');

  // Function to validate the form
  function validateForm() {
    let isValid = true;

    // Check if name is empty
    if (nameInput.value.trim() === '') {
      isValid = false;
      alert('Please enter your name.');
      nameInput.focus();
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      isValid = false;
      alert('Please enter a valid email address.');
      emailInput.focus();
    }

    // Check if message is empty
    if (messageInput.value.trim() === '') {
      isValid = false;
      alert('Please enter a message.');
      messageInput.focus();
    }

    return isValid;
  }

  // Add event listener for form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    if (validateForm()) {
      // Form is valid, you can submit the form here
      form.submit();
    }
  });
</script>