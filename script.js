window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header-container'),
    menuItem = document.querySelectorAll('.nav-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('header-container-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('header-container-active');
        })
    })
})