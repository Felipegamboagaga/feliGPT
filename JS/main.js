let loginbod = document.querySelector('.loginbod');
loginbod.addEventListener('mousemove', function(e){
    x = e.offsetX;
    y = e.offsetY;
    loginbod.style.background  =`linear-gradient(45deg, rgba(${x/3},0,0), rgba(0,0,${y/3})`

});



