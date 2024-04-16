let angle = 0;
let direction = 1;

const toggleMenu = () =>{
    const popupMenu = document.getElementById('menu-popup');
    popupMenu.style.display = popupMenu.style.display === "block" ? "none" : "block";

    const menu = document.getElementById('rotate')
    angle += 180 * direction;
    menu.style.transform = `rotate(${angle}deg)`
    menu.style.transition = '0.5s'
    direction *= -1;
}

// to display none the menu popup when it is not closed
window.onload = function(){
    var div = document.getElementById('menu-popup')

    function checkWidth(){
        var deviceWidth = window.innerWidth;
        if(deviceWidth > 1000){
            div.style.display = "none";
        }
    }

    checkWidth();
    window.addEventListener('resize',checkWidth)
}

const popup = () =>{
    const products = document.getElementById('popup');
    products.style.display = products.style.display === "block" ? "none" : "block";

    // for the rotation of the product arrow when in menu
    const icon = document.getElementById('arrow')
    angle += 180 * direction;
    icon.style.transform = `rotate(${angle}deg)`
    icon.style.transition = '0.5s'
    direction *= -1;
} 

const popup1 = () =>{
    const products = document.getElementById('popup1');
    products.style.display = products.style.display === "block" ? "none" : "block";

    // for the rotation of the product arrow when in menu
    const icon = document.getElementById('arrow1')
    angle += 180 * direction;
    icon.style.transform = `rotate(${angle}deg)`
    icon.style.transition = '0.5s'
    direction *= -1;
} 