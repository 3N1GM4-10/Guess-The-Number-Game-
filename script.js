'use strict';

let scoreEl = document.querySelector('.score')
let highScore = 0 
let secretNumber = Math.trunc(Math.random() * 20) + 1

const displayMessage = function(message){
  document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener('click', function (){
  const guess = Number(document.querySelector('.guess').value)
  if(!guess){
    displayMessage('No number ⚠️')   

  //When player wins
  }else if(guess === secretNumber) {
    displayMessage('Congratulations Correct 🎊')
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber
    if(scoreEl.textContent > highScore){
      highScore = scoreEl.textContent
      document.querySelector('.highscore').textContent = highScore
    }

    //when guess is wrong
  }else if(guess !== secretNumber) {
    if(scoreEl.textContent > 1) {
      displayMessage(guess < secretNumber ? '👇 Too Low!' : '☝ Too High!')
      scoreEl.textContent -= 1
    } else {
      displayMessage('You Lost the Game')
      scoreEl.textContent = 0
    }
  }
})

document.querySelector('.again').addEventListener('click', function() {
  scoreEl.textContent = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  displayMessage('Start guessing...')
  document.querySelector('.number').textContent = '?'
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.guess').value = ''
  document.querySelector('.number').style.width = '15rem'
  // window.location.reload();
})