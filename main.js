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

/* 
    É best practice definire le costanti con uso singolo (ad esempio la costante hamburger) direttamente nella funzione di utilizzo invece di averle come funzioni globali che incrementano il rischio di problemi nelcaso in cui abbiamo molto codice e molte costanti.
*/