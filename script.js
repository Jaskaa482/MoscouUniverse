$(document).ready(function () {
    var mouseX, mouseY;
    var ww = $(window).width();
    var wh = $(window).height();
    var traX, traY;
    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((4 * mouseX) / 570) + 40;
        traY = ((4 * mouseY) / 570) + 50;
        console.log(traX);
        $(".title").css({ "background-position": traX + "%" + traY + "%" });
    });
});

setTimeout(function () {
    // Completar la operación de carga aquí
    preloader.style.display = "none";
}, 6000);


let layer_1 = document.querySelector('.layer-1');
let layer_2 = document.querySelector('.layer-2');
let layer_3 = document.querySelector('.layer-3');
let layer_4 = document.querySelector('.layer-4');
let layer_5 = document.querySelector('.layer-5');

window.onscroll = function () {
    let Y = window.scrollY;
    layer_1.style.transform = 'translateY(' + Y / 0 + 'px)'
    layer_2.style.transform = 'translateY(' + Y / 2 + 'px)'
    layer_3.style.transform = 'translateY(' + Y / 1.5 + 'px)'
    layer_4.style.transform = 'translateY(' + Y / 2 + 'px)'
    layer_5.style.transform = 'translateY(' + Y / 3 + 'px)'
}

AOS.init();

// var audio = new Audio("your-music-file.mp3");
// audio.loop = true;
// audio.play();


setTimeout(function() {
    document.body.style.overflow = "hidden";
  }, 0);

  setTimeout(function() {
    document.body.style.overflow = "auto";
  }, 6000);


// document.getElementById("sql").addEventListener("click", mostrarsql)
// function mostrarsql() {
//     document.getElementById("sql").style.width = "70%"
//     document.getElementById("sqlcontent").style.display = "block"
//     document.getElementById("java").style.display = "none"
//     document.getElementById("html").style.display = "none"
//     document.getElementById("sistemas").style.display = "none"

// }
