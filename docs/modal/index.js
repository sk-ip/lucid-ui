const modalDemo1 = document.getElementById('modal-demo-1')
const modalDemo2 = document.getElementById('modal-demo-2')

const modal1 = document.getElementById('modal-1')
const modal2 = document.getElementById('modal-2')

modalDemo1.addEventListener('click', function() {
    if(modal1.style.visibility === 'hidden') {
        modal1.style.visibility = 'visible'
    } else {
        modal1.style.visibility = 'hidden'
    }
})

modalDemo2.addEventListener('click', function(){
    if(modal2.style.visibility === 'hidden') {
        modal2.style.visibility = 'visible'
    } else {
        modal2.style.visibility = 'hidden'
    }
})