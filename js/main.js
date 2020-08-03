function funcCatalog(){
    document.querySelector('.header-navigation-wrapper').style.display = 'flex';
}
function closeCatalog(){
    document.querySelector('.header-navigation-wrapper').style.display = 'none';
}
function funcServices(){
    document.querySelector('.header-navigation-services').style.display = 'block';
}
function closeServices(){
    document.querySelector('.header-navigation-services').style.display = 'none';
}
function funcBuyer(){
    document.querySelector('.header-navigation-buyer').style.display = 'block';
}
function closeBuyer(){
    document.querySelector('.header-navigation-buyer').style.display = 'none';
}
function menuMobileOpen(){
    document.querySelector('.header-navigation').classList.toggle('open');
    document.querySelector('.button-mobile').classList.toggle('close');
    let mobilePoint = document.querySelectorAll('.header-navigation-li')
    for (let i = 0; i< mobilePoint.length; i++)
        mobilePoint[i].classList.toggle('move');
    
};

