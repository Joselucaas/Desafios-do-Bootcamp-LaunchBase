const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener("click", function() {
        modalOverlay.classList.add('active')
        const link = card.getAttribute('id')
        modalOverlay.querySelector('iframe').src=`https://rocketseat.com.br/${link}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src=''
    if(modal.classList.contains('expand')) {
        modal.classList.remove('expand')
    }
})

document.querySelector('.expandir').addEventListener('click', function() {
    modal.classList.toggle('expand')
})


