console.log('this is renderer');

const header = document.querySelector('h1');
header.style.color = 'red';
header.textContent = 'me';

const button = document.querySelector('.alert');
button.addEventListener('click', (e) => {
  alert(__dirname);
});
