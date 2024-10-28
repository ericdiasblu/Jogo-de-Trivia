document.addEventListener('DOMContentLoaded', () => {
    
    const container = document.querySelector('.container');
    container.classList.add('zoom-in'); // Adiciona a animação de zoom in ao carregar a página
});

// Importar as funções necessárias do SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getFirestore, doc } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";


// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyARaTW45tTYaD_oOU4pTC5Q3xzoaJEThug",
    authDomain: "triviaworld-78303.firebaseapp.com",
    projectId: "triviaworld-78303",
    storageBucket: "triviaworld-78303.appspot.com",
    messagingSenderId: "837777772940",
    appId: "1:837777772940:web:f2e0c54ff850a8ed3446a9",
    measurementId: "G-CYM802EQT7"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Verifica se o usuário está autenticado
onAuthStateChanged(auth, (user) => {
    console.log("Verificando estado de autenticação...");
    if (user) {
        console.log("Usuário autenticado:", user.uid);
        const userDocRef = doc(db, "users", user.uid);
        
        getDoc(userDocRef)
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    console.log("Dados do usuário:", docSnapshot.data());
                } else {
                    console.log("Documento do usuário não encontrado.");
                }
            })
            .catch((error) => {
                console.error("Erro ao buscar documento do usuário:", error);
            });
    } else {
        console.log("Nenhum usuário autenticado.");
    }
});

