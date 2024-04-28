document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
  
    fetch('http://localhost:3002/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Account created!') {
        window.location.href = 'signin.html';
      } else {
        document.querySelector('.error-message').textContent = data.message;
      }
    })
    .catch(error => {
      document.querySelector('.error-message').textContent = 'Network error: ' + error;
    });
  });
  