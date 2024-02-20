//when a __ event occurs on __ element, do this __

// CLICK 
// Button
// function makebody(color) {
//     document.body.style.backgroundColor = color;
// }
// const btn = document.querySelector('#teal');
// btn.onclick = function() {
//     makebody('teal');
// }

// const h1 = document.querySelector('h1');
// const obtn = document.querySelector('#olive');

// obtn.addEventListener('click', function (){
//     makebody('olive');
//     h1.style.color = 'cyan';
// })

document.addEventListener('mousemove', function (e){
    let r = Math.floor(e.pageX/window.innerWidth*255);
    let g = Math.floor(e.pageY/window.innerHeight*255);
    document.body.style.backgroundColor = `rgb(${r},${g},0)`;
})

const form = document.querySelector('#fruitform');
const fruit = document.querySelector('input[name="fruit"]');
const color = document.querySelector('input[name="color"]');
const size = document.querySelector('input[name="size"]');
const results = document.querySelector('#results');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newtext = textdesign(fruit.value, color.value, size.value);
    console.log(newtext);
    results.appendChild(newtext);
})

function textdesign(text, color, size) {
    const logo = document.createElement('h1');
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = size+'px';
    return logo;
}

document.addEventListener('keydown', function (e) {
    console.log(e.key);
})

//JSON

// const pref = {
//     fontSize: '18px',
//     favColor: 'purple'
// }

// localStorage.setItem('preferences', JSON.stringify(pref))
// const {favColor} = JSON.parse(localStorage.preferences);
// document.body.style.backgroundColor = favColor;

