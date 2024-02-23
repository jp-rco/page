function addMail(event) {
    event.preventDefault();
    const emailInput = document.getElementById('emailInput');
    const errorMessage = document.getElementById('errorMessage');
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailInput.style.backgroundColor = '#ffece4';
      emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
      errorMessage.textContent = 'Invalid email address';
      errorMessage.style.display = 'block';
      emailInput.style.color = 'hsl(4, 100%, 67%)';
    } else {
      emailInput.style.backgroundColor = '';
      emailInput.style.borderColor = '';
      errorMessage.textContent = '';
      errorMessage.style.display = 'none';
      emailInput.style.color = '';

      if (window.location.pathname.includes('index.html')) {
        window.location.href = 'segunda.html?email=' + encodeURIComponent(email);
      } else if (window.location.pathname.includes('segunda.html')) {
        const emailDisplay = document.getElementById('emailDisplay');
        if (emailDisplay) {
          emailDisplay.textContent = email || 'Correo no proporcionado';
        }
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const errorMessage = document.getElementById('errorMessage');
    const dismissButton = document.querySelector('.dismissbutton');

    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    const emailDisplay = document.getElementById('emailDisplay');
    if (emailDisplay) {
      emailDisplay.textContent = email || 'Correo no proporcionado';
    }

    emailInput.addEventListener('input', function() {
      emailInput.style.backgroundColor = '';
      emailInput.style.borderColor = '';
      errorMessage.textContent = '';
      errorMessage.style.display = 'none';
      emailInput.style.color = '';
    });

    dismissButton.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
