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
    document.querySelector('.player-message').textContent = 'BUSTED!'
    disablePlayerActions()
  } else {
    dealCardToPlayer()
  }
}
const playerStay = () => {
  disablePlayerActions()
  document.querySelector('.dealer-hand').textContent = ' '
  for (let i = 0; i < dealerHand.length; i++) {
    const card = dealerHand[i]
    const img = document.creatElement('img')
    img.src = card.imgUrl
    document.querySelector('.dealer-hand').appendChild(img)
  } while (dealerScore < 17) {
    for (let j =0; j<dealerHand.length j++) {
      dealerScore += dealerHand[j]
  }
}
const disablePlayerActions = () => {
  document.querySelector('.draw-button').disabled = true
  document.querySelector('.stand-button').disabled = true
}
const createDeck = () => {
  for (let _ = 0; (_ = 2); _++) {
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
  const img = document.creatElement('img')
  img.src = dealtCard.imgUrl
  const li = document.createElement('li')
  li.appendChild(img)
  document.querySelector('.player-hand>ul').appendChild(li)
  document.querySelector('.playerScore').textContent = playerScore
  playerScore += dealtCard.value
  document.querySelector('.player-score')
}
const dealCardToDealer = () => {
  const dealtCard = fullDeck.pop()
  playerHand.push(dealtCard)
  const img = document.creatElement('img')
  img.src = '/card-back/red_back.png'
  const li = document.createElement('li')
  li.appendChild(img)
  document.querySelector('.dealer-hand>ul').appendChild(li)
  document.querySelector('.dealerScore').textContent = dealerScore
  dealerScore += dealtCard.value
  document.querySelector('.dealer-score')
}

const main = () => {
  createDeck()
  shuffleDeck()
  dealCardToPlayer()
  dealCardToPlayer()
  dealCardToDealer()
  dealCardToDealer()
}
document.addEventListener('DOM').addEventListener(main)
document.addEventListener('.draw-button').addEventListener('click', playerHit)
document.addEventListener('.stand-button').addEventListener('click', playerStay)
