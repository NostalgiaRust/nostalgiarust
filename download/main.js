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
    window.open("https://encurtalink.online/rustv25remake", target="_blank")
}
function rustDownloadv13() {
    window.open("https://encurtalink.online/rustv1381", target="_blank")
}