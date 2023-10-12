const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button.id)
  button.addEventListener('click', (event) => {
    body.style.backgroundColor = event.target.id;
  });
});
