const leftBtnDemo = document.getElementById('toast-left-demo')
const rightBtnDemo = document.getElementById('toast-right-demo')

const leftToast = document.getElementById('toast-left')
const rightToast = document.getElementById('toast-right')

leftBtnDemo.addEventListener('click', () => {
    if(leftToast.style.visibility === 'hidden') {
        leftToast.style.visibility = 'visible'
    } else {
        leftToast.style.visibility = 'hidden'
    }
})

rightBtnDemo.addEventListener('click', () => {
    if(rightToast.style.visibility === 'hidden') {
        rightToast.style.visibility = 'visible'
    } else {
        rightToast.style.visibility = 'hidden'
    }
})