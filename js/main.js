function funcCatalog(){
    document.querySelector('.header-navigation-wrapper').style.display = 'flex';
}
function closeCatalog(){
    document.querySelector('.header-navigation-wrapper').style.display = 'none';
}
function funcServices(){
    document.querySelector('.header-navigation-services').style.display = 'block';
    document.querySelector('.header-navigation-services').classList.add('services-open');
}
function closeServices(){
    if(window.innerWidth >768){
        document.querySelector('.header-navigation-services').style.display = 'none';
    }    
    document.querySelector('.header-navigation-services').classList.remove('services-open');
}
function funcBuyer(){
    document.querySelector('.header-navigation-buyer').style.display = 'block';
    document.querySelector('.header-navigation-buyer').classList.add('buyer-open');
}
function closeBuyer(){
    if(window.innerWidth >768){
        document.querySelector('.header-navigation-buyer').style.display = 'none';
    }  
    document.querySelector('.header-navigation-buyer').classList.remove('buyer-open');
}
const fixedBar = document.querySelector('main');
function menuMobileOpen(){
    if(fixedBar.classList.contains('isShown')){
        document.querySelector('.header-navigation').classList.toggle('open-scroll');
    }
    document.querySelector('.header-navigation').classList.toggle('open');
    document.querySelector('.button-mobile').classList.toggle('close');
    document.querySelector('.container-mobile').classList.toggle('no-padding');
    let mobilePoint = document.querySelectorAll('.header-navigation-li')
    for (let i = 0; i< mobilePoint.length; i++)
        mobilePoint[i].classList.toggle('move');
    document.querySelector('.header-navigation-buyer').classList.remove('buyer-open');
    document.querySelector('.header-navigation-services').classList.remove('services-open');
    document.querySelector('body').classList.toggle('lock')
};


const toggleBar = function () {
  let isShown = window.scrollY > 0;
  fixedBar.classList.toggle('isShown', isShown);
  if(window.innerWidth<768){
    document.querySelector('.header-menu').classList.toggle('fixed', isShown);
  }
  document.querySelector('.header-mobile').classList.toggle('fixed',isShown);
  document.querySelector('.header-top').classList.toggle('delete', isShown);
  document.querySelector('.header-text-wrapper').classList.toggle('delete', isShown);
  document.querySelector('.header-navigation-services').classList.toggle('fullscreen', isShown);
  document.querySelector('.header-navigation-buyer').classList.toggle('fullscreen', isShown);
}
toggleBar();
window.addEventListener('scroll', toggleBar);




    
    

$('.banner-wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3500,   
    fade: true,
    arrows: false
});
$('.turnkey-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $('.turnkey-arrow__prev'),
    nextArrow: $('.turnkey-arrow__next'),
    responsive:[
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 576,
            settings:{
                slidesToShow: 2
            }           
        },
    ]
});

$('.need-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: $('.need-arrow__prev'),
    nextArrow: $('.need-arrow__next'),
    responsive:[
        {
            breakpoint: 996,
            settings: {
                slidesToShow: 3,
                autoplay: true,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            },
        },
    ]
});
$('.favourities-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: $('#favourities-arrow__prev'),
    nextArrow: $('#favourities-arrow__next'),
    responsive:[
        {
            breakpoint: 996,
            settings: {
                slidesToShow: 3,
                autoplay: true,
            },
        },
        {
            breakpoint: 670,
            settings: {
                slidesToShow: 2,
                autoplay: true,
            },
        },
        {
            breakpoint: 400,
            settings:{
                slidesToShow: 1
            }           
        },
    ]
});
    
    const popupClose = function(){
        document.querySelector('.popup').classList.remove('show');
    }
    const popupShow = (
        function(){
            document.querySelector('.popup').classList.add('show');
            }
        );
    const popupFinish = function(){
        let popupName = document.querySelector('.popup__input').value,
        popupPhone = document.querySelector('.popup-input__phone').value;
        document.querySelector('.popup-show').classList.add('delete');
        document.querySelector('.popup-hide').classList.add('display');
        document.querySelector('.popup-hide__phone').innerHTML = popupPhone;
        document.querySelector('.popup-hide__name').innerHTML = popupName;
    }

const requestSend = function(){
    let requestName = document.querySelector('.request__input').value;
    let requestPhone = document.querySelector('.request-contacts__phone').value;
    if(requestName!= "" && requestPhone!= ""){
        document.querySelector('.request-left').classList.add('delete');
        document.querySelector('.request-callback').classList.add('delete');
        document.querySelector('.request-hide').classList.add('display');
        document.querySelector('.request-hide__phone').innerHTML = requestPhone;
        document.querySelector('.request-hide__name').innerHTML = requestName;
    }    
}



