var menu_bars = document.getElementById("my_menu");
var sidebar = document.getElementById("left");
var body_content = document.getElementById("right");

var humburger = document.getElementsByClassName("humburger")[0];

menu_bars.onclick = function(){
    sidebar.classList.toggle("collapsed")
    body_content.classList.toggle("expanded")
}

if (window.screen.width < 1200) {
    humburger.onclick = function(){
        sidebar.classList.toggle("d-block")
    }
    // document.getElementById('menu_bars_close').onclick = function(){
    //     sidebar.classList.toggle("d-block")
    // }
}