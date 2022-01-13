console.log(666)


function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();


// for burger 

const header__burger = document.querySelector('.icon-menu'); 
const header__menu = document.querySelector('.menu__body');

header__burger.addEventListener('click', function(event) { 
    header__burger.classList.toggle('active'); 
    header__menu.classList.toggle('active'); 
    document.body.classList.toggle('lock'); 
})    

//slider slick

$(document).ready(function(){
    $('.slider').slick();
});

