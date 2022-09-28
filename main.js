const $ = selector => document.querySelector(selector)
const user = $('#name')
const passw = $('#password')
const accessButon = $('#access')
const errorMessage = $('.error_message') 
const showPassw = $('.ver')

const registersUser =['pepito','roberto','martina']
const registerPassw = ['1234','456','contra']

accessButon.addEventListener('click',e=>{
    e.preventDefault()
    if(!user.value || !passw.value) error()
    else validar()
})
showPassw.addEventListener('mouseenter', ()=>{
    passw.type='text';
})

showPassw.addEventListener('mouseout', ()=>{
    passw.type='password';
})

function validar(){
    let validador=true
    for (let i = 0; i < registersUser.length; i++) {
        if(user.value===registersUser[i]&&passw.value===registerPassw[i]){
            alert('bienvenido')
            validador=false
            break;
        }
    }
    if(validador) error()
}

function error(){
    errorMessage.style.display = 'block'
    setTimeout(()=>{
        errorMessage.style.display='none'
    },3000)
}