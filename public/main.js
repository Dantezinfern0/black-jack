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
// Deck array
const fullDeck = []
// arrays for drawn cards
const playerHand = []
const dealerHand = []
// comparison variables
let playerFinalScore = 0
let dTotal = 0
let pTotal = 0
// reset by refresh
// function that creates card objects and puts them into deck array on page load
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
// shuffles deck on page load
const shuffle = () => {
  for (let i = fullDeck.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1))
    const x = fullDeck[i]
    fullDeck[i] = fullDeck[r]
    fullDeck[r] = x
  }
  console.log(fullDeck)
}
// function to draw player hand on at a time and evaluate score
const dealOneCard = () => {
  const dealtCard = fullDeck.pop()
  const imageTag = document.createElement('img')
  imageTag.src = dealtCard.imgUrl
  document.querySelector('.card-draw').appendChild(imageTag)
  playerHand.push(dealtCard)
  console.log(dealtCard)
  for (let i = 0; i < playerHand.length; i++) {
    pTotal += playerHand[i].value
    // sum of playersHand.value
  }
  if (pTotal > 21) {
    // bust! statement
    document.querySelector('.player-message').textContent =
      'BUST!! - TRY AGAIN!'
    document.querySelector('.draw-button').disabled = true
  }
  if (pTotal === 21) {
    document.querySelector('.draw-button').disabled = true
    document.querySelector('.player-message').textContent = 'BLACKJACK!'
    dealerScore()
    document.querySelector('.draw-button').disabled = true
  }
  if (playerHand.length > 1) {
    document.querySelector('.stand-button').disabled = false
  }
  playerFinalScore.push(pTotal)
}

const dealerScore = () => {
  document.querySelector('.stand-button').disabled = true
  while (dTotal < 17) {
    const dealerCard = fullDeck.pop()
    const dealerImg = document.createElement('img')
    dealerImg.src = dealerCard.imgUrl
    document.querySelector('.dealer-hand').appendChild(dealerImg)
    dealerHand.push(dealerCard)
    for (let i = 0; i < dealerHand.length; i++) {
      dTotal += dealerHand[i].value
      // dealerTotal.push(total)
    }
  }
  let total
  for (let i = 0; i <= dealerHand[i].length; i++) {
    total += dealerHand[i].value
  } // sum of dealerHand.value
  if (total > 21) {
    document.querySelector('.player-message').textContent =
      'DEALER BUSTED! YOU WIN!!'
  }
  if (total === playerFinalScore) {
    document.querySelector('.player-message').textContent = 'PUSH!'
  }
  if (total > playerFinalScore) {
    document.querySelector('.player-message').textContent = 'Dealer Wins!'
    // now compare player score to see if  player wins
  }
  if (total < playerFinalScore) {
    document.querySelector('.player-message').textContent = 'You Win!'
  }
  // now compare scores in the event of a tie or push
}

document.querySelector('.stand-button').disabled = true
document.querySelector('.stand-button').addEventListener('click', dealerScore)
document.querySelector('.draw-button').addEventListener('click', dealOneCard)
document.addEventListener('DOMContentLoaded', main)
document.addEventListener('DOMContentLoaded', shuffle)
