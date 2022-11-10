const headerMenuContentOpen = document.getElementById('header-menu-content-open')
const headerMenuContent = document.getElementById('header-menu-content')

headerMenuContent.style.display = 'none'

headerMenuContentOpen.addEventListener('click', () => {
    if(headerMenuContent.style.display == 'none'){
        headerMenuContent.style.display = 'block'
    } else {
        headerMenuContent.style.display = 'none'
    }
})

const exit = document.getElementById('exit')
const register = document.getElementById('register')
const openRegister = document.getElementById('open-register')

register.style.display = 'none'

openRegister.addEventListener('click', () => {
    if(register.style.display == 'none'){
        register.style.display = 'block'
    } else {
        register.style.display = 'none'
    }
})

exit.addEventListener('click', () => {
    if(register.style.display == 'block'){
        register.style.display = 'none'
    } 
})