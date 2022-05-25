
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
