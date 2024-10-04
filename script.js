document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        const menu = document.querySelector('.fade-in');
        menu.classList.add('zoom-in');
        
        // Após a animação, redireciona para a página do jogo
        setTimeout(() => {
            window.location.href = 'game.html'; // Substitua 'jogo.html' pela página do jogo
        }, 500); // Tempo da animação
    }
});
