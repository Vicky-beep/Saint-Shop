const bar = document.getElementById("bar");

const navBar = document.getElementById("navbar");
const close = document.getElementById("close")
if(bar){
    bar.addEventListener('click', () =>{
        navBar.classList.add('active');
    });
}
if(close){
    close.addEventListener('click', () =>{
        navBar.classList.remove('active')
    });
}




$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:100,
        smartSpeed:100,
        autoplayHoverPause:true,  
    });
});