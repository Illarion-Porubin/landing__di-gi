$(function(){
  $('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="next arrow"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev-arrow.svg" alt="prev arrow"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows:false
        }
      }
    ]
  });
  $('.marketing__slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows:false
        }
      }
    ]
  });

  // $('.footer__icon-social').on('hover', function () {
    
  //   $(this).addClass("animate__heartBeat");
  // });
  $('.footer__icon').hover(function(){
    $(this).find('.footer__icon-social').toggleClass('animate__heartBeat');
  });

  function backToTop() {
    let button = $('.footer__scroll-up');

    button.on('click', (e) => {
      e.preventDefault();
      $('html').animate({scrollTop: 0}, 1000);
    })
  }
  
});