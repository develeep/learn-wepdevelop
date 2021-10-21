// const title = document.getElementById('title');
// const title = document.getElementsByTagName('h1');
const title = document.querySelector('.hello');
function handTitleClick() {
  console.log('title was clicked!');
}

title.addEventListener("click", handTitleClick);

