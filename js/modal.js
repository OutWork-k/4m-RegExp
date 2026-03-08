const modalOpenBtn = document.querySelector("#btn-get")
const modal = document.querySelector(".modal")
const modalCloseBtn = document.querySelector(".modal_close")

const showModal = () => {
    modal.style.display = "block"
    document.body.style.overflow = "hidden";
}

const closeModal = () => {
    modal.style.display = "none"
    document.body.style.overflow = ''
}
 modalOpenBtn.onclick = showModal;
 modalCloseBtn.onclick = closeModal;

 modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        closeModal()
    }
 })

 setTimeout(showModal, 10000)


 const openModalOnScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        showModal()
        window.removeEventListener("scroll", openModalOnScroll)
    }
}
window.addEventListener("scroll", openModalOnScroll)// четсно я не понял что тут происходит и тему я не понял но мне подсказали как сделал 