if($('.slider__body').length>0){
    $('.slider__body').slick({
        dots: true,
        arrows: true,
        accessibility: false,
        slidesToShow:1,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        prevArrow: '<button class="slick-prev" >Prev</button>',
        responsive: [{
            breakpoint: '768',
            settings: {}
        }]
      });
}