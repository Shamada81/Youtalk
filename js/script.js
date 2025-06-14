const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const tags = document.querySelectorAll('.main__tag');

tags.forEach(tag => tag.addEventListener('click', () => {
  tag.classList.toggle('main__tag--active');
}))
