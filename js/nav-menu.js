const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu-list');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');


menuBtn.addEventListener('click' , () =>{
  menu.classList.toggle('menu__list--active');
  menuList.classList.remove('menu__list--active');
});

   
