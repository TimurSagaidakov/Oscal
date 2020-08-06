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
const fixedBar = document.querySelector('.header-mobile');
function menuMobileOpen(){
    if(fixedBar.classList.contains('isShown')){
        document.querySelector('.header-navigation').classList.toggle('open-scroll');
    }
    document.querySelector('.header-navigation').classList.toggle('open');
    document.querySelector('.button-mobile').classList.toggle('close');
    let mobilePoint = document.querySelectorAll('.header-navigation-li')
    for (let i = 0; i< mobilePoint.length; i++)
        mobilePoint[i].classList.toggle('move');
    document.querySelector('.header-navigation-buyer').classList.remove('buyer-open');
    document.querySelector('.header-navigation-services').classList.remove('services-open');
    document.querySelector('body').classList.toggle('lock')
};


const toggleBar = function () {
  let isShown = window.pageYOffset > window.innerHeight / 15;
  fixedBar.classList.toggle('isShown', isShown);
  document.querySelector('.header-top').classList.toggle('delete', isShown);
  document.querySelector('.header-text-wrapper').classList.toggle('delete', isShown);
  document.querySelector('.main').classList.toggle('elevate', isShown);

}
toggleBar();
window.addEventListener('scroll', toggleBar);
$('.banner-wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    //autoplay: true,
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
                arrow: false
            },
        },
        {
            breakpoint: 576,
            settings:{
                slidesToShow: 2
            }           
        }
    ]
});

