// const title = document.getElementById('title');
const title = document.querySelector('h1');
// const title = document.querySelector('.hello');
function handTitleClick() {
  console.log('title was clicked!');
}

title.addEventListener("click",handTitleClick());

// const a = document.getElementsByTagName("h1");
// const a = document.querySelector("h1");
// console.log(a)
