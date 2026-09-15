const button = document.querySelector('#update-button');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
  message.textContent = 'Button clicked — JavaScript is working!';
});
