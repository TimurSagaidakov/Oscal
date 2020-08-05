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
function menuMobileOpen(){
    document.querySelector('.header-navigation').classList.toggle('open');
    document.querySelector('.button-mobile').classList.toggle('close');
    let mobilePoint = document.querySelectorAll('.header-navigation-li')
    for (let i = 0; i< mobilePoint.length; i++)
        mobilePoint[i].classList.toggle('move');
    document.querySelector('.header-navigation-buyer').classList.remove('buyer-open');
    document.querySelector('.header-navigation-services').classList.remove('services-open');
};

$('.banner-wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.banner-arrow__prev'),
    nextArrow: $('.banner-arrow__next'),
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,   
    fade: true,
    pauseOnHover: true
});

