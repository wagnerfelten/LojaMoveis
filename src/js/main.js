const buttonCute = document.querySelector('.cute')
const buttonclose = document.querySelector('.close')

const sofa = document.querySelector('.sofa-cute')
const sofaGif = document.querySelector('.sofa-gif')


buttonCute.addEventListener('click', () => {
    console.log('click')

    sofa.classList.add('hide')
    sofaGif.classList.remove('hide')
})

buttonclose.addEventListener('click', () => {
    sofa.classList.remove('hide')
    sofaGif.classList.add('hide')
})