const allQuestions = [
    { question: "Em que ano foi fundada a FIFA?", answers: [{ text: "1904", correct: true }, { text: "1910", correct: false }, { text: "1920", correct: false }, { text: "1930", correct: false }] },
    { question: "Qual foi a primeira Copa do Mundo de Futebol realizada?", answers: [{ text: "1930", correct: true }, { text: "1934", correct: false }, { text: "1938", correct: false }, { text: "1950", correct: false }] },
    { question: "Quem é o maior artilheiro da história das Copas do Mundo?", answers: [{ text: "Pelé", correct: false }, { text: "Marta", correct: false }, { text: "Miroslav Klose", correct: true }, { text: "Ronaldo", correct: false }] },
    { question: "Qual país sediou a Copa do Mundo de 1994?", answers: [{ text: "Brasil", correct: false }, { text: "Estados Unidos", correct: true }, { text: "França", correct: false }, { text: "Itália", correct: false }] },
    { question: "Quem ganhou a primeira Copa do Mundo de Futebol?", answers: [{ text: "Uruguai", correct: true }, { text: "Brasil", correct: false }, { text: "Alemanha", correct: false }, { text: "Argentina", correct: false }] },
    { question: "Em que ano foi a primeira edição da UEFA Champions League?", answers: [{ text: "1992", correct: true }, { text: "1994", correct: false }, { text: "1996", correct: false }, { text: "1998", correct: false }] },
    { question: "Qual clube tem mais títulos da UEFA Champions League?", answers: [{ text: "Barcelona", correct: false }, { text: "Real Madrid", correct: true }, { text: "Liverpool", correct: false }, { text: "AC Milan", correct: false }] },
    { question: "Qual seleção é a mais vitoriosa da Copa América?", answers: [{ text: "Brasil", correct: false }, { text: "Argentina", correct: true }, { text: "Uruguai", correct: false }, { text: "Chile", correct: false }] },
    { question: "Quem foi o primeiro jogador a ganhar o prêmio Ballon d'Or?", answers: [{ text: "Alfredo Di Stéfano", correct: false }, { text: "Stanley Matthews", correct: true }, { text: "Lionel Messi", correct: false }, { text: "Cristiano Ronaldo", correct: false }] },
    { question: "Qual foi o primeiro clube a vencer a Copa da UEFA?", answers: [{ text: "Liverpool", correct: false }, { text: "Ipswich Town", correct: true }, { text: "Real Madrid", correct: false }, { text: "Borussia Dortmund", correct: false }] },
    { question: "Qual é a duração de uma partida de futebol profissional?", answers: [{ text: "90 minutos", correct: true }, { text: "80 minutos", correct: false }, { text: "100 minutos", correct: false }, { text: "70 minutos", correct: false }] },
    { question: "O que é uma falta no futebol?", answers: [{ text: "Um passe errado", correct: false }, { text: "Uma infração às regras", correct: true }, { text: "Uma cobrança de escanteio", correct: false }, { text: "Um gol perdido", correct: false }] },
    { question: "Quantos jogadores há em um time de futebol, incluindo o goleiro?", answers: [{ text: "10", correct: false }, { text: "11", correct: true }, { text: "12", correct: false }, { text: "13", correct: false }] },
    { question: "O que é um pênalti?", answers: [{ text: "Uma falta fora da área", correct: false }, { text: "Uma cobrança a partir da marca de 11 metros", correct: true }, { text: "Um escanteio", correct: false }, { text: "Uma falta cometida pelo goleiro", correct: false }] },
    { question: "Qual a diferença entre um cartão amarelo e um cartão vermelho?", answers: [{ text: "Um é para advertência, o outro para expulsão", correct: true }, { text: "Um é para faltas leves, o outro para faltas graves", correct: false }, { text: "Um é dado ao goleiro, o outro aos jogadores de linha", correct: false }, { text: "Um é para jogadores, o outro para técnicos", correct: false }] },
    { question: "O que acontece se um jogador receber dois cartões amarelos na mesma partida?", answers: [{ text: "Ele é substituído", correct: false }, { text: "Ele é expulso", correct: true }, { text: "Nada acontece", correct: false }, { text: "Ele perde um ponto", correct: false }] },
    { question: "O que é um impedimento?", answers: [{ text: "Quando um jogador está em posição irregular no momento do passe", correct: true }, { text: "Quando a bola sai do campo", correct: false }, { text: "Quando um jogador fere as regras", correct: false }, { text: "Quando um gol é anulado", correct: false }] },
    { question: "Como é decidido quem bate o pênalti em uma cobrança de penalidades?", answers: [{ text: "O técnico decide", correct: false }, { text: "Os jogadores escolhem", correct: false }, { text: "Com base na habilidade e experiência", correct: true }, { text: "O goleiro escolhe", correct: false }] },
    { question: "O que é um escanteio?", answers: [{ text: "Um tiro livre", correct: false }, { text: "Uma cobrança após a bola sair pela linha de fundo tocada por um defensor", correct: true }, { text: "Uma falta", correct: false }, { text: "Um pênalti", correct: false }] },
    { question: "O que é um tiro de meta?", answers: [{ text: "Uma cobrança de escanteio", correct: false }, { text: "Uma reposição de bola quando a bola sai pela linha de fundo tocada por um atacante", correct: true }, { text: "Uma falta cometida pelo goleiro", correct: false }, { text: "Um pênalti", correct: false }] },
    { question: "Quem é conhecido como 'O Rei do Futebol'?", answers: [{ text: "Cristiano Ronaldo", correct: false }, { text: "Pelé", correct: true }, { text: "Zico", correct: false }, { text: "Maradona", correct: false }] },
    { question: "Qual jogador é considerado o melhor de todos os tempos por muitos fãs?", answers: [{ text: "Zinedine Zidane", correct: false }, { text: "Lionel Messi", correct: true }, { text: "Ronaldo Fenômeno", correct: false }, { text: "Alfredo Di Stéfano", correct: false }] },
    { question: "Quem é o maior artilheiro da história do Barcelona?", answers: [{ text: "Lionel Messi", correct: true }, { text: "Ronaldinho", correct: false }, { text: "Samuel Eto'o", correct: false }, { text: "Rivaldo", correct: false }] },
    { question: "Qual jogador tem mais gols pela seleção brasileira?", answers: [{ text: "Neymar", correct: false }, { text: "Pele", correct: true }, { text: "Ronaldo", correct: false }, { text: "Romário", correct: false }] },
    { question: "Em que clube Cristiano Ronaldo começou sua carreira profissional?", answers: [{ text: "Real Madrid", correct: false }, { text: "Manchester United", correct: true }, { text: "Sporting Lisboa", correct: false }, { text: "Juventus", correct: false }] },
    { question: "Quem é conhecido como 'Pelé Branco'?", answers: [{ text: "Zico", correct: true }, { text: "Ronaldinho", correct: false }, { text: "Rivaldo", correct: false }, { text: "Neymar", correct: false }] },
    { question: "Quantas Copas do Mundo Zico participou?", answers: [{ text: "3", correct: true }, { text: "2", correct: false }, { text: "4", correct: false }, { text: "5", correct: false }] },
    { question: "Qual jogador argentino é famoso por seu drible e habilidade?", answers: [{ text: "Diego Maradona", correct: true }, { text: "Lionel Messi", correct: false }, { text: "Juan Román Riquelme", correct: false }, { text: "Gonzalo Higuaín", correct: false }] },
    { question: "Quem é o jogador com mais jogos na história da Premier League?", answers: [{ text: "Gareth Barry", correct: true }, { text: "Ryan Giggs", correct: false }, { text: "Frank Lampard", correct: false }, { text: "Steven Gerrard", correct: false }] },
    { question: "Qual seleção venceu a Copa do Mundo de 2006?", answers: [{ text: "Brasil", correct: false }, { text: "Alemanha", correct: false }, { text: "Itália", correct: true }, { text: "França", correct: false }] },
    { question: "Quem foi o artilheiro da Copa do Mundo de 2014?", answers: [{ text: "James Rodríguez", correct: true }, { text: "Thomas Müller", correct: false }, { text: "Lionel Messi", correct: false }, { text: "Cristiano Ronaldo", correct: false }] },
    { question: "Qual jogador é conhecido como 'O Fenômeno'?", answers: [{ text: "Ronaldo", correct: true }, { text: "Romário", correct: false }, { text: "Pelé", correct: false }, { text: "Neymar", correct: false }] },
    { question: "Qual clube é conhecido como 'Os Gunners'?", answers: [{ text: "Chelsea", correct: false }, { text: "Arsenal", correct: true }, { text: "Tottenham", correct: false }, { text: "Manchester City", correct: false }] },
    { question: "Qual é o maior torneio de seleções da UEFA?", answers: [{ text: "Copa do Mundo", correct: false }, { text: "Eurocopa", correct: true }, { text: "Liga das Nações", correct: false }, { text: "Copa América", correct: false }] },
    { question: "Quem foi o primeiro time brasileiro a ganhar a Copa do Mundo?", answers: [{ text: "Brasil", correct: false }, { text: "Uruguai", correct: false }, { text: "Argentina", correct: false }, { text: "Uruguai", correct: true }] },
    { question: "Qual seleção ganhou a Copa do Mundo em 2018?", answers: [{ text: "França", correct: true }, { text: "Croácia", correct: false }, { text: "Brasil", correct: false }, { text: "Alemanha", correct: false }] },
    { question: "Quantos gols Pelé marcou na sua carreira?", answers: [{ text: "1281", correct: true }, { text: "1000", correct: false }, { text: "1200", correct: false }, { text: "900", correct: false }] },
    { question: "Quem é o jogador com mais títulos da UEFA Champions League?", answers: [{ text: "Cristiano Ronaldo", correct: true }, { text: "Lionel Messi", correct: false }, { text: "Raúl", correct: false }, { text: "Puyol", correct: false }] },
    { question: "Qual é a cor do uniforme da seleção da Argentina?", answers: [{ text: "Azul e Branco", correct: true }, { text: "Verde e Branco", correct: false }, { text: "Amarelo e Azul", correct: false }, { text: "Vermelho e Branco", correct: false }] },
    { question: "Quem é conhecido como 'El Pibe de Oro'?", answers: [{ text: "Lionel Messi", correct: false }, { text: "Diego Maradona", correct: true }, { text: "Ronaldo", correct: false }, { text: "Garrincha", correct: false }] },
    { question: "Quantos títulos da UEFA Champions League o Milan possui?", answers: [{ text: "7", correct: true }, { text: "6", correct: false }, { text: "5", correct: false }, { text: "8", correct: false }] },
    { question: "Qual é o nome do torneio de clubes mais importante da América do Sul?", answers: [{ text: "Copa do Mundo", correct: false }, { text: "Copa América", correct: false }, { text: "Copa Libertadores", correct: true }, { text: "Copa Sul-Americana", correct: false }] },
    { question: "Quantas Copas do Mundo a seleção brasileira venceu?", answers: [{ text: "5", correct: true }, { text: "4", correct: false }, { text: "3", correct: false }, { text: "6", correct: false }] },
    { question: "Quem foi o primeiro jogador a se tornar ídolo do Santos Futebol Clube?", answers: [{ text: "Pelé", correct: true }, { text: "Neymar", correct: false }, { text: "Zico", correct: false }, { text: "Robinho", correct: false }] },
    { question: "Qual é a maior goleada na história das Copas do Mundo?", answers: [{ text: "Brasil 1-0 Suécia", correct: false }, { text: "Hungria 10-1 El Salvador", correct: true }, { text: "Alemanha 7-1 Brasil", correct: false }, { text: "Argentina 6-0 Sérvia", correct: false }] },
    { question: "Qual é o nome do maior estádio da Europa?", answers: [{ text: "Camp Nou", correct: false }, { text: "Wembley", correct: false }, { text: "San Siro", correct: false }, { text: "Camp Nou", correct: true }] },
    { question: "Qual seleção tem a maior rivalidade no futebol mundial?", answers: [{ text: "Brasil e Argentina", correct: true }, { text: "Alemanha e França", correct: false }, { text: "Inglaterra e Alemanha", correct: false }, { text: "Uruguai e Argentina", correct: false }] },
    { question: "Qual é a principal competição de clubes da UEFA?", answers: [{ text: "Copa da UEFA", correct: false }, { text: "UEFA Europa League", correct: false }, { text: "UEFA Champions League", correct: true }, { text: "Supercopa da UEFA", correct: false }] },
    { question: "Quem é o goleiro com mais títulos da Champions League?", answers: [{ text: "Iker Casillas", correct: true }, { text: "Gianluigi Buffon", correct: false }, { text: "Manuel Neuer", correct: false }, { text: "Peter Schmeichel", correct: false }] },
    { question: "Qual é o nome do torneio que reúne seleções de países da América do Sul?", answers: [{ text: "Copa América", correct: true }, { text: "Copa do Mundo", correct: false }, { text: "Copa Libertadores", correct: false }, { text: "Copa do Rei", correct: false }] },
    { question: "Quantas vezes o Brasil sediou a Copa do Mundo?", answers: [{ text: "5", correct: false }, { text: "4", correct: true }, { text: "3", correct: false }, { text: "6", correct: false }] },
    { question: "Qual é a principal competição de seleções da UEFA?", answers: [{ text: "Eurocopa", correct: true }, { text: "Liga das Nações", correct: false }, { text: "Copa do Mundo", correct: false }, { text: "Copa América", correct: false }] },
    { question: "Qual jogador foi o destaque da seleção brasileira na Copa do Mundo de 2002?", answers: [{ text: "Ronaldo", correct: true }, { text: "Ronaldinho", correct: false }, { text: "Rivaldo", correct: false }, { text: "Kaká", correct: false }] },
    { question: "Qual seleção venceu a Copa do Mundo de 1970?", answers: [{ text: "Brasil", correct: true }, { text: "Uruguai", correct: false }, { text: "Alemanha", correct: false }, { text: "Argentina", correct: false }] },
    { question: "Quem foi o técnico da seleção brasileira na Copa do Mundo de 1994?", answers: [{ text: "Carlos Alberto Parreira", correct: true }, { text: "Tite", correct: false }, { text: "Dunga", correct: false }, { text: "Telê Santana", correct: false }] },
    { question: "Qual é o nome do torneio que reúne os melhores clubes da Europa?", answers: [{ text: "Copa da UEFA", correct: false }, { text: "Liga dos Campeões", correct: true }, { text: "Copa Libertadores", correct: false }, { text: "Supercopa da UEFA", correct: false }] },
    { question: "Qual jogador é conhecido como 'A Bomba'?", answers: [{ text: "Marta", correct: false }, { text: "Ronaldo", correct: false }, { text: "Edmundo", correct: true }, { text: "Romário", correct: false }] },
    { question: "Quantas seleções participaram da Copa do Mundo de 2018?", answers: [{ text: "32", correct: true }, { text: "24", correct: false }, { text: "16", correct: false }, { text: "48", correct: false }] },
    { question: "Qual é o nome do time mais vitorioso da Copa do Brasil?", answers: [{ text: "Grêmio", correct: false }, { text: "Palmeiras", correct: true }, { text: "Santos", correct: false }, { text: "Flamengo", correct: false }] },
    { question: "Qual é o nome do maior goleiro da história do futebol?", answers: [{ text: "Lev Yashin", correct: true }, { text: "Gianluigi Buffon", correct: false }, { text: "Iker Casillas", correct: false }, { text: "Manuel Neuer", correct: false }] },
    { question: "Qual seleção ganhou a Copa do Mundo em 1966?", answers: [{ text: "Inglaterra", correct: true }, { text: "Brasil", correct: false }, { text: "Alemanha", correct: false }, { text: "Argentina", correct: false }] },
    { question: "Quem foi o técnico da seleção brasileira na Copa do Mundo de 2006?", answers: [{ text: "Dunga", correct: true }, { text: "Carlos Alberto Parreira", correct: false }, { text: "Tite", correct: false }, { text: "Felipão", correct: false }] },
    { question: "Qual é a cor do uniforme da seleção da Alemanha?", answers: [{ text: "Branco e Preto", correct: true }, { text: "Azul e Branco", correct: false }, { text: "Verde e Branco", correct: false }, { text: "Amarelo e Preto", correct: false }] },
    { question: "Qual é o nome do maior artilheiro da história das Copas do Mundo?", answers: [{ text: "Miroslav Klose", correct: true }, { text: "Ronaldo", correct: false }, { text: "Pelé", correct: false }, { text: "Gerd Müller", correct: false }] },
    { question: "Quem foi o técnico da seleção brasileira na Copa do Mundo de 1970?", answers: [{ text: "Mário Zagallo", correct: true }, { text: "Carlos Alberto Parreira", correct: false }, { text: "Telê Santana", correct: false }, { text: "Tite", correct: false }] },
    { question: "Qual é o nome do torneio que reúne os melhores clubes da América do Sul?", answers: [{ text: "Copa do Brasil", correct: false }, { text: "Copa Libertadores", correct: true }, { text: "Copa América", correct: false }, { text: "Copa do Rei", correct: false }] },
    { question: "Quem foi o primeiro jogador a marcar um gol em Copas do Mundo?", answers: [{ text: "Franz Beckenbauer", correct: false }, { text: "Pele", correct: true }, { text: "Ronaldo", correct: false }, { text: "Zico", correct: false }] },
    { question: "Qual seleção venceu a Copa do Mundo de 1994?", answers: [{ text: "Brasil", correct: true }, { text: "Argentina", correct: false }, { text: "Alemanha", correct: false }, { text: "Itália", correct: false }] },
    { question: "Qual é o nome do maior artilheiro da história do futebol brasileiro?", answers: [{ text: "Pelé", correct: true }, { text: "Ronaldo", correct: false }, { text: "Romário", correct: false }, { text: "Zico", correct: false }] },
    { question: "Quem foi o primeiro jogador brasileiro a jogar na Europa?", answers: [{ text: "Pelé", correct: false }, { text: "Leônidas", correct: true }, { text: "Ronaldo", correct: false }, { text: "Zico", correct: false }] },
    { question: "Qual é o nome do maior torneio de clubes do Brasil?", answers: [{ text: "Copa do Brasil", correct: false }, { text: "Campeonato Brasileiro", correct: true }, { text: "Copa Libertadores", correct: false }, { text: "Campeonato Carioca", correct: false }] },
    { question: "Quem é o goleiro que mais atuou na seleção brasileira?", answers: [{ text: "Taffarel", correct: false }, { text: "Cássio", correct: false }, { text: "Júlio César", correct: true }, { text: "Dida", correct: false }] },
    { question: "Qual é o maior torneio de seleções do mundo?", answers: [{ text: "Copa do Mundo", correct: true }, { text: "Eurocopa", correct: false }, { text: "Copa América", correct: false }, { text: "Liga das Nações", correct: false }] },
    { question: "Quem é o jogador com mais partidas pela seleção brasileira?", answers: [{ text: "Cafu", correct: true }, { text: "Roberto Carlos", correct: false }, { text: "Dunga", correct: false }, { text: "Neymar", correct: false }] },
    { question: "Quem foi o único jogador a ganhar a Copa do Mundo como jogador e técnico?", answers: [{ text: "Mário Zagallo", correct: true }, { text: "Telê Santana", correct: false }, { text: "Carlos Alberto Parreira", correct: false }, { text: "Dunga", correct: false }] },
    { question: "Qual é o nome do torneio que reúne clubes de futebol de todo o mundo?", answers: [{ text: "Copa do Mundo", correct: false }, { text: "Copa das Confederações", correct: false }, { text: "Copa do Mundo de Clubes", correct: true }, { text: "Supercopa da UEFA", correct: false }] },
    { question: "Qual é o nome do maior artilheiro da história do Campeonato Brasileiro?", answers: [{ text: "Roberto Dinamite", correct: true }, { text: "Romário", correct: false }, { text: "Zico", correct: false }, { text: "Pelé", correct: false }] },
    { question: "Qual é o nome do time que mais vezes ganhou o Campeonato Brasileiro?", answers: [{ text: "Flamengo", correct: true }, { text: "Palmeiras", correct: false }, { text: "São Paulo", correct: false }, { text: "Corinthians", correct: false }] },
    { question: "Qual é o nome do torneio que reúne os melhores times da Europa?", answers: [{ text: "Copa da UEFA", correct: false }, { text: "Liga dos Campeões", correct: true }, { text: "Supercopa da UEFA", correct: false }, { text: "Copa Libertadores", correct: false }] },
    { question: "Quem foi o primeiro jogador brasileiro a ganhar a Bola de Ouro?", answers: [{ text: "Ronaldo", correct: false }, { text: "Pelé", correct: true }, { text: "Zico", correct: false }, { text: "Romário", correct: false }] },
    { question: "Qual é o nome do jogador com mais gols na história da seleção brasileira?", answers: [{ text: "Ronaldo", correct: false }, { text: "Pelé", correct: true }, { text: "Romário", correct: false }, { text: "Neymar", correct: false }] },
    { question: "Quem foi o primeiro jogador a ganhar o prêmio FIFA World Player?", answers: [{ text: "Zinedine Zidane", correct: true }, { text: "Ronaldo", correct: false }, { text: "Lionel Messi", correct: false }, { text: "Cristiano Ronaldo", correct: false }] },
    { question: "Qual é o nome do maior artilheiro da história da UEFA Champions League?", answers: [{ text: "Cristiano Ronaldo", correct: true }, { text: "Lionel Messi", correct: false }, { text: "Raúl", correct: false }, { text: "Alfredo Di Stéfano", correct: false }] },
    { question: "Quem é o único jogador que ganhou a Copa do Mundo em três edições?", answers: [{ text: "Pelé", correct: true }, { text: "Zico", correct: false }, { text: "Ronaldo", correct: false }, { text: "Mário Zagallo", correct: false }] },
    { question: "Qual é o nome do maior jogador da história do Barcelona?", answers: [{ text: "Lionel Messi", correct: true }, { text: "Xavi", correct: false }, { text: "Andrés Iniesta", correct: false }, { text: "Ronaldinho", correct: false }] },
    { question: "Quem foi o artilheiro da Copa do Mundo de 1998?", answers: [{ text: "Ronaldo", correct: true }, { text: "Zidane", correct: false }, { text: "Rivaldo", correct: false }, { text: "Thierry Henry", correct: false }] },
    { question: "Qual é o nome do time que mais vezes ganhou a Copa do Mundo?", answers: [{ text: "Brasil", correct: true }, { text: "Alemanha", correct: false }, { text: "Itália", correct: false }, { text: "Argentina", correct: false }] },
    { question: "Quem foi o técnico da seleção brasileira na Copa do Mundo de 1982?", answers: [{ text: "Telê Santana", correct: true }, { text: "Carlos Alberto Parreira", correct: false }, { text: "Dunga", correct: false }, { text: "Tite", correct: false }] },
    { question: "Qual é o nome do jogador que mais venceu a Liga dos Campeões?", answers: [{ text: "Cristiano Ronaldo", correct: true }, { text: "Lionel Messi", correct: false }, { text: "Raúl", correct: false }, { text: "Franz Beckenbauer", correct: false }] },
    { question: "Qual é o nome do campeonato de clubes mais importante do Brasil?", answers: [{ text: "Copa do Brasil", correct: false }, { text: "Campeonato Brasileiro", correct: true }, { text: "Copa Libertadores", correct: false }, { text: "Campeonato Carioca", correct: false }] },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

function selectRandomQuestions() {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    selectedQuestions = shuffled.slice(0, 10);
}

// Função para embaralhar as respostas de cada pergunta
function shuffleAnswers(questions) {
    questions.forEach(question => {
        question.answers.sort(() => Math.random() - 0.5);
    });
}

function startGame() {
    currentQuestionIndex = 0; 
    selectRandomQuestions();
    shuffleAnswers(selectedQuestions); // Embaralha as respostas das perguntas selecionadas
    score = 0;
    document.getElementById('score-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.querySelector('hr').style.display = 'block'; // Mostra a linha
    document.getElementById('questionIndex').style.display = 'block'; // Mostra o índice da pergunta
    showQuestion(selectedQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    questionElement.innerText = question.question;
    answersElement.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer');
        button.addEventListener('click', () => selectAnswer(answer));
        answersElement.appendChild(button);
    });

    const questionIndexElement = document.getElementById("questionIndex");
    questionIndexElement.innerText = `${currentQuestionIndex + 1}`;
}

function selectAnswer(answer) {
    const correctColor = '#4CAF50'; // Verde escuro
    const wrongColor = '#F44336'; // Vermelho

    if (answer.correct) {
        score++;
    } else {
        highlightIncorrectAnswers();
    }

    const answers = document.querySelectorAll('.answer');
    answers.forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text) {
            button.style.backgroundColor = answer.correct ? correctColor : wrongColor;
        } else if (button.innerText === allQuestions[currentQuestionIndex].answers.find(a => a.correct).text) {
            button.style.backgroundColor = correctColor;
        }
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion(selectedQuestions[currentQuestionIndex]);
        } else {
            showScore();
        }
    }, 1000);
}

