let loginbod = document.querySelector('.loginbod');
loginbod.addEventListener('mousemove', function(e){
    x = e.offsetX;
    y = e.offsetY;
    c = Math.sqrt(x * x + y * y);
    loginbod.style.background  =`linear-gradient(45deg, rgba(${x/10},${c},${y/10}), rgba(0,0,255)`
    document.getElementById('textosuperior').innerHTML = x+"    "+y;

});
const registerbox = document.querySelector('.registerbox');
const loginbox = document.querySelector('.loginbox');
const wrapper = document.querySelector('.wrapper');
const Loglink = document.querySelector('.linklogin');
const Reglink = document.querySelector('.linkregistro');
console.log(registerbox, loginbox, wrapper)
Reglink.addEventListener('click',()=>{
    wrapper.classList.add('activo');
    wrapper.style.height = '520px';
    registerbox.style.transform = 'translateX(0)';
    loginbox.style.transform = 'translateX(-400px)';


})
Loglink.addEventListener('click',()=>{
    wrapper.classList.remove('activo');
    wrapper.style.height = '440px'
    loginbox.style.transform = 'translateX(0)';
    registerbox.style.transform = 'translateX(400px)';


})

