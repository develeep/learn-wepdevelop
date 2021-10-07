const toogleBtn = document.querySelector('.button');
const menu = document.querySelector('.nav_main');
const icons = document.querySelector('.nav_icon');
const logo = document.querySelector('.nav_logo');
toogleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
  logo.classList.toggle('active');
});