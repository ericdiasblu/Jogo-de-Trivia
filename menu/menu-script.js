const buttons = document.querySelectorAll('.quiz-button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        document.body.classList.add('fade-out'); // Adiciona a classe de fade-out

        setTimeout(() => {
            window.location.href = button.getAttribute('onclick').match(/'([^']+)'/)[1]; // Redireciona
        }, 1000); // Tempo igual à duração da animação
    });
});
