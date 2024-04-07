let subMenu = document.getElementById("subMenu");

function toggleMenu() {
    subMenu.classList.toggle("open-menu");
    var seta = document.getElementById("setaPerfil");
    seta.classList.toggle("rotated");
}

let subPesquisa = document.getElementById("subPesquisa");

function togglePesquisa() {
    subPesquisa.classList.toggle("open-pesquisa");
}

function ClosePesquisa() {
    subPesquisa.classList.remove("open-pesquisa");
}


let subNotificacao = document.getElementById("subNotificacao");

function toggleNotificacao() {
    subNotificacao.classList.toggle("open-notificacao")
}

const modal = document.querySelector('.moddle-inf')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.closebtn-maisinf')
const btnOpenModal = document.querySelector('.mais-inf')

const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
    body.classList.add('modal-open');
}


const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    body.classList.remove('modal-open');
}

btnOpenModal.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)