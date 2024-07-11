const modal = document.querySelector(".backdrop")
const modalBtnOpen = document.querySelector(".js-modal-button-open")
const modalBtnClose = document.querySelector(".js-modal-button-close")

const toggleModal = () => modal.classList.toggle("backdrop--is-hidden")

modalBtnOpen.addEventListener('click', toggleModal)
modalBtnClose.addEventListener('click', toggleModal)
