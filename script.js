// Body Ddebug
document.body.addEventListener('dblclick', () => {
  document.body.classList.toggle('debug');
});

document.body.addEventListener('keypress', e => {
  if (e.key == 'a') {
    document.body.classList.toggle('debug');
  }
});

// Active Navbar
const nav = document.querySelector('.sections.section--header .navbar');
const toggle = document.querySelector('.sections.section--header .nav__toggle');

toggle.addEventListener('click', function () {
  nav.classList.toggle('active');
});

// Header
const header = document.querySelector('.sections.section--header');
let currentScrollY = 0;
let minY = 200;
window.addEventListener('scroll', e => {
  currentScrollY = window.scrollY;

  if (currentScrollY >= minY) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
  // currentScrollY >= minY ? header.classList.add('scroll') : header.classList.remove('scroll');
});

// Cards on hover
const cards = Array.from(document.querySelectorAll('.section--services .card'));
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    resetCardClass();
    card.classList.add('active');
  });

  card.addEventListener('focus', () => {
    resetCardClass();
    card.classList.add('active');
  });
});

function resetCardClass() {
  cards.forEach(card => {
    card.classList.remove('active');
  });
}

// Trip
const cardLikeButton = document.querySelector('svg.card__like');
cardLikeButton.addEventListener('click', () => {
  cardLikeButton.classList.toggle('active');
});

// Testimonial Card
const testimonialCardsWrapper = document.querySelector('.section--testimonials .cards-wrapper');
const testimonialCards = Array.from(document.querySelectorAll('.section--testimonials .testimonial__card'));
const indicators = Array.from(document.querySelectorAll('.indicators-wrapper .indicator'));

i = 0;
setInterval(() => {
  if (i > 2) {
    i = 0;
  }

  switch (i) {
    case 0:
      if (!testimonialCards[0].classList.contains('active')) {
        testimonialCards[0].classList.add('active');
        testimonialCards[1].classList.add('next');
      }
      testimonialCards[0].classList.remove('next');
      testimonialCards[2].classList.remove('active');
      break;
    case 1:
      testimonialCards[1].classList.add('active');
      testimonialCards[1].classList.remove('next');
      testimonialCards[0].classList.remove('active');
      testimonialCards[2].classList.add('next');
      break;
    case 2:
      testimonialCards[2].classList.add('active');
      testimonialCards[2].classList.remove('next');
      testimonialCards[1].classList.remove('active');
      testimonialCards[0].classList.add('next');
      break;
  }
  resetIndicator();
  indicators[i].classList.add('indicator--active');
  i++;
}, 2500);

function resetIndicator() {
  indicators.forEach(i => {
    i.classList.remove('indicator--active');
  });
}