function highlightIncorrectAnswers() {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(button => {
        if (!allQuestions[currentQuestionIndex].answers.find(a => a.text === button.innerText).correct) {
            button.style.backgroundColor = '#F44336'; // Vermelho
        }
    });
}


function showScore() {
    document.getElementById('quiz-container').style.display = 'none';

    document.querySelector('hr').style.display = 'none'; // Oculta a linha
    document.getElementById('questionIndex').style.display = 'none'; // Oculta o índice da pergunta
    
    const apelido = getApelido(score);
    const scoreElement = document.getElementById('score');
    const apelidoElement = document.getElementById('apelido');

    scoreElement.innerText = `Você acertou ${score} de ${selectedQuestions.length} perguntas!`;
    apelidoElement.innerText = `${apelido}`;

    // Chama a função para atualizar pontos no Firestore
    atualizarPontos(score);

    document.getElementById('score-container').style.display = 'block';
}


function getApelido(acertos) {
    if (acertos === 10) {
        return "Gênio";
    // adiciona 3 pontos
    } else if (acertos >= 8) {
        return "Expert";
        // adiciona 2 pontos
    } else if (acertos >= 6) {
        return "Sábio";
    // adiciona 1 pontos
    } else if (acertos >= 4) {
        return "Estudioso";
    //nenhum ponto
    } else if (acertos >= 2) {
        return "Curioso";
            //nenhum ponto
    } else if (acertos === 1) {
        return "Iniciante";
            //nenhum ponto
    } else {
        return "Desafiante";
            //nenhum ponto

    }
}
// Função para atualizar pontos no Firestore
function mostrarAnimacaoPontos(pontosGanhos) {
    const animacao = document.createElement('div');
    animacao.className = 'point-animation';
    animacao.innerText = `+${pontosGanhos}`;
    document.body.appendChild(animacao);

    // Posiciona a animação no centro da tela
    animacao.style.left = '50%';
    animacao.style.top = '40%';
    animacao.style.transform = 'translate(-50%, -50%) scale(1)'; // Centraliza e ajusta escala
    requestAnimationFrame(() => {
        animacao.style.transform = 'translate(-50%, -50%) scale(1.5)'; // Aumenta a escala
        animacao.style.opacity = '0'; // Fade out
    });

    // Remove a animação após 1 segundo
    setTimeout(() => {
        document.body.removeChild(animacao);
    }, 1000);
}

// Função para atualizar pontos no Firestore
function atualizarPontos(acertos) {
    const user = auth.currentUser;
    if (user) {
        const userDocRef = doc(db, "users", user.uid);
        getDoc(userDocRef)
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    let pontos = 0;
                    if (acertos === 10) pontos = 3;
                    else if (acertos === 9) pontos = 2;
                    else if (acertos === 8) pontos = 1;

                    const currentPoints = docSnapshot.data().pontos || 0; // Pontos atuais
                    updateDoc(userDocRef, {
                        pontos: currentPoints + pontos // Atualiza com novos pontos
                    })
                    .then(() => {
                        console.log(`Ponto adicionado com sucesso! Total de pontos: ${currentPoints + pontos}`);
                        // Mostra animação ao ganhar pontos
                        if (acertos >= 8) {
                            mostrarAnimacaoPontos(pontos);
                        }
                    })
                    .catch((error) => {
                        console.error("Erro ao atualizar os pontos:", error);
                    });
                } else {
                    console.log("Documento do usuário não encontrado.");
                }
            })
            .catch((error) => {
                console.error("Erro ao buscar documento do usuário:", error);
            });
    } else {
        console.log("Nenhum usuário autenticado.");
    }
}
// Função para reiniciar o jogo
document.getElementById('restart-button').addEventListener('click', startGame);

// Inicia o jogo
startGame();