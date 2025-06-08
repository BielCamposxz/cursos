function register(ev) {
    console.log(ev)
}

const button = document.getElementById('register-button')

button.addEventListener('click',register)

function removeEvent(){
    button.removeEventListener('click', register)
}

button.addEventListener('mouseover', function (ev) {
    console.log(ev)
})