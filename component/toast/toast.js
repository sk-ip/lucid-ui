function ToastModule() {
    const toastClose = document.querySelectorAll('.close-icon')

    function hideToast(e) {
        e.preventDefault();
        e.target.parentElement.style.visibility = 'hidden';
    }

    toastClose.forEach((toastCloseIcon) => toastCloseIcon.addEventListener('click', hideToast))
}

export default ToastModule
