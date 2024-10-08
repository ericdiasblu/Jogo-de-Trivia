document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        const menu = document.querySelector('.fade-in'); // Alvo do fade-in
        menu.classList.remove('fade-in'); // Remove a classe fade-in, se necessário
        menu.classList.add('zoom-out'); // Adiciona a animação de zoom-out

        // Após a animação, redireciona para a página do jogo
        setTimeout(() => {
            window.location.href = '../menu/menu.html'; // Caminho para o jogo
        }, 300); // Tempo da animação
    }
});
