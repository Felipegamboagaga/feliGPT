
let loginbod = document.querySelector('.loginbod');
const registerbox = document.querySelector('.registerbox');
const loginbox = document.querySelector('.loginbox');
const wrapper = document.querySelector('.wrapper');
const Loglink = document.querySelector('.linklogin');
const Reglink = document.querySelector('.linkregistro');
const btnlog = document.querySelector('.botonlog');
const btnreg = document.querySelector('.botonreg')
let user = {
    username: '',
    password:'',
    email:''
}
loginbod.addEventListener('mousemove', function(e){
    x = e.offsetX;
    y = e.offsetY;
    c = Math.sqrt(x * x + y * y);
    loginbod.style.background  =`linear-gradient(45deg, rgba(${x/10},${c},${y/10}), rgba(0,0,255)`
    

});

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

btnlog.addEventListener('click',()=>{
    console.log(document.getElementById('mail').value)
});
btnreg.addEventListener('click',()=>{
    if (document.getElementById('username').value !== '' && document.getElementById('passreg').value !== '' && document.getElementById('mailreg').value !== '') {
     user.username = document.getElementById('username').value
     user.email = document.getElementById('mailreg').value
     user.password = document.getElementById('passreg').value
     localStorage.setItem(user.email, JSON.stringify(user))}
     else {
        document.getElementById('textosuperiorREG').innerHTML = 'Please fill in all the required fields'
     }
     
 
});
