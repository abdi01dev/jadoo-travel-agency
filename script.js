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

// Body Ddebug
document.body.addEventListener('dblclick', () => {
  document.body.classList.toggle('debug');
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
