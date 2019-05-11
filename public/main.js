import { setupMaster } from "cluster";

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
let playerFinalScore = 0
let dealerFinalScore = 0
const resetGame = 0 //refresh page
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
      console.log('card pushed to deck')
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

const playerScore = () => {
  let total = 0
  for (i=0; i<playerHand.length; i++){
    total += playerHand[i].value
    // sum of playersHand.value
    playerFinalScore.push(total)
  } 
  if (playerScore >21){
    // bust! statement
    document.querySelector('.player-message').textContent('BUST!! - SORRY, TRY AGAIN!')
  }
    
    
const dealerScore = () => {
      let total = 0
      for (i=0; i<dealerHand.length; i++){
        total += dealerHand[i].value
        // sum of dealerHand.value
        dealerFinalScore.push(total)
      }
      if (total > 21){
        for (i=0; i< total.length; i++){
          document.querySelector('.dealer-message').textContent('BUSTED! - PLAYER WINS!!')
        } while (total < 17){
        const dealerCard = fullDeck.pop()
        const dealerImg = document.createElement('img')
        dealerImg.src = dealerCard.imgUrl
        document.querySelector('.dealer-hand').appendChild(dealerImg)
        // next compare dealer score to see if dealer wins
      } if (dealerScore > playerScore){
          document.querySelector('.dealer-message').textContent('Dealer Wins!')
          // now compare player score to see if  player wins
      } else if (playerScore > dealerScore){
        document.querySelector('.player-message').textContent('You Win!')
        // now compare scores in the event of a tie or push
      }else if (dealerScore === playerScore){
        document.querySelector('.player-message').textContent('PUSH!')
        document.querySelector('.dealer-message').textContent('PUSH!')
      }
      
      
      // function to draw player hand
const dealOneCard = () => {
        const dealtCard = fullDeck.pop()
        const imageTag = document.createElement('img')
        imageTag.src = dealtCard.imgUrl
        document.querySelector('.card-draw').appendChild(imageTag)
        playerHand.push(dealtCard)
  console.log(dealtCard)
}

// function to draw dealer hand
// create an image tag
// change img tag property src with the fullDeck[i].imgURL
// pop these two cards into player's hand array

// create the 'hit me' button function
// adds one card and then calculates if there is a bust situation.
// upon hitting the stay button, the dealer play loop will run
// dealer play: if less than 17, hit - if above 17 evaluate winner
// if above 21 bust
// declare winner
// reset button
document.querySelector('.stand-button').addEventListener('click', dealerScore)
document.querySelector('.draw-button').addEventListener('click', dealOneCard)
document.querySelector('.reset-button').addEventListener('click', resetGame)
document.addEventListener('DOMContentLoaded', main)
document.addEventListener('DOMContentLoaded', shuffle)