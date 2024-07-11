const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.js-menu-btn-open');
const menuBtnClose = document.querySelector('.js-menu-btn-close');
const links = document.getElementsByClassName('mobile-menu__link');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

for (let link of links) {
  link.addEventListener('click', toggleMenu);
}

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);
