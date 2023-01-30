let navMenu = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMenu.classList.remove('main-nav--nojs');

navMenu.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMenu.classList.contains('main-nav--closed')) {
    navMenu.classList.remove('main-nav--closed');
    navMenu.classList.add('main-nav--opened');
  } else {
    navMenu.classList.add('main-nav--closed');
    navMenu.classList.remove('main-nav--opened');
  }
});
