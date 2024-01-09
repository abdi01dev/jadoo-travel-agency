// Active Navbar
const nav = document.querySelector('.sections.section--header .navbar');
const toggle = document.querySelector('.sections.section--header .nav__toggle');

toggle.addEventListener('click', function () {
  nav.classList.toggle('active');
});
