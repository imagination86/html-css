// Выбираем элементы
const burgerMenu = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header__menu-list');

// Добавляем обработчик клика
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu--active');
    menuList.classList.toggle('header__menu-list--active');
});