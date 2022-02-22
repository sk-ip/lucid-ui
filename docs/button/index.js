const leftBtnDemo = document.getElementById('demo-left-btn')
const rightBtnDemo = document.getElementById('demo-right-btn')

const leftBtn = document.getElementById('demo-left')
const rightBtn = document.getElementById('demo-right')

leftBtnDemo.addEventListener('click', () => {
    if(leftBtn.style.visibility === 'hidden') {
        leftBtn.style.visibility = 'visible'
    } else {
        leftBtn.style.visibility = 'hidden'
    }
})

rightBtnDemo.addEventListener('click', function(){
    if(rightBtn.style.visibility === 'hidden') {
        rightBtn.style.visibility = 'visible'
    } else {
        rightBtn.style.visibility = 'hidden'
    }
})