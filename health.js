let fname=document.getElementById('name')
let name_error=document.getElementById('name_re')
let submit=document.getElementById('form_btn')
let phone=document.getElementById('phone')
let phone_error=document.getElementById('phone_re')
let password=document.getElementById('password')
let coonfirm=document.getElementById('con_pass')
let pass_error=document.getElementById('password_re')
let conf_error=document.getElementById('config_re')



submit.addEventListener('click',e=>{
    if (fname.value === ''){
        fname.style.border='1px solid red'
        name_error.style.display='block'
    }
    else{
        fname.style.border='1px solid green'
        name_error.remove()
    }

    if (phone.value === ''){
        phone.style.border='1px solid red'
        phone_error.style.display='block'
    }
    else{
        phone.style.border='1px solid green'
        phone_error.remove()
    }

    if(password.value === ''){
        password.style.border='1px solid red'
        pass_error.style.display='block'
    }
    else{
        password.style.border='1px solid green'
        pass_error.remove()
    }

    if(coonfirm.value === ''){
        coonfirm.style.border='1px solid red'
        conf_error.style.display='block'
    }
    else if(coonfirm.value != password.value){
        coonfirm.style.border='1px solid red'
        conf_error.style.display='block'
    }
    else{
        coonfirm.style.border='1px solid green'
        conf_error.remove()
    }
})

let menu=document.getElementById('menu')
let navigation=document.getElementById('navigations')
let cancel=document.getElementById('cancel')

menu.addEventListener('click',()=>{
    navigation.style.left='0px'
    navigation.style.transition='.5s'
    menu.replaceWith(cancel) 
    cancel.style.display='block'   
})
cancel.addEventListener('click',()=>{
    navigation.style.left='-100%'
    cancel.replaceWith(menu) 
    // cancel.style.display='block'   
})
