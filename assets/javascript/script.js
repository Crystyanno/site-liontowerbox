//Script File

var hamburgerBtn = document.querySelector('.main-navbar .hamburger-btn');
hamburgerBtn.addEventListener( 'click', activeClass);

function activeClass(){
    hamburgerBtn.classList.toggle('active')
}