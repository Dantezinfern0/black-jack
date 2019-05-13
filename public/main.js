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
const fullDeck = []
const playerHand = []
const dealerHand = []
let dTotal = 0
let pTotal = 0
const main = () => {
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      const card = {
        rank: ranks[i].rank,
        value: ranks[i].value,
        suit: suits[j],
        imgUrl: '/card-faces/' + ranks[i].rank + suits[j] + '.png'
      }
      fullDeck.push(card)
      console.log(card)
    }
    console.log(fullDeck)
  }
}
const shuffle = () => {
  for (let i = fullDeck.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1))
    const x = fullDeck[i]
    fullDeck[i] = fullDeck[r]
    fullDeck[r] = x
  }
  console.log(fullDeck)
}
const dealOneCard = () => {
  const dealtCard = fullDeck.pop()
  const imageTag = document.createElement('img')
  imageTag.src = dealtCard.imgUrl
  document.querySelector('.card-draw').appendChild(imageTag)
  pTotal.value += dealtCard.value
  playerHand.push(dealtCard)
  if (playerHand.length > 1) {
    document.querySelector('.stand-button').disabled = false
  } else if (pTotal.value > 21) {
    document.querySelector('.player-message').textContent = 'BUSTED'
    document.querySelector('.draw-button').disabled = true
  } else dealerScore()
}
const dealerScore = () => {
  document.querySelector('.stand-button').disabled = true
  while (dTotal.value < 17) {
    const dealerCard = fullDeck.pop()
    const dealerImg = document.createElement('img')
    dealerImg.src = dealerCard.imgUrl
    document.querySelector('.dealer-hand').appendChild(dealerImg)
    dealerHand.push(dealerCard)
    for (let i = 0; i < dealerHand.length; i++) {
      dTotal.value += dealerHand[i].value
    }
    calculateWinner()
  }
}
const calculateWinner = () => {
  for (let i = 0; i <= dealerHand[i].length; i++) {
    let dTotal = 0
    dTotal += dealerHand[i].value
    if (dTotal > 21) {
      document.querySelector('.player-message').textContent =
        'DEALER BUSTED! YOU WIN!!'
    } else if (dTotal === pTotal) {
      document.querySelector('.player-message').textContent = 'PUSH!'
    } else if (dTotal > pTotal) {
      document.querySelector('.player-message').textContent = 'Dealer Wins!'
    } else parseInt(dTotal < pTotal)
    document.querySelector('.player-message').textContent = 'You Win!'
  }
}
document.querySelector('.stand-button').disabled = true
document.querySelector('.stand-button').addEventListener('click', dealerScore)
document.querySelector('.draw-button').addEventListener('click', dealOneCard)
document.addEventListener('DOMContentLoaded', main)
document.addEventListener('DOMContentLoaded', shuffle)
