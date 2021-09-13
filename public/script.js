
const burger = document.getElementById('burger'),
    mobWrapper = document.querySelector('.head__mobileWrapper');

burger.addEventListener('click', () => {
    mobWrapper.classList.toggle('active')
})