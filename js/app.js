function toggleMenu(){
    const getNav = document.querySelector('.container__nav');
    const getOverlay = document.querySelector('.container__nav-overlay');

    if(getNav.classList.contains('active')){
        getOverlay.classList.remove('active');
        getNav.classList.remove('active');
    }else{
        getOverlay.classList.add('active');
        getNav.classList.add('active');
    }
}