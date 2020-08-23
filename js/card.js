$(document).ready(function () {
  $('.complect-color-slider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: $('.complect-color-arrow__next'),
    prevArrow: $('.complect-color-arrow__prev'),
  });
  $('.complect-door-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $('.complect-door-arrow__next'),
    prevArrow: $('.complect-door-arrow__prev'),
    responsive:[
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
          },
      },
      {
          breakpoint: 576,
          settings:{
              slidesToShow: 1
          }           
      },
  ]
  });
})