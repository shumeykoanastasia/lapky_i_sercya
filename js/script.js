//шматочок коду для роботи бургер-меню
const hamburger_menu = document.getElementById('hamburger-menu')
const nav_menu = document.getElementById('nav-menu')
//додаємо обробку подій - при кліці на кнопку
//до елементу hamburger-menu та nav-menu додається або прибирається класс active
hamburger_menu.addEventListener('click',()=>{
    hamburger_menu.classList.toggle('active');
    nav_menu.classList.toggle('active') ;
})