const toko = () => {
const colors = ['red', 'yellow', 'green', 'brown'];
const buttons = document.querySelector('button');
const body = document.querySelector('body');

body.style.backgroundColor = 'blue';

buttons.addEventListener("click", () => {
    const colorMath = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorMath];
});


};

toko();