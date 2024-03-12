

let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
console.log(cards)
function getRandomCard(){
    let randomNumbers = Math.floor(Math.random() * 13) + 1
    if (randomNumbers ===1){
        return 11
    }else if(randomNumbers>10){
        return 10
    }else{
        return randomNumbers
    }
    //return randomNumbers}
   // return Math.floor(Math.random() * 13) +1
}
function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}
cardsEl.textContent= "Cards: " + cards[0] + " " + cards[1]
sumEl.textContent= "Sum: " + sum;
messageEl.textContent = message;
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    console.log(cards);
    renderGame()
    console.log();
}
}