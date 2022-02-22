function ModalModule() {
    const modalClose = document.querySelectorAll('.modal-close')

    function hideModal(e) {
        e.preventDefault();
        e.target.parentElement.parentElement.style.visibility = 'hidden';
    }

    modalClose.forEach((modalCloseIcon) => modalCloseIcon.addEventListener('click', hideModal))

}

export default ModalModule