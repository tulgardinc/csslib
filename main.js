// Navigation bar
// detect menu button and the nav links
var menuBttn = document.getElementById('menu-btn');
var links = document.getElementById('links');
// state of menu button
let menuOpen = false;

// when menu button is clicked on
menuBttn.onclick = () => {
    // toggle the appearnce of nav links
    links.classList.toggle('links-active');
    menuBttn.classList.toggle('open');
};
