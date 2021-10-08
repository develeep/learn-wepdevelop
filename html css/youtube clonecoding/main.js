const toggleBtn = document.querySelector('.more');
const timeline = document.querySelector('.timeline');

toggleBtn.addEventListener('click', () => {
  timeline.classList.toggle('active');
});