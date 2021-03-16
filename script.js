const button = document.getElementById('StartButton')

function choose () {
  const number = Math.round(Math.random() * 3 - 0.4999999)
  if (number === 0) {
    return ('rock')
  } else if (number === 1) {
    return ('paper')
  } else {
    return ('scissors')
  }
}

function victoryMessage (playerInput, computerInput, victory) {
  let message = ''
  if (victory === 'player') {
    message = 'You picked ' + playerInput + ', and I picked ' + computerInput + '! That means you won the match!'
  } else if (victory === 'computer') {
    message = 'You picked ' + playerInput + ', and I picked ' + computerInput + '! That means I won the match!'
  } else {
    message = 'You and I both picked ' + playerInput + '! That means we tied! Let us try again.'
  }
  window.alert(message)
}

function game () {
  const Consent = window.confirm('Would you like to play this game?')
  if (Consent === true) {
    let HumanWin = 0
    let ComputerWin = 0
    let NoWin = 0
    let Answer = ''
    let GeneratedAnswer = ''
    while ((HumanWin < 2) && (ComputerWin < 2) && (HumanWin + ComputerWin + NoWin < 3)) {
      Answer = window.prompt('Rock, paper, scissors, shoot!')
      if (Answer != null) {
        Answer = Answer.toLowerCase()
        Answer = Answer.trim()
      }
      if (Answer === 'rock') {
        GeneratedAnswer = choose()
        if (GeneratedAnswer === 'paper') {
          victoryMessage(Answer, GeneratedAnswer, 'computer')
          ComputerWin = ComputerWin + 1
        } else if (GeneratedAnswer === 'scissors') {
          victoryMessage(Answer, GeneratedAnswer, 'player')
          HumanWin = HumanWin + 1
        } else {
          victoryMessage(Answer, GeneratedAnswer, 'tie')
          NoWin = NoWin + 1
        }
      } else if (Answer === 'paper') {
        GeneratedAnswer = choose()
        if (GeneratedAnswer === 'scissors') {
          victoryMessage(Answer, GeneratedAnswer, 'computer')
          ComputerWin = ComputerWin + 1
        } else if (GeneratedAnswer === 'rock') {
          victoryMessage(Answer, GeneratedAnswer, 'player')
          HumanWin = HumanWin + 1
        } else {
          victoryMessage(Answer, GeneratedAnswer, 'tie')
          NoWin = NoWin + 1
        }
      } else if (Answer === 'scissors' || Answer === 'scissor') {
        GeneratedAnswer = choose()
        if (GeneratedAnswer === 'rock') {
          victoryMessage(Answer, GeneratedAnswer, 'computer')
          ComputerWin = ComputerWin + 1
        } else if (GeneratedAnswer === 'paper') {
          victoryMessage(Answer, GeneratedAnswer, 'player')
          HumanWin = HumanWin + 1
        } else {
          victoryMessage(Answer, GeneratedAnswer, 'tie')
          NoWin = NoWin + 1
        }
      } else {
        window.alert('That isn\'t an option! That means the computer wins this round.')
        ComputerWin = ComputerWin + 1
      }
    }
    if (HumanWin > ComputerWin) {
      window.alert('Congratulations, you won more matches! Your score: ' + HumanWin + '. Your computer\'s score: ' + ComputerWin + '.')
    } else {
      window.alert('It seems your computer won more matches! Your score: ' + HumanWin + '. Your computer\'s score: ' + ComputerWin + '.')
    }
  }
}

button.addEventListener('click', game)
