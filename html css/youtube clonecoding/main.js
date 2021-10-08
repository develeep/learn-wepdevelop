const toggleBtn = document.querySelector('.more');
const timeline = document.querySelector('.timeline');
const mun = document.querySelector('.mun');
const mun2 = document.querySelector('.mun2');
toggleBtn.addEventListener('click', () => {
  timeline.classList.toggle('active');
  mun.classList.toggle('active');
  mun2.classList.toggle('active');
});