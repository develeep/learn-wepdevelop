const toggleBtn = document.querySelector('.button');
const menu = document.querySelector('.menu');
const icons = document.querySelector('.icon');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
