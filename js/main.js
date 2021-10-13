var elButton = document.querySelector ('.header-hamburger-menu');
var elHeader = document.querySelector ('.header');

elButton.addEventListener('click', (evt) =>{
          elHeader.classList.toggle('header--active')
});