const menuBtn = document.querySelector('.menu__btn');
const closeMenuBtn = document.querySelector('.close-icon');
const sideMenu = document.getElementById('sideMenu');


menuBtn.addEventListener('click' , () =>{
    sideMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});
closeMenuBtn.addEventListener('click', () =>{
    sideMenu.classList.remove('active');
    document.body.style.overflow = '';
});