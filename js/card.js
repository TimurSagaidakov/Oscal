if(window.innerWidth > 769){
  document.querySelectorAll('.tab-navigation__link').forEach((item)=>
  item.addEventListener('click', function(e){
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');
    const tabLinkLine = e.target.querySelector('.tab-navigation__link span');
    document.querySelectorAll('.tab-navigation__link').forEach((child) => child.classList.remove('display')
    );
    document.querySelectorAll('.tab-navigation__link span').forEach((child) => child.style.opacity = '0'
    );
    document.querySelectorAll('.tab-body-page').forEach((child) => child.classList.remove('display')
    );
    item.classList.add('display');
    tabLinkLine.style.opacity = '1'
    document.getElementById(id).classList.add('display');
  })
);
}
let popupLock = document.querySelector('.popup-lock');
let popupHand = document.querySelector('.popup-hand');
popupLock.onclick = function () { 
  popupLock.classList.remove('show');
}
popupHand.onclick = function () { 
  popupHand.classList.remove('show');
}
const popupLockShow = function(){
  popupLock.classList.add('show');
}
const popupLockClose = function(){
  popupLock.classList.remove('show');
}
const popupHandShow = function(){
  popupHand.classList.add('show');
}
const popupHandClose = function(){
  popupHand.classList.remove('show');
}
document.querySelector('.tab-navigation__link').click();
$(document).ready(function () {
  $('.complect-color-slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: $('.complect-color-arrow__next'),
    prevArrow: $('.complect-color-arrow__prev'),
    responsive:[
      {
          breakpoint: 998,
          settings: {
              slidesToShow: 4,
          },
      },
    ]
  });
  $('.complect-door-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $('.complect-door-arrow__next'),
    prevArrow: $('.complect-door-arrow__prev'),
    responsive:[
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
          },
      },
  ]
  });
  $('.complect-related-hand-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $('.complect-related-hand-arrow__next'),
    prevArrow: $('.complect-related-hand-arrow__prev'),
    responsive:[
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 2,
          },
      }
  ]
  });
  $('.complect-related-lock-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $('.complect-related-lock-arrow__next'),
    prevArrow: $('.complect-related-lock-arrow__prev'),
    responsive:[
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 2,
          },
      }
  ]
  });
})