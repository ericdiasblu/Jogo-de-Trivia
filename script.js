const allQuestions = [
    { question: "Qual é a capital da França?", answers: [{ text: "Londres", correct: false }, { text: "Paris", correct: true }, { text: "Berlim", correct: false }, { text: "Madri", correct: false }] },
    { question: "Qual é o maior planeta do sistema solar?", answers: [{ text: "Terra", correct: false }, { text: "Júpiter", correct: true }, { text: "Marte", correct: false }, { text: "Saturno", correct: false }] },
    { question: "Quem escreveu 'Dom Casmurro'?", answers: [{ text: "Machado de Assis", correct: true }, { text: "José de Alencar", correct: false }, { text: "Graciliano Ramos", correct: false }, { text: "Clarice Lispector", correct: false }] },
    { question: "Qual é a língua mais falada do mundo?", answers: [{ text: "Inglês", correct: false }, { text: "Chinês Mandarim", correct: true }, { text: "Espanhol", correct: false }, { text: "Árabe", correct: false }] },
    { question: "Qual o símbolo químico do ouro?", answers: [{ text: "Au", correct: true }, { text: "Ag", correct: false }, { text: "Pb", correct: false }, { text: "Fe", correct: false }] },
    { question: "Qual é o continente com mais países?", answers: [{ text: "África", correct: true }, { text: "Ásia", correct: false }, { text: "América do Sul", correct: false }, { text: "Europa", correct: false }] },
    { question: "Qual é o animal terrestre mais rápido?", answers: [{ text: "Leão", correct: false }, { text: "Guepardo", correct: true }, { text: "Cavalo", correct: false }, { text: "Elefante", correct: false }] },
    { question: "Qual é o nome do maior oceano do mundo?", answers: [{ text: "Oceano Atlântico", correct: false }, { text: "Oceano Índico", correct: false }, { text: "Oceano Pacífico", correct: true }, { text: "Oceano Ártico", correct: false }] },
    { question: "Quem pintou a Mona Lisa?", answers: [{ text: "Vincent van Gogh", correct: false }, { text: "Pablo Picasso", correct: false }, { text: "Leonardo da Vinci", correct: true }, { text: "Michelangelo", correct: false }] },
    { question: "Qual é o maior mamífero do mundo?", answers: [{ text: "Elefante", correct: false }, { text: "Baleia Azul", correct: true }, { text: "Girafa", correct: false }, { text: "Orca", correct: false }] },
    { question: "Qual é a capital da Noruega?", answers: [{ text: "Copenhague", correct: false }, { text: "Oslo", correct: true }, { text: "Estocolmo", correct: false }, { text: "Helsinque", correct: false }] },
    { question: "Qual é a cor do arco-íris que vem depois do azul?", answers: [{ text: "Verde", correct: false }, { text: "Amarelo", correct: true }, { text: "Vermelho", correct: false }, { text: "Índigo", correct: false }] },
    { question: "Qual é a capital da Islândia?", answers: [{ text: "Reiquiavique", correct: true }, { text: "Copenhague", correct: false }, { text: "Oslo", correct: false }, { text: "Estocolmo", correct: false }] },
    { question: "Qual é o nome do continente onde está o Egito?", answers: [{ text: "África", correct: true }, { text: "Ásia", correct: false }, { text: "América", correct: false }, { text: "Europa", correct: false }] },
    { question: "Qual é o mais alto edifício do mundo?", answers: [{ text: "Burj Khalifa", correct: true }, { text: "Shanghai Tower", correct: false }, { text: "Abraj Al Bait", correct: false }, { text: "One World Trade Center", correct: false }] },
    { question: "Qual é a capital do Chile?", answers: [{ text: "Santiago", correct: true }, { text: "Buenos Aires", correct: false }, { text: "Lima", correct: false }, { text: "Brasília", correct: false }] },
    { question: "Qual é o planeta conhecido como 'o planeta vermelho'?", answers: [{ text: "Terra", correct: false }, { text: "Marte", correct: true }, { text: "Vênus", correct: false }, { text: "Mercúrio", correct: false }] },
    { question: "Qual é a moeda oficial dos Estados Unidos?", answers: [{ text: "Dólar", correct: true }, { text: "Euro", correct: false }, { text: "Yen", correct: false }, { text: "Libra", correct: false }] },
    { question: "Qual é a maior cidade do mundo?", answers: [{ text: "Tóquio", correct: true }, { text: "Nova Iorque", correct: false }, { text: "Xangai", correct: false }, { text: "Mumbai", correct: false }] },
    { question: "Qual é o maior país do mundo em área?", answers: [{ text: "Canadá", correct: false }, { text: "Rússia", correct: true }, { text: "China", correct: false }, { text: "Brasil", correct: false }] },
    { question: "Qual é a capital da Austrália?", answers: [{ text: "Sydney", correct: false }, { text: "Canberra", correct: true }, { text: "Melbourne", correct: false }, { text: "Brisbane", correct: false }] },
    { question: "Quem foi o primeiro homem a pisar na lua?", answers: [{ text: "Buzz Aldrin", correct: false }, { text: "Neil Armstrong", correct: true }, { text: "Yuri Gagarin", correct: false }, { text: "John Glenn", correct: false }] },
    { question: "Qual é o nome do famoso detetive criado por Arthur Conan Doyle?", answers: [{ text: "Hercule Poirot", correct: false }, { text: "Sherlock Holmes", correct: true }, { text: "Miss Marple", correct: false }, { text: "Philip Marlowe", correct: false }] },
    { question: "Em que ano começou a Segunda Guerra Mundial?", answers: [{ text: "1939", correct: true }, { text: "1941", correct: false }, { text: "1938", correct: false }, { text: "1945", correct: false }] },
    { question: "Qual é o rio mais longo do mundo?", answers: [{ text: "Nilo", correct: true }, { text: "Amazonas", correct: false }, { text: "Yangtze", correct: false }, { text: "Mississippi", correct: false }] },
    { question: "Quem pintou o teto da Capela Sistina?", answers: [{ text: "Leonardo da Vinci", correct: false }, { text: "Michelangelo", correct: true }, { text: "Raphael", correct: false }, { text: "Donatello", correct: false }] },
    { question: "Qual é a capital da Itália?", answers: [{ text: "Milão", correct: false }, { text: "Roma", correct: true }, { text: "Veneza", correct: false }, { text: "Nápoles", correct: false }] },
    { question: "Quem escreveu 'O Pequeno Príncipe'?", answers: [{ text: "Antoine de Saint-Exupéry", correct: true }, { text: "Victor Hugo", correct: false }, { text: "Jules Verne", correct: false }, { text: "Marcel Proust", correct: false }] },
    { question: "Qual é a fórmula química da água?", answers: [{ text: "H2O", correct: true }, { text: "O2", correct: false }, { text: "CO2", correct: false }, { text: "H2O2", correct: false }] },
    { question: "Qual país é conhecido como a terra do sol nascente?", answers: [{ text: "China", correct: false }, { text: "Japão", correct: true }, { text: "Coreia do Sul", correct: false }, { text: "Tailândia", correct: false }] },
    { question: "Qual é a capital da Alemanha?", answers: [{ text: "Berlim", correct: true }, { text: "Munique", correct: false }, { text: "Frankfurt", correct: false }, { text: "Hamburgo", correct: false }] },
    { question: "Qual é a principal língua falada no Brasil?", answers: [{ text: "Espanhol", correct: false }, { text: "Português", correct: true }, { text: "Francês", correct: false }, { text: "Inglês", correct: false }] },
    { question: "Qual é o símbolo químico do carbono?", answers: [{ text: "C", correct: true }, { text: "Ca", correct: false }, { text: "Co", correct: false }, { text: "Cu", correct: false }] },
    { question: "Qual é a capital da Espanha?", answers: [{ text: "Sevilha", correct: false }, { text: "Madrid", correct: true }, { text: "Barcelona", correct: false }, { text: "Valência", correct: false }] },
    { question: "Qual é a maior floresta tropical do mundo?", answers: [{ text: "Floresta Amazônica", correct: true }, { text: "Floresta do Congo", correct: false }, { text: "Floresta Boreal", correct: false }, { text: "Floresta de Taiga", correct: false }] },
    { question: "Qual é o continente mais frio?", answers: [{ text: "África", correct: false }, { text: "Antártida", correct: true }, { text: "Ásia", correct: false }, { text: "América do Sul", correct: false }] },
    { question: "Qual é a maior cidade da África?", answers: [{ text: "Cairo", correct: true }, { text: "Lagos", correct: false }, { text: "Joanesburgo", correct: false }, { text: "Nairobi", correct: false }] },
    { question: "Qual é o planeta mais próximo do Sol?", answers: [{ text: "Mercúrio", correct: true }, { text: "Vênus", correct: false }, { text: "Terra", correct: false }, { text: "Marte", correct: false }] },
    { question: "Qual é a montanha mais alta do mundo?", answers: [{ text: "K2", correct: false }, { text: "Kangchenjunga", correct: false }, { text: "Everest", correct: true }, { text: "Lhotse", correct: false }] },
    { question: "Qual é o nome da moeda do Japão?", answers: [{ text: "Yen", correct: true }, { text: "Won", correct: false }, { text: "Dólar", correct: false }, { text: "Euro", correct: false }] },
    { question: "Qual é o nome do famoso museu em Paris?", answers: [{ text: "Louvre", correct: true }, { text: "Metropolitan", correct: false }, { text: "British Museum", correct: false }, { text: "Prado", correct: false }] },
    { question: "Qual é o maior deserto do mundo?", answers: [{ text: "Sahara", correct: false }, { text: "Antártida", correct: true }, { text: "Gobi", correct: false }, { text: "Kalahari", correct: false }] },
    { question: "Qual é o nome do famoso cientista que formulou a teoria da relatividade?", answers: [{ text: "Isaac Newton", correct: false }, { text: "Albert Einstein", correct: true }, { text: "Galileu Galilei", correct: false }, { text: "Stephen Hawking", correct: false }] },
    { question: "Qual é a principal religião da Índia?", answers: [{ text: "Cristianismo", correct: false }, { text: "Hinduísmo", correct: true }, { text: "Islamismo", correct: false }, { text: "Budismo", correct: false }] },
    { question: "Qual é a capital da Rússia?", answers: [{ text: "São Petersburgo", correct: false }, { text: "Moscovo", correct: true }, { text: "Kiev", correct: false }, { text: "Minsk", correct: false }] },
    { question: "Qual é o nome do famoso personagem de quadrinhos que é um super-herói com uma capa vermelha e uma letra 'S' no peito?", answers: [{ text: "Batman", correct: false }, { text: "Superman", correct: true }, { text: "Homem-Aranha", correct: false }, { text: "Capitão América", correct: false }] },
    { question: "Qual é o principal alimento da dieta dos esquimós?", answers: [{ text: "Peixe", correct: false }, { text: "Carne de Foca", correct: true }, { text: "Bacalhau", correct: false }, { text: "Pão", correct: false }] },
    { question: "Qual é a principal função do coração?", answers: [{ text: "Filtrar o sangue", correct: false }, { text: "Bombear o sangue", correct: true }, { text: "Produzir sangue", correct: false }, { text: "Armazenar sangue", correct: false }] },
    { question: "Qual é a fórmula da glicose?", answers: [{ text: "C6H12O6", correct: true }, { text: "C12H22O11", correct: false }, { text: "C6H10O5", correct: false }, { text: "C6H14O6", correct: false }] },
    { question: "Quem é conhecido como o pai da psicanálise?", answers: [{ text: "Carl Jung", correct: false }, { text: "Sigmund Freud", correct: true }, { text: "Jean Piaget", correct: false }, { text: "B.F. Skinner", correct: false }] },
    { question: "Qual é o país com a maior população do mundo?", answers: [{ text: "Índia", correct: false }, { text: "Estados Unidos", correct: false }, { text: "China", correct: true }, { text: "Indonésia", correct: false }] },
    { question: "Qual é o sistema de governo do Reino Unido?", answers: [{ text: "República", correct: false }, { text: "Monarquia Constitucional", correct: true }, { text: "Ditadura", correct: false }, { text: "Oligarquia", correct: false }] },
    { question: "Qual é a capital da Argentina?", answers: [{ text: "Buenos Aires", correct: true }, { text: "Montevidéu", correct: false }, { text: "Santiago", correct: false }, { text: "Lima", correct: false }] },
    { question: "Qual é a montanha mais alta da América do Sul?", answers: [{ text: "Aconcágua", correct: true }, { text: "Orelhudo", correct: false }, { text: "Everest", correct: false }, { text: "Fitz Roy", correct: false }] },
    { question: "Qual é a fórmula do gás carbônico?", answers: [{ text: "CO2", correct: true }, { text: "C2O", correct: false }, { text: "C2H2", correct: false }, { text: "C3H8", correct: false }] },
    { question: "Qual é o maior estado do Brasil?", answers: [{ text: "São Paulo", correct: false }, { text: "Amazonas", correct: true }, { text: "Minas Gerais", correct: false }, { text: "Bahia", correct: false }] },
    { question: "Quem foi o primeiro presidente dos Estados Unidos?", answers: [{ text: "Abraham Lincoln", correct: false }, { text: "George Washington", correct: true }, { text: "Thomas Jefferson", correct: false }, { text: "John Adams", correct: false }] },
    { question: "Qual é a capital do Canadá?", answers: [{ text: "Toronto", correct: false }, { text: "Vancouver", correct: false }, { text: "Ottawa", correct: true }, { text: "Montreal", correct: false }] },
    { question: "Qual é o nome da primeira mulher a ganhar um Prêmio Nobel?", answers: [{ text: "Marie Curie", correct: true }, { text: "Rosalind Franklin", correct: false }, { text: "Ada Lovelace", correct: false }, { text: "Emmeline Pankhurst", correct: false }] },
    { question: "Qual é a capital da Nova Zelândia?", answers: [{ text: "Auckland", correct: false }, { text: "Wellington", correct: true }, { text: "Christchurch", correct: false }, { text: "Hamilton", correct: false }] },
    { question: "Qual é o nome do famoso festival de música que ocorre em Woodstock, EUA?", answers: [{ text: "Lollapalooza", correct: false }, { text: "Coachella", correct: false }, { text: "Woodstock", correct: true }, { text: "Glastonbury", correct: false }] },
    { question: "Qual é a montanha mais alta da África?", answers: [{ text: "Kilimanjaro", correct: true }, { text: "Mont Blanc", correct: false }, { text: "Himalaias", correct: false }, { text: "Andes", correct: false }] },
    { question: "Qual é o nome da maior cadeia de montanhas do mundo?", answers: [{ text: "Andes", correct: true }, { text: "Himalaias", correct: false }, { text: "Rochosas", correct: false }, { text: "Alpes", correct: false }] },
    { question: "Qual é o nome do primeiro animal a ser clonado?", answers: [{ text: "Cão", correct: false }, { text: "Ovelha", correct: true }, { text: "Gato", correct: false }, { text: "Vaca", correct: false }] },
    { question: "Qual é a capital da Suécia?", answers: [{ text: "Estocolmo", correct: true }, { text: "Copenhague", correct: false }, { text: "Helsinque", correct: false }, { text: "Oslo", correct: false }] },
    { question: "Qual é a principal fonte de energia do sol?", answers: [{ text: "Fusão Nuclear", correct: true }, { text: "Fissão Nuclear", correct: false }, { text: "Energia Solar", correct: false }, { text: "Eólica", correct: false }] },
    { question: "Qual é o nome do famoso relógio em Londres?", answers: [{ text: "Big Ben", correct: true }, { text: "London Eye", correct: false }, { text: "Tower Bridge", correct: false }, { text: "Buckingham Palace", correct: false }] },
    { question: "Qual é o nome da principal festa do Brasil?", answers: [{ text: "Natal", correct: false }, { text: "Carnaval", correct: true }, { text: "Festa Junina", correct: false }, { text: "Réveillon", correct: false }] },
    { question: "Qual é a capital da Grécia?", answers: [{ text: "Atenas", correct: true }, { text: "Tóquio", correct: false }, { text: "Roma", correct: false }, { text: "Lisboa", correct: false }] },
    { question: "Qual é a principal exportação do Brasil?", answers: [{ text: "Café", correct: true }, { text: "Soja", correct: false }, { text: "Minério de Ferro", correct: false }, { text: "Carne", correct: false }] },
    { question: "Qual é a capital da Irlanda?", answers: [{ text: "Dublin", correct: true }, { text: "Cork", correct: false }, { text: "Belfast", correct: false }, { text: "Galway", correct: false }] },
    { question: "Qual é o país conhecido como a terra dos cangurus?", answers: [{ text: "Nova Zelândia", correct: false }, { text: "Austrália", correct: true }, { text: "Canadá", correct: false }, { text: "África do Sul", correct: false }] },
];

let currentQuestionIndex = 0;

function startGame() {
    currentQuestionIndex = 0;
    showQuestion(allQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    const answerButtonsElement = document.getElementById('answer-buttons');

    answerButtonsElement.querySelectorAll('button').forEach(button => {
        if (button.innerText === answer.text) {
            button.style.backgroundColor = answer.correct ? 'darkgreen' : 'red';
        } else if (button.innerText === allQuestions[currentQuestionIndex].answers.find(a => a.correct).text) {
            button.style.backgroundColor = 'darkgreen';
        }
        button.disabled = true; // Desabilita os botões após a seleção
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < allQuestions.length) {
            showQuestion(allQuestions[currentQuestionIndex]);
        } else {
            alert("Fim do jogo!");
        }
    }, 1000); // Aguarda 1 segundo antes de ir para a próxima pergunta
}

// Inicie o jogo
startGame();
