$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

document.querySelector('#scroll-to-projects').addEventListener('click', function() {
    document.querySelector('#projects').scrollIntoView();
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    grabCursor: true,
    mousewheel: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1
        }
        
    }
});