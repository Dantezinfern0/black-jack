const ranks = [
  { rank: 'A', value: 11 },
  { rank: '2', value: 2 },
  { rank: '3', value: 3 },
  { rank: '4', value: 4 },
  { rank: '5', value: 5 },
  { rank: '6', value: 6 },
  { rank: '7', value: 7 },
  { rank: '8', value: 8 },
  { rank: '9', value: 9 },
  { rank: '10', value: 10 },
  { rank: 'J', value: 10 },
  { rank: 'Q', value: 10 },
  { rank: 'K', value: 10 }
]
const suits = ['H', 'S', 'C', 'D']
let dealerHand = []
let playerHand = []
let fullDeck = []
let playerScore = 0
let dealerScore = 0
const playerHit = () => {
  dealCardToPlayer()
  if (playerScore > 21) {
    document.querySelector('.player-message').textContent =
      'YOU BUSTED, GAME OVER!'
    disablePlayerButtons()
  }
}
const playerStay = () => {
  disablePlayerButtons()
  while (dealerScore < 17) {
    dealCardToDealer()
  }
  if (dealerScore > 21) {
    document.querySelector('.player-message').textContent =
      'Dealer BUSTED! YOU WIN!!'
  } else if (dealerScore === playerScore) {
    document.querySelector('.player-message').textContent = 'TIE/PUSH!'
  } else if (dealerScore > playerScore) {
    document.querySelector('.player-message').textContent = 'SORRY, YOU LOSE!'
  } else if (dealerScore < playerScore) {
    document.querySelector('.player-message').textContent = 'YOU WIN!!'
  }
}
const resetButton = () => {
  document.querySelector('.draw-button').disabled = false
  document.querySelector('.stand-button').disabled = false
  document.querySelector('.player-message').textContent = '-| BlackJack |-'
  document.querySelector('.dealer-hand').textContent = ''
  document.querySelector('.player-hand').textContent = ''
  document.querySelector('.dealer-score').textContent = ''
  document.querySelector('.player-score').textContent = ''
  dealerScore = 0
  playerScore = 0
  main()
}
const createDeck = () => {
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      const card = {
        rank: ranks[i].rank,
        value: ranks[i].value,
        suit: suits[j],
        imgUrl: '/card-faces/' + ranks[i].rank + suits[j] + '.png'
      }
      fullDeck.push(card)
    }
  }
}

const disablePlayerButtons = () => {
  document.querySelector('.draw-button').disabled = true
  document.querySelector('.stand-button').disabled = true
}
const shuffleDeck = () => {
  for (let i = fullDeck.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1))
    const x = fullDeck[i]
    fullDeck[i] = fullDeck[r]
    fullDeck[r] = x
  }
}
const dealCardToPlayer = () => {
  const dealtCard = fullDeck.pop()
  playerHand.push(dealtCard)
  const img = document.createElement('img')
  img.src = dealtCard.imgUrl
  const li = document.createElement('li')
  li.appendChild(img)
  document.querySelector('.player-hand').appendChild(li)
  document.querySelector('.player-score').textContent = playerScore
  playerScore += dealtCard.value
  document.querySelector('.player-score').textContent = playerScore
}
const dealCardToDealer = () => {
  const dealtCard = fullDeck.pop()
  dealerHand.push(dealtCard)
  const img = document.createElement('img')
  img.src = dealtCard.imgUrl
  const li = document.createElement('li')
  li.appendChild(img)
  document.querySelector('.dealer-hand').appendChild(li)
  document.querySelector('.dealer-score').textContent = dealerScore
  dealerScore += dealtCard.value
  document.querySelector('.dealer-score').textContent = dealerScore
}

const main = () => {
  createDeck()
  shuffleDeck()
  dealCardToPlayer()
  dealCardToPlayer()
  dealCardToDealer()
  dealCardToDealer()
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.draw-button').addEventListener('click', playerHit)
document.querySelector('.stand-button').addEventListener('click', playerStay)
document.querySelector('.reset-button').addEventListener('click', resetButton)
