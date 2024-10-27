// Função que inicia a animação e redireciona para a página do jogo
function startGame() {
    const menu = document.querySelector('.fade-in'); // Alvo do fade-in
    menu.classList.remove('fade-in'); // Remove a classe fade-in
    menu.classList.add('zoom-out'); // Adiciona a animação de zoom-out

    // Após a animação, redireciona para a página do jogo
    setTimeout(() => {
        window.location.href = '../menu/menu.html'; // Caminho para o jogo
    }, 300); // Tempo da animação
}

// Adiciona evento de tecla pressionada
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        startGame(); // Chama a função para iniciar o jogo
    }
});

// Adiciona evento de clique para iniciar o jogo ao clicar na página
document.addEventListener('click', startGame); // Chama a mesma função ao clicar
