const submit = document.querySelector('.email-button')
const input = document.querySelector('.email-input')
const error = document.querySelector('.error')

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submit.addEventListener('click', (e) =>{
    e.preventDefault()

    const submission = input.value.trim()

    if (submission === "" || !regex.test(submission)) {
    error.classList.remove('hidden')
} else {
    error.classList.add('hidden')
}
})