const hamburger = document.querySelector('.hamburger-menu');

const menu = document.querySelector('.header-right > a');

const cross = document.querySelector('.hamburger-menu > a');

/*
console.log(hamburger);
console.log(menu);
console.log(cross);
*/

menu.addEventListener('click', function(){
    hamburger.classList.add('active');
})

cross.addEventListener('click', function(){
    hamburger.classList.remove('active');
})
