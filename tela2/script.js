document.querySelectorAll('.carousel-container').forEach(carousel => {
    const cardContainer = carousel.querySelector('.card-container');
    const leftButton = carousel.querySelector('.carousel-button.left');
    const rightButton = carousel.querySelector('.carousel-button.right');
    const scrollAmount = 440; // Quantidade de rolagem em pixels

    // Duplicar o conteúdo dos cards para simular o efeito infinito
    cardContainer.innerHTML += cardContainer.innerHTML;

    // Função para verificar a posição de rolagem e resetar se necessário
    function checkScrollPosition() {
        if (cardContainer.scrollLeft >= cardContainer.scrollWidth / 2) {
            cardContainer.scrollLeft = 1; // Ajuste leve para evitar corte visível no reset
        } else if (cardContainer.scrollLeft <= 0) {
            cardContainer.scrollLeft = cardContainer.scrollWidth / 2 - 1;
        }
    }

    // Evento para rolar para a esquerda
    leftButton.addEventListener('click', function() {
        cardContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        // Verifica a posição após a rolagem suave
        setTimeout(checkScrollPosition, 400);
    });

    // Evento para rolar para a direita
    rightButton.addEventListener('click', function() {
        cardContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        // Verifica a posição após a rolagem suave
        setTimeout(checkScrollPosition, 400);
    });

    // Verificar a posição de rolagem para garantir o efeito infinito
    cardContainer.addEventListener('scroll', checkScrollPosition);
});



//===================popup=================================
const button = document.querySelector('button')
const popup =  document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
   popup.style.display = 'block'
})

popup.addEventListener('click', event => {
const classNameOfClickedElement = event.target.classList[0]
const classNames = ['popup-close', 'popup-wrapper','popup-link']
const shouldClosePopup = classNames.some(className =>
   className === classNameOfClickedElement)

if (shouldClosePopup) {
   popup.style.display = 'none'
}
})
//========================pesquisa
document.querySelector('.search input').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
    });
});