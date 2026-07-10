const submit = document.querySelector('.submit')
const input = document.querySelector('.input')

const error = document.querySelector('.error')

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submit.addEventListener('click', (e) => {
    e.preventDefault()

    const entry = input.value.trim()

    if(entry === "" || !regex.test(entry)) {
        error.classList.toggle('hidden')
    }
})
