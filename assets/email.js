document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const oldError = document.querySelector('.error-text');
  if (oldError) oldError.remove();
  emailInput.classList.remove('input-error');

  if (emailPattern.test(emailValue)) {
  
    window.location.href = 'success.html?email=' + encodeURIComponent(emailValue);
  } else {

    emailInput.classList.add('input-error');

    const error = document.createElement('div');
    error.className = 'error-text';
    error.textContent = 'Valid email required.';
    emailInput.insertAdjacentElement('afterend', error);
  }
});
