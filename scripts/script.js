$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

document.querySelector('#scroll-to-resume-link').addEventListener('click', function() {
    document.querySelector('#resume').scrollIntoView();
});
          
document.querySelector('#scroll-to-projects').addEventListener('click', function() {
    document.querySelector('#projects').scrollIntoView();
});

var swiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
            loop: true,
            loopFillGroupWithBlank: true,
            grabCursor: true,
            mousewheel: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // 1200: {
                //   slidesPerView: 3,
                //   slidesPerGroup: 3
                // },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1
                }
                
            }
    });