var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == '../imagens/menu.png') {
        iconMenu.setAttribute("src","../imagens/close.png");
    }else{
        iconMenu.setAttribute("src","../imagens/menu.png");
    }

   menu.classList.toggle('active');
});


function rustDonwloadv25() {
    window.open("https://mega.nz/file/7YZxlaoC#Eeum1zHXhg0eKyqd9JSshd4Vtk0mG9IeCK1zDheO4xI", target="_blank")
}
function rustDownloadv13() {
    window.open("https://www.mediafire.com/file/smgofq3h0ejs8rx/Rust_by_Mateus_PSK.rar/file", target="_blank")
}
