const cards = ['♥', '♣', '♦', '♠'];
const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']; 


function getCard() {
  const singleCard = cards[Math.floor(Math.random() * cards.length)];
  const singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
  const showCard = `${singleNumber}   ${singleCard}`;
  document.querySelector( '#showing' ).innerHTML = showCard;
}
