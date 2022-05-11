AOS.init({
    delay:500, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

const menuIcon = document.getElementById('menu-icon');
const menuBars = document.querySelectorAll('.bars');
const navBar = document.getElementById('collapse-navbar'); // menu-mobile
const mainMenu = document.querySelector('.menu-mobile-main')
const menuItems = document.querySelectorAll('.menu-mobile-main>li');

let menuIsOpen = false;

function animateMenuItems() {
    const initialSpeed = 0.2;
    const step = 0.1;
    let speed = menuIsOpen ? initialSpeed : initialSpeed * menuItems.length;
    navBar.setAttribute('style', `transition-duration: ${speed}s`)
    menuItems.forEach((li, index) => {

        li.firstElementChild.addEventListener('click', toggleMenu)

        menuIsOpen ? li.classList.add('active') : li.classList.remove('active');

        li.setAttribute('style', `transition-duration: ${speed}s`);
        speed = menuIsOpen ? speed + step : speed - step;
    });
}

function toggleMenu() {
    menuIsOpen = !menuIsOpen;
    menuBars.forEach((bar) => {
        if (!bar.classList.contains('change')) {
            bar.classList.add('change')
        } else {
            bar.classList.remove('change')
        }
    })
    if (menuIsOpen) {
        navBar.setAttribute('style', 'display: block')
        navBar.classList.add('active')
        navBar.classList.add('lg:flex')
    } else {
        navBar.setAttribute('style', 'display: none')
        navBar.classList.remove('active')
        navBar.classList.remove('lg:flex')
    }
    animateMenuItems();
}

menuIcon.addEventListener('click', toggleMenu);
