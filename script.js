var elem = document.querySelectorAll('.elem');

elem.forEach(function(e){

    e.addEventListener('mousemove',(det) => {
        e.childNodes[3].style.left = det.x + "px";
    })

    e.addEventListener('mouseenter',() => {
        e.childNodes[3].style.opacity = 1;
    })

    e.addEventListener('mouseleave',() => {
        e.childNodes[3].style.opacity = 0;
    })
})