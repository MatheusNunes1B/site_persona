// Selecione os elementos da seta e da container de vídeos
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const videoContainer = document.querySelector('.video-container');

// Defina a largura dos vídeos e o quanto se deve mover ao clicar
const videoWidth = document.querySelector('.video-container iframe').offsetWidth + 20; // 20px de gap

// Mover para a esquerda
leftArrow.addEventListener('click', () => {
  videoContainer.scrollBy({
    left: -videoWidth, // Movendo para a esquerda
    behavior: 'smooth', // Rolagem suave
  });
});

// Mover para a direita
rightArrow.addEventListener('click', () => {
  videoContainer.scrollBy({
    left: videoWidth, // Movendo para a direita
    behavior: 'smooth', // Rolagem suave
  });
});
