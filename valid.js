const email = document.getElementById('email');
const form = document.getElementById('form');
const errorMessage = document.getElementById('error');
errorMessage.style.float = 'left';
errorMessage.style.color = 'red';
errorMessage.style.fontFamily = 'Inter, sans-serif';
function valid(input) {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
}

const showError = (e) => {
  if (!valid(email.value)) {
    e.preventDefault();
    errorMessage.textContent = 'your email must be lowercase';
    setTimeout(() => {
      errorMessage.textContent = '';
    }, 3000);
  }
  email.value = '';
};
form.addEventListener('submit', showError);

const email1 = document.getElementById('email1');
const form1 = document.getElementById('form1');
const errorMessage2 = document.getElementById('error1');
errorMessage2.style.float = 'left';
errorMessage2.style.color = 'red';
errorMessage2.style.fontFamily = 'Inter, sans-serif';
function validTwo(input) {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
}

const showErrorMS = (e) => {
  if (!validTwo(email1.value)) {
    e.preventDefault();
    errorMessage2.textContent = 'your email must be lowercase';
    setTimeout(() => {
      errorMessage2.textContent = '';
    }, 3000);
  }
  email1.value = '';
};
form1.addEventListener('submit', showErrorMS);
