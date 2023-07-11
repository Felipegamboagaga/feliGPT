let loginbod = document.querySelector('.loginbod');
loginbod.addEventListener('mousemove', function(e){
    x = e.offsetX;
    y = e.offsetY;
    c = Math.sqrt(x * x + y * y);
    loginbod.style.background  =`linear-gradient(45deg, rgba(${x/10},${c},${y/10}), rgba(0,0,255)`
    document.getElementById('textosuperior').innerHTML = x+"    "+y;

});



