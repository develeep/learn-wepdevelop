const toggleBtn = document.querySelector('.search');
const ser_var = document.querySelector('.search_var');
const ser_q = document.querySelector('.search_q');
const ser_text = document.querySelector('.search_text');
const icon = document.querySelector('.fa-search');

toggleBtn.addEventListener('click', () => {
  ser_q.classList.toggle('active');
  ser_var.classList.toggle('active');
  ser_text.classList.toggle('active');
  icon.classList.toggle('active');
});