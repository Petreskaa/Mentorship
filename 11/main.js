// exercise I

let wrapper = document.querySelector('.wrapper');
let target = document.querySelector('.target');

// let widthRange = window.innerWidth - 100;
// let heightRange = window.innerHeight - 100;

// let randomTop = Math.floor(Math.random() * heightRange);
// let randomLeft = Math.floor(Math.random() * widthRange);

// target.setAttribute('style', `left: ${randomLeft}px; top: ${randomTop}px`);

start();

// ____________________________________________

// exercise II
// let score = 0;
let score = localStorage.getItem('scoreVal') || 0;

function openModal() {
  let popup = document.createElement('div');
  let text = document.createElement('p');
  let btn = document.createElement('button');

  text.innerText = 'You won!';
  btn.innerText = 'Play again.';

  popup.appendChild(text);
  popup.appendChild(btn);
  wrapper.appendChild(popup);

  popup.setAttribute('style', 'background-color:white; font-size:20px; color:green; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); padding: 20px 50px; text-align:center; border-radius:10px')
  btn.setAttribute('style', 'background-color:green; color:white; padding:10px 15px; border-radius:4px; border:0; cursor:pointer;');
  btn.classList.add('btn');
  text.setAttribute('style', 'margin-top:0;');

  // exercise III
  btn.addEventListener('click', function(e) {
    // console.log(e.target.parentElement.parentElement);
    // e.target.parentElement.remove();
    popup.remove();

    start();
  });

  // exercise IV
  let scoreText = document.createElement('p');
  score++;
  scoreText.innerText = `Score: ${score}`;
  popup.appendChild(scoreText);

  // exercise IV
  let btnReset = document.createElement('button');
  btnReset.innerText = 'Reset score.';
  btnReset.setAttribute('style', 'background-color:tomato; color:white; padding:10px 15px; border-radius:4px; border:0; cursor:pointer;');
  popup.appendChild(btnReset);

  // exercise V
  localStorage.setItem('scoreVal', score);

  // exercise VI
  btnReset.addEventListener('click', resetScore);
}

target.addEventListener('click', openModal);

// exercise III
function start() {
  let widthRange = window.innerWidth - 100;
  let heightRange = window.innerHeight - 100;

  let randomTop = Math.floor(Math.random() * heightRange);
  let randomLeft = Math.floor(Math.random() * widthRange);

  target.setAttribute('style', `left: ${randomLeft}px; top: ${randomTop}px`);
}

// exercise V
// window.addEventListener('load', function() {
  // let scoreLocalStorage = localStorage.getItem('scoreVal');

  // if (scoreLocalStorage) {
  //   score = scoreLocalStorage;
  // }
// });

// exercsie VI
function resetScore(e) {
  score = 0;

  localStorage.removeItem('scoreVal');

  e.target.parentElement.remove();

  start();
}