const cardsWrapper = document.querySelector('.cards__wrapper');
let cards = Array.from(document.body.querySelectorAll('.cards'));
let previousCard = '';

setInterval(() => {
  cards = Array.from(document.body.querySelectorAll('.cards'));
  if (!cards[1].classList.contains('active')) {
    cards[1].classList.add('active');
  }
  previousCard = cards[0];
  setTimeout(() => {
    cardsWrapper.removeChild(cards[0]);
    cardsWrapper.appendChild(previousCard);
    cards[1].classList.remove('active');
  }, 800);

  console.log(cards);
  console.log('==== sesi slide berakhir ====');
}, 2000);
