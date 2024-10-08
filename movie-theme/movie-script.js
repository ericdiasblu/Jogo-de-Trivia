document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    container.classList.add('zoom-in'); // Adiciona a animação de zoom in ao carregar a página
});

const allQuestions = [
    { question: "Qual filme ganhou o Oscar de Melhor Filme em 1994?", answers: [{ text: "O Rei Leão", correct: false }, { text: "Forrest Gump", correct: true }, { text: "Braveheart", correct: false }, { text: "Pulp Fiction", correct: false }] },
    { question: "Quem dirigiu o filme 'Tubarão' de 1975?", answers: [{ text: "George Lucas", correct: false }, { text: "Francis Ford Coppola", correct: false }, { text: "Steven Spielberg", correct: true }, { text: "Martin Scorsese", correct: false }] },
    { question: "Qual é o nome do hobbit interpretado por Elijah Wood em 'O Senhor dos Anéis'?", answers: [{ text: "Pippin", correct: false }, { text: "Sam", correct: false }, { text: "Frodo", correct: true }, { text: "Merry", correct: false }] },
    { question: "Em que ano foi lançado o primeiro filme de 'Harry Potter'?", answers: [{ text: "1999", correct: false }, { text: "2002", correct: false }, { text: "2000", correct: false }, { text: "2001", correct: true }] },
    { question: "Qual ator interpretou o Coringa em 'O Cavaleiro das Trevas'?", answers: [{ text: "Jack Nicholson", correct: false }, { text: "Heath Ledger", correct: true }, { text: "Joaquin Phoenix", correct: false }, { text: "Jared Leto", correct: false }] },
    { question: "Quem interpretou o papel principal em 'De Volta para o Futuro'?", answers: [{ text: "Christopher Lloyd", correct: false }, { text: "Michael J. Fox", correct: true }, { text: "Matthew Broderick", correct: false }, { text: "Tom Hanks", correct: false }] },
    { question: "Em qual planeta se passa a maior parte do filme 'Avatar'?", answers: [{ text: "Naboo", correct: false }, { text: "Endor", correct: false }, { text: "Pandora", correct: true }, { text: "Tatooine", correct: false }] },
    { question: "Qual filme de 2019 ganhou o Oscar de Melhor Filme?", answers: [{ text: "Coringa", correct: false }, { text: "1917", correct: false }, { text: "Parasita", correct: true }, { text: "Era uma Vez em Hollywood", correct: false }] },
    { question: "Quem interpretou Jack Dawson em 'Titanic'?", answers: [{ text: "Brad Pitt", correct: false }, { text: "Leonardo DiCaprio", correct: true }, { text: "Matt Damon", correct: false }, { text: "Johnny Depp", correct: false }] },
    { question: "Qual o nome do primeiro filme da franquia 'Indiana Jones'?", answers: [{ text: "Indiana Jones e o Templo da Perdição", correct: false }, { text: "Os Caçadores da Arca Perdida", correct: true }, { text: "Indiana Jones e a Última Cruzada", correct: false }, { text: "Indiana Jones e o Reino da Caveira de Cristal", correct: false }] },
    { question: "Qual filme é conhecido pela frase 'Eu vejo gente morta'?", answers: [{ text: "Os Outros", correct: false }, { text: "O Sexto Sentido", correct: true }, { text: "Psicose", correct: false }, { text: "A Profecia", correct: false }] },
    { question: "Em que ano foi lançado o filme original de 'Star Wars'?", answers: [{ text: "1983", correct: false }, { text: "1980", correct: false }, { text: "1975", correct: false }, { text: "1977", correct: true }] },
    { question: "Quem dirigiu 'O Iluminado'?", answers: [{ text: "Roman Polanski", correct: false }, { text: "Alfred Hitchcock", correct: false }, { text: "Stanley Kubrick", correct: true }, { text: "David Lynch", correct: false }] },
    { question: "Qual o nome da inteligência artificial no filme '2001: Uma Odisseia no Espaço'?", answers: [{ text: "TARS", correct: false }, { text: "HAL 9000", correct: true }, { text: "Samantha", correct: false }, { text: "Skynet", correct: false }] },
    { question: "Qual filme tem a famosa frase 'Até tu, Brutus?'?", answers: [{ text: "Cleópatra", correct: false }, { text: "Ben-Hur", correct: false }, { text: "Júlio César", correct: true }, { text: "Gladiador", correct: false }] },
    { question: "Quem interpretou Forrest Gump no filme de mesmo nome?", answers: [{ text: "Kevin Costner", correct: false }, { text: "Robin Williams", correct: false }, { text: "Tom Hanks", correct: true }, { text: "Mel Gibson", correct: false }] },
    { question: "Qual filme foi o primeiro a ganhar o Oscar de Melhor Animação?", answers: [{ text: "Procurando Nemo", correct: false }, { text: "Shrek", correct: true }, { text: "Monstros S.A.", correct: false }, { text: "A Bela e a Fera", correct: false }] },
    { question: "Qual filme popularizou a frase 'I'll be back'?", answers: [{ text: "O Exterminador do Futuro", correct: true }, { text: "Duro de Matar", correct: false }, { text: "Robocop", correct: false }, { text: "Rambo", correct: false }] },
    { question: "Quem dirigiu 'A Origem'?", answers: [{ text: "Christopher Nolan", correct: true }, { text: "Ridley Scott", correct: false }, { text: "Quentin Tarantino", correct: false }, { text: "Steven Spielberg", correct: false }] },
    { question: "Em qual filme de Tarantino a palavra 'nigger' é usada mais de 100 vezes?", answers: [{ text: "Cães de Aluguel", correct: false }, { text: "Django Livre", correct: true }, { text: "Pulp Fiction", correct: false }, { text: "Kill Bill", correct: false }] },
    { question: "Qual é o nome do robô dourado em 'Star Wars'?", answers: [{ text: "IG-88", correct: false }, { text: "C-3PO", correct: true }, { text: "R2-D2", correct: false }, { text: "BB-8", correct: false }] },
    { question: "Em qual filme vemos a frase 'Hakuna Matata'?", answers: [{ text: "Madagascar", correct: false }, { text: "O Rei Leão", correct: true }, { text: "Mogli", correct: false }, { text: "Tarzan", correct: false }] },
    { question: "Qual filme tem a famosa frase 'Here's Johnny!'?", answers: [{ text: "O Iluminado", correct: true }, { text: "Psicose", correct: false }, { text: "O Bebê de Rosemary", correct: false }, { text: "O Exorcista", correct: false }] },
    { question: "Qual filme popularizou a frase 'Você não pode lidar com a verdade!'?", answers: [{ text: "Clube da Luta", correct: false }, { text: "Questão de Honra", correct: true }, { text: "O Poderoso Chefão", correct: false }, { text: "Os Bons Companheiros", correct: false }] },
    { question: "Qual é o nome verdadeiro de 'O Coisa' nos filmes do Quarteto Fantástico?", answers: [{ text: "Victor Von Doom", correct: false }, { text: "Johnny Storm", correct: false }, { text: "Ben Grimm", correct: true }, { text: "Reed Richards", correct: false }] },
    { question: "Quem interpretou Neo em 'Matrix'?", answers: [{ text: "Keanu Reeves", correct: true }, { text: "Brad Pitt", correct: false }, { text: "Laurence Fishburne", correct: false }, { text: "Tom Cruise", correct: false }] },
    { question: "Qual filme de 1999 tem o famoso plot twist de um homem morto o tempo todo?", answers: [{ text: "Clube da Luta", correct: false }, { text: "O Sexto Sentido", correct: true }, { text: "Donnie Darko", correct: false }, { text: "Matrix", correct: false }] },
    { question: "Qual filme é baseado no livro de Stephen King 'O Iluminado'?", answers: [{ text: "O Iluminado", correct: true }, { text: "Carrie, a Estranha", correct: false }, { text: "A Espera de um Milagre", correct: false }, { text: "Christine", correct: false }] },
    { question: "Qual o nome da nave em 'Alien, o Oitavo Passageiro'?", answers: [{ text: "Nostromo", correct: true }, { text: "Enterprise", correct: false }, { text: "Discovery", correct: false }, { text: "Serenity", correct: false }] },
    { question: "Qual é o verdadeiro nome do herói de 'Homem de Ferro'?", answers: [{ text: "Tony Stark", correct: true }, { text: "Steve Rogers", correct: false }, { text: "Bruce Wayne", correct: false }, { text: "Clark Kent", correct: false }] },
    { question: "Qual ator interpreta John Wick na franquia de filmes?", answers: [{ text: "Keanu Reeves", correct: true }, { text: "Tom Cruise", correct: false }, { text: "Jason Statham", correct: false }, { text: "Hugh Jackman", correct: false }] },
    { question: "Quem dirigiu 'Titanic'?", answers: [{ text: "James Cameron", correct: true }, { text: "Steven Spielberg", correct: false }, { text: "Martin Scorsese", correct: false }, { text: "Ridley Scott", correct: false }] },
    { question: "Qual filme de 1984 é estrelado por um exterminador cyborg do futuro?", answers: [{ text: "O Exterminador do Futuro", correct: true }, { text: "Robocop", correct: false }, { text: "Blade Runner", correct: false }, { text: "Mad Max", correct: false }] },
    { question: "Quem interpretou o vilão Coringa em 'O Cavaleiro das Trevas'?", answers: [{ text: "Heath Ledger", correct: true }, { text: "Joaquin Phoenix", correct: false }, { text: "Jack Nicholson", correct: false }, { text: "Jared Leto", correct: false }] },
    { question: "Em qual filme da Pixar encontramos o robô chamado Wall-E?", answers: [{ text: "Wall-E", correct: true }, { text: "Carros", correct: false }, { text: "Toy Story", correct: false }, { text: "Procurando Nemo", correct: false }] },
    { question: "Qual é o nome completo de Indiana Jones?", answers: [{ text: "Dr. Henry Walton Jones Jr.", correct: true }, { text: "Dr. Indiana Smith", correct: false }, { text: "Dr. Marcus Brody", correct: false }, { text: "Dr. Jack Ryan", correct: false }] },
    { question: "Quem dublou o personagem Buzz Lightyear no filme 'Toy Story'?", answers: [{ text: "Tim Allen", correct: true }, { text: "Tom Hanks", correct: false }, { text: "Billy Crystal", correct: false }, { text: "Robin Williams", correct: false }] },
    { question: "Qual filme popularizou a frase 'Que a Força esteja com você'?", answers: [{ text: "Star Wars", correct: true }, { text: "Star Trek", correct: false }, { text: "Matrix", correct: false }, { text: "Guardiões da Galáxia", correct: false }] },
    { question: "Quem é o vilão principal em 'Os Vingadores: Guerra Infinita'?", answers: [{ text: "Thanos", correct: true }, { text: "Loki", correct: false }, { text: "Ultron", correct: false }, { text: "Caveira Vermelha", correct: false }] },
    { question: "Qual o nome da rainha em 'Frozen'?", answers: [{ text: "Elsa", correct: true }, { text: "Anna", correct: false }, { text: "Ariel", correct: false }, { text: "Jasmine", correct: false }] },
    { question: "Qual filme é sobre um homem que repete o mesmo dia várias vezes?", answers: [{ text: "Feitiço do Tempo", correct: true }, { text: "Click", correct: false }, { text: "Efeito Borboleta", correct: false }, { text: "Deja Vu", correct: false }] },
    { question: "Qual filme é baseado no livro 'O Senhor das Moscas'?", answers: [{ text: "O Senhor das Moscas", correct: true }, { text: "A Ilha", correct: false }, { text: "Coração das Trevas", correct: false }, { text: "O Nevoeiro", correct: false }] },
    { question: "Qual o nome do personagem principal de 'V de Vingança'?", answers: [{ text: "V", correct: true }, { text: "Evey", correct: false }, { text: "Gordon", correct: false }, { text: "Creedy", correct: false }] },
    { question: "Em que filme podemos ouvir a música 'My Heart Will Go On'?", answers: [{ text: "Titanic", correct: true }, { text: "Ghost", correct: false }, { text: "O Guarda-Costas", correct: false }, { text: "Dirty Dancing", correct: false }] },
    { question: "Qual filme de terror de 1973 é conhecido por uma garota possuída?", answers: [{ text: "O Exorcista", correct: true }, { text: "A Profecia", correct: false }, { text: "Carrie, a Estranha", correct: false }, { text: "Poltergeist", correct: false }] },
    { question: "Qual ator é conhecido por interpretar 'Jack Sparrow' em 'Piratas do Caribe'?", answers: [{ text: "Johnny Depp", correct: true }, { text: "Orlando Bloom", correct: false }, { text: "Geoffrey Rush", correct: false }, { text: "Keira Knightley", correct: false }] },
    { question: "Quem dirigiu o filme 'O Poderoso Chefão'?", answers: [{ text: "Francis Ford Coppola", correct: true }, { text: "Martin Scorsese", correct: false }, { text: "Alfred Hitchcock", correct: false }, { text: "Stanley Kubrick", correct: false }] },
    { question: "Qual é o nome do protagonista de 'Gladiador'?", answers: [{ text: "Maximus", correct: true }, { text: "Commodus", correct: false }, { text: "Spartacus", correct: false }, { text: "Aurelius", correct: false }] },
    { question: "Em qual filme de 1994 um prisioneiro escapa pelo esgoto?", answers: [{ text: "Um Sonho de Liberdade", correct: true }, { text: "Fuga de Alcatraz", correct: false }, { text: "A Espera de um Milagre", correct: false }, { text: "O Conde de Monte Cristo", correct: false }] },
    { question: "Quem dublou a voz de Dory em 'Procurando Nemo'?", answers: [{ text: "Ellen DeGeneres", correct: true }, { text: "Angelina Jolie", correct: false }, { text: "Whoopi Goldberg", correct: false }, { text: "Cameron Diaz", correct: false }] },
    { question: "Qual filme é estrelado por uma princesa que é salva por um ogro?", answers: [{ text: "Shrek", correct: true }, { text: "Enrolados", correct: false }, { text: "A Bela e a Fera", correct: false }, { text: "Mulan", correct: false }] },
    { question: "Qual filme se passa em uma ilha cheia de dinossauros?", answers: [{ text: "Jurassic Park", correct: true }, { text: "King Kong", correct: false }, { text: "O Parque dos Dinossauros", correct: false }, { text: "Mundo Perdido", correct: false }] },
    { question: "Quem interpreta o Coringa em 'Coringa' de 2019?", answers: [{ text: "Joaquin Phoenix", correct: true }, { text: "Heath Ledger", correct: false }, { text: "Jack Nicholson", correct: false }, { text: "Jared Leto", correct: false }] },
    { question: "Qual o nome do detetive interpretado por Robert Downey Jr. em dois filmes?", answers: [{ text: "Sherlock Holmes", correct: true }, { text: "John Watson", correct: false }, { text: "Hercule Poirot", correct: false }, { text: "Miss Marple", correct: false }] },
    { question: "Qual o nome do navio em 'Piratas do Caribe'?", answers: [{ text: "Pérola Negra", correct: true }, { text: "HMS Interceptor", correct: false }, { text: "Vingança da Rainha Anne", correct: false }, { text: "Holandês Voador", correct: false }] },
    { question: "Qual a profissão de Bruce Willis em 'Duro de Matar'?", answers: [{ text: "Policial", correct: true }, { text: "Detetive Particular", correct: false }, { text: "Advogado", correct: false }, { text: "Médico", correct: false }] },
    { question: "Quem é o diretor do filme 'Pulp Fiction'?", answers: [{ text: "Quentin Tarantino", correct: true }, { text: "Steven Spielberg", correct: false }, { text: "Martin Scorsese", correct: false }, { text: "Ridley Scott", correct: false }] },
    { question: "Qual é o nome do primeiro filme da série 'Harry Potter'?", answers: [{ text: "Harry Potter e a Pedra Filosofal", correct: true }, { text: "Harry Potter e a Câmara Secreta", correct: false }, { text: "Harry Potter e o Prisioneiro de Azkaban", correct: false }, { text: "Harry Potter e o Cálice de Fogo", correct: false }] },
    { question: "Qual filme é famoso por seu uso inovador de animação em 3D?", answers: [{ text: "Avatar", correct: true }, { text: "O Rei Leão", correct: false }, { text: "Toy Story", correct: false }, { text: "Shrek", correct: false }] },
    { question: "Quem é o diretor do filme 'A Origem'?", answers: [{ text: "Christopher Nolan", correct: true }, { text: "James Cameron", correct: false }, { text: "David Fincher", correct: false }, { text: "Ridley Scott", correct: false }] },
    { question: "Qual é o nome do protagonista em 'Clube da Luta'?", answers: [{ text: "Narrador", correct: true }, { text: "Tyler Durden", correct: false }, { text: "Marla Singer", correct: false }, { text: "Robert Paulsen", correct: false }] },
    { question: "Qual filme de animação da Disney apresenta a música 'A Whole New World'?", answers: [{ text: "Aladdin", correct: true }, { text: "A Bela e a Fera", correct: false }, { text: "O Rei Leão", correct: false }, { text: "Pocahontas", correct: false }] },
    { question: "Qual filme de terror é famoso por sua frase 'Eu vejo pessoas mortas'?", answers: [{ text: "O Sexto Sentido", correct: true }, { text: "A Vila", correct: false }, { text: "A Chave Mestra", correct: false }, { text: "Atividade Paranormal", correct: false }] },
    { question: "Quem protagonizou o filme 'Matrix'?", answers: [{ text: "Keanu Reeves", correct: true }, { text: "Brad Pitt", correct: false }, { text: "Leonardo DiCaprio", correct: false }, { text: "Johnny Depp", correct: false }] },
    { question: "Qual é o nome do personagem de Will Smith em 'Homens de Preto'?", answers: [{ text: "Agent J", correct: true }, { text: "Agent K", correct: false }, { text: "Agent Z", correct: false }, { text: "Agent M", correct: false }] },
    { question: "Qual filme de super-herói é baseado em um personagem da Marvel que tem um escudo feito de vibranium?", answers: [{ text: "Capitão América: O Primeiro Vingador", correct: true }, { text: "Thor", correct: false }, { text: "Homem de Ferro", correct: false }, { text: "Os Vingadores", correct: false }] },
    { question: "Qual filme de animação é sobre um grupo de brinquedos que ganham vida?", answers: [{ text: "Toy Story", correct: true }, { text: "Carros", correct: false }, { text: "Procurando Nemo", correct: false }, { text: "Os Incríveis", correct: false }] },
    { question: "Quem é o criador da série de filmes 'O Senhor dos Anéis'?", answers: [{ text: "Peter Jackson", correct: true }, { text: "Steven Spielberg", correct: false }, { text: "James Cameron", correct: false }, { text: "Ridley Scott", correct: false }] },
    { question: "Qual filme de 2001 apresenta uma competição entre dois pianistas?", answers: [{ text: "O Pianista", correct: true }, { text: "O Fantasma da Ópera", correct: false }, { text: "Cisne Negro", correct: false }, { text: "Amadeus", correct: false }] },
    { question: "Qual é o nome da vilã em 'A Pequena Sereia'?", answers: [{ text: "Úrsula", correct: true }, { text: "Ariel", correct: false }, { text: "Jasmine", correct: false }, { text: "Malévola", correct: false }] },
    { question: "Quem ganhou o Oscar de Melhor Ator em 2020?", answers: [{ text: "Joaquin Phoenix", correct: true }, { text: "Leonardo DiCaprio", correct: false }, { text: "Brad Pitt", correct: false }, { text: "Antonio Banderas", correct: false }] },
    { question: "Qual é o nome do cão de 'Os Goonies'?", answers: [{ text: "Sloth", correct: true }, { text: "Chester", correct: false }, { text: "Einstein", correct: false }, { text: "Scooby", correct: false }] },
    { question: "Qual é o nome do filme onde um grupo de amigos entra em um jogo de tabuleiro mágico?", answers: [{ text: "Jumanji", correct: true }, { text: "Zathura", correct: false }, { text: "O Labirinto", correct: false }, { text: "Os Caça-Fantasmas", correct: false }] },
    { question: "Quem dirige o filme 'Os Vingadores'?", answers: [{ text: "Joss Whedon", correct: true }, { text: "James Gunn", correct: false }, { text: "Jon Favreau", correct: false }, { text: "David Ayer", correct: false }] },
    { question: "Qual é o tema principal de 'Cinquenta Tons de Cinza'?", answers: [{ text: "Romance", correct: true }, { text: "Ação", correct: false }, { text: "Terror", correct: false }, { text: "Comédia", correct: false }] },
    { question: "Qual filme apresenta a frase famosa 'Say hello to my little friend'?", answers: [{ text: "Scarface", correct: true }, { text: "O Lobo de Wall Street", correct: false }, { text: "Cães de Aluguel", correct: false }, { text: "Pulp Fiction", correct: false }] },
    { question: "Quem é a atriz principal de 'O Diabo Veste Prada'?", answers: [{ text: "Anne Hathaway", correct: true }, { text: "Meryl Streep", correct: false }, { text: "Emily Blunt", correct: false }, { text: "Scarlett Johansson", correct: false }] },
    { question: "Qual é o nome da princesa em 'A Bela e a Fera'?", answers: [{ text: "Bela", correct: true }, { text: "Cinderela", correct: false }, { text: "Aurora", correct: false }, { text: "Jasmine", correct: false }] },
    { question: "Qual é o título do filme que conta a história de um garoto que sonha em ser cantor e vive em um mundo de mortos?", answers: [{ text: "Coco", correct: true }, { text: "Viva", correct: false }, { text: "Os Incríveis", correct: false }, { text: "Procurando Dory", correct: false }] },
    { question: "Qual é o nome do protagonista de 'Os Vingadores'?", answers: [{ text: "Tony Stark", correct: true }, { text: "Steve Rogers", correct: false }, { text: "Natasha Romanoff", correct: false }, { text: "Bruce Banner", correct: false }] },
    { question: "Quem interpreta a personagem Elizabeth Bennet em 'Orgulho e Preconceito'?", answers: [{ text: "Keira Knightley", correct: true }, { text: "Emma Watson", correct: false }, { text: "Natalie Portman", correct: false }, { text: "Kate Winslet", correct: false }] },
    { question: "Qual filme de animação da Pixar é sobre uma família de super-heróis?", answers: [{ text: "Os Incríveis", correct: true }, { text: "Ratatouille", correct: false }, { text: "Monstros S.A.", correct: false }, { text: "Toy Story 2", correct: false }] },
    { question: "Qual é o nome do personagem principal em 'O Rei Leão'?", answers: [{ text: "Simba", correct: true }, { text: "Mufasa", correct: false }, { text: "Scar", correct: false }, { text: "Nala", correct: false }] },
    { question: "Qual filme se passa em um mundo pós-apocalíptico cheio de zumbis?", answers: [{ text: "Guerra Mundial Z", correct: true }, { text: "Resident Evil", correct: false }, { text: "Extermínio", correct: false }, { text: "O Hospedeiro", correct: false }] },
    { question: "Quem é o autor do livro 'O Senhor dos Anéis'?", answers: [{ text: "J.R.R. Tolkien", correct: true }, { text: "George R.R. Martin", correct: false }, { text: "C.S. Lewis", correct: false }, { text: "Philip Pullman", correct: false }] },
    { question: "Qual é o nome do vilão em 'O Exterminador do Futuro'?", answers: [{ text: "T-800", correct: true }, { text: "T-1000", correct: false }, { text: "Skynet", correct: false }, { text: "John Connor", correct: false }] },
    { question: "Qual é o nome do filme onde um grupo de jovens se perde em uma floresta e encontra um demônio?", answers: [{ text: "A Bruxa de Blair", correct: true }, { text: "Atividade Paranormal", correct: false }, { text: "O Último Exorcismo", correct: false }, { text: "O Chamado", correct: false }] },
    { question: "Quem interpreta o Coringa em 'Coringa' (2019)?", answers: [{ text: "Joaquin Phoenix", correct: true }, { text: "Heath Ledger", correct: false }, { text: "Jared Leto", correct: false }, { text: "Jack Nicholson", correct: false }] },
    { question: "Qual é o nome do protagonista de 'Mad Max: Estrada da Fúria'?", answers: [{ text: "Max Rockatansky", correct: true }, { text: "Imperator Furiosa", correct: false }, { text: "Nux", correct: false }, { text: "Joe", correct: false }] },
    { question: "Qual filme retrata a vida de um chef de cozinha que se demite e começa um negócio de food truck?", answers: [{ text: "Chef", correct: true }, { text: "Ratatouille", correct: false }, { text: "Comer, Rezar, Amar", correct: false }, { text: "Julie & Julia", correct: false }] },
    { question: "Qual é o nome da deusa da sabedoria no filme 'A Guerra dos Tronos'?", answers: [{ text: "Daenerys Targaryen", correct: true }, { text: "Cersei Lannister", correct: false }, { text: "Sansa Stark", correct: false }, { text: "Arya Stark", correct: false }] },
    { question: "Qual é o nome do filme que conta a história de um hacker que luta contra uma organização corrupta?", answers: [{ text: "Matrix", correct: true }, { text: "Tron", correct: false }, { text: "A Rede Social", correct: false }, { text: "WarGames", correct: false }] },
    { question: "Quem ganhou o Oscar de Melhor Filme em 1998?", answers: [{ text: "Titanic", correct: true }, { text: "Shakespeare Apaixonado", correct: false }, { text: "O Clube da Luta", correct: false }, { text: "A Vida é Bela", correct: false }] },
    { question: "Qual é o nome da atriz principal de 'Os Outros'?", answers: [{ text: "Nicole Kidman", correct: true }, { text: "Charlize Theron", correct: false }, { text: "Kate Winslet", correct: false }, { text: "Anne Hathaway", correct: false }] },
    { question: "Qual é o tema principal de 'Caminhos da Floresta'?", answers: [{ text: "Fábulas", correct: true }, { text: "Contos de Fadas", correct: false }, { text: "Mitologia", correct: false }, { text: "Histórias de Horror", correct: false }] },
    { question: "Quem é o diretor de 'O Fabuloso Destino de Amélie Poulain'?", answers: [{ text: "Jean-Pierre Jeunet", correct: true }, { text: "Marc Caro", correct: false }, { text: "Alfonso Cuarón", correct: false }, { text: "Wes Anderson", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de um jovem que descobre que é um semideus?", answers: [{ text: "Percy Jackson e os Olimpianos", correct: true }, { text: "Harry Potter", correct: false }, { text: "As Crônicas de Nárnia", correct: false }, { text: "O Senhor dos Anéis", correct: false }] },
    { question: "Qual é o nome do personagem interpretado por Robin Williams em 'Uma Babá Quase Perfeita'?", answers: [{ text: "Daniel Hillard", correct: true }, { text: "Mrs. Doubtfire", correct: false }, { text: "Jack", correct: false }, { text: "Alan Parrish", correct: false }] },
    { question: "Qual filme é famoso por sua cena de dança na chuva?", answers: [{ text: "Cantando na Chuva", correct: true }, { text: "La La Land", correct: false }, { text: "Os Miseráveis", correct: false }, { text: "A Noviça Rebelde", correct: false }] },
    { question: "Quem é o protagonista de 'O Lobo de Wall Street'?", answers: [{ text: "Leonardo DiCaprio", correct: true }, { text: "Matthew McConaughey", correct: false }, { text: "Jonah Hill", correct: false }, { text: "Brad Pitt", correct: false }] },
    { question: "Qual é o nome do filme onde o Titanic afunda?", answers: [{ text: "Titanic", correct: true }, { text: "A Espera de um Milagre", correct: false }, { text: "Forrest Gump", correct: false }, { text: "O Senhor dos Anéis", correct: false }] },
    { question: "Qual é o nome do protagonista de 'Piratas do Caribe'?", answers: [{ text: "Jack Sparrow", correct: true }, { text: "Will Turner", correct: false }, { text: "Davy Jones", correct: false }, { text: "James Norrington", correct: false }] },
    { question: "Qual é o nome do primeiro filme da série 'Star Wars'?", answers: [{ text: "Star Wars: Episódio IV - Uma Nova Esperança", correct: true }, { text: "Star Wars: Episódio I - A Ameaça Fantasma", correct: false }, { text: "Star Wars: Episódio V - O Império Contra-Ataca", correct: false }, { text: "Star Wars: Episódio VI - O Retorno de Jedi", correct: false }] },
    { question: "Quem é o ator principal de 'Gladiador'?", answers: [{ text: "Russell Crowe", correct: true }, { text: "Gerard Butler", correct: false }, { text: "Hugh Jackman", correct: false }, { text: "Chris Hemsworth", correct: false }] },
    { question: "Qual é o nome do filme que conta a história de um grupo de crianças que vão em busca de um tesouro perdido?", answers: [{ text: "Os Goonies", correct: true }, { text: "Conta Comigo", correct: false }, { text: "Cazadores de Tesouros", correct: false }, { text: "A História Sem Fim", correct: false }] },
    { question: "Qual é o nome do filme que narra a vida de um boxeador famoso, interpretado por Robert De Niro?", answers: [{ text: "Touro Indomável", correct: true }, { text: "Rocky", correct: false }, { text: "Raging Bull", correct: false }, { text: "O Lutador", correct: false }] },
    { question: "Qual é o nome da rainha em 'Branca de Neve'?", answers: [{ text: "Rainha Má", correct: true }, { text: "Malévola", correct: false }, { text: "Cinderela", correct: false }, { text: "Ariel", correct: false }] },
    { question: "Qual filme de ação é famoso por sua frase 'I’ll be back'?", answers: [{ text: "O Exterminador do Futuro", correct: true }, { text: "Duro de Matar", correct: false }, { text: "RoboCop", correct: false }, { text: "Django Livre", correct: false }] },
    { question: "Qual é o nome do filme que tem a frase 'A vida é como uma caixa de chocolates'?", answers: [{ text: "Forrest Gump", correct: true }, { text: "A Vida é Bela", correct: false }, { text: "Cinquenta Tons de Cinza", correct: false }, { text: "O Lobo de Wall Street", correct: false }] },
    { question: "Qual é o nome da filha de Jack e Rose em 'Titanic'?", answers: [{ text: "Não tem", correct: true }, { text: "Lucy", correct: false }, { text: "Kate", correct: false }, { text: "Sophie", correct: false }] },
    { question: "Qual é o nome do filme que narra a história de um grupo de sobreviventes em um apocalipse zumbi?", answers: [{ text: "A Estrada", correct: true }, { text: "Guerra Mundial Z", correct: false }, { text: "Extermínio", correct: false }, { text: "The Walking Dead", correct: false }] },
    { question: "Quem é o vilão principal de 'Os Vingadores'?", answers: [{ text: "Thanos", correct: true }, { text: "Loki", correct: false }, { text: "Ultron", correct: false }, { text: "Hela", correct: false }] },
    { question: "Qual é o nome da série que retrata a vida de uma família em uma prisão?", answers: [{ text: "Prison Break", correct: true }, { text: "Orange is the New Black", correct: false }, { text: "Breaking Bad", correct: false }, { text: "Narcos", correct: false }] },
    { question: "Qual é o nome do filme que tem uma cena famosa de um beijo sob a chuva?", answers: [{ text: "Os Dias de Um Futuro Esquecido", correct: true }, { text: "Diário de Uma Paixão", correct: false }, { text: "O Casamento do Meu Melhor Amigo", correct: false }, { text: "10 Coisas que Eu Odeio em Você", correct: false }] },
    { question: "Qual é o nome do cientista em 'De Volta para o Futuro'?", answers: [{ text: "Doc Brown", correct: true }, { text: "Marty McFly", correct: false }, { text: "Einstein", correct: false }, { text: "Biff Tannen", correct: false }] },
    { question: "Qual é o tema central de 'O Senhor dos Anéis'?", answers: [{ text: "A luta entre o bem e o mal", correct: true }, { text: "A amizade", correct: false }, { text: "A busca pelo amor", correct: false }, { text: "A traição", correct: false }] },
    { question: "Qual é o nome do filme que se passa em um mundo pós-apocalíptico onde os humanos são caçados?", answers: [{ text: "Jogos Vorazes", correct: true }, { text: "O Hospedeiro", correct: false }, { text: "Maze Runner", correct: false }, { text: "A Estrada", correct: false }] },
    { question: "Qual é o nome do filme que narra a vida de um músico que se torna famoso após sua morte?", answers: [{ text: "Amadeus", correct: true }, { text: "Ray", correct: false }, { text: "Walk the Line", correct: false }, { text: "Bohemian Rhapsody", correct: false }] },
    { question: "Quem é a protagonista de 'Mulan'?", answers: [{ text: "Mulan", correct: true }, { text: "Jasmine", correct: false }, { text: "Cinderela", correct: false }, { text: "Pocahontas", correct: false }] },
    { question: "Qual é o nome do filme que apresenta um peixe-palhaço em busca de seu filho?", answers: [{ text: "Procurando Nemo", correct: true }, { text: "A Vida é Bela", correct: false }, { text: "Toy Story", correct: false }, { text: "Os Incríveis", correct: false }] },
    { question: "Quem é o dublador de Shrek no filme de animação?", answers: [{ text: "Mike Myers", correct: true }, { text: "Eddie Murphy", correct: false }, { text: "Cameron Diaz", correct: false }, { text: "Antonio Banderas", correct: false }] },
    { question: "Qual é o nome do filme que narra a história de um vampiro que se apaixona por uma humana?", answers: [{ text: "Crepúsculo", correct: true }, { text: "Entrevista com o Vampiro", correct: false }, { text: "Amanhecer", correct: false }, { text: "Drácula", correct: false }] },
    { question: "Qual é o nome do personagem interpretado por Matt Damon em 'O Destino da Nação'?", answers: [{ text: "Jason Bourne", correct: true }, { text: "Mark Watney", correct: false }, { text: "Thomas Wayne", correct: false }, { text: "David Foster Wallace", correct: false }] },
    { question: "Qual é o nome do filme que retrata a história de um advogado que defende um homem negro acusado de estuprar uma mulher branca?", answers: [{ text: "À Espera de um Milagre", correct: true }, { text: "Doze Homens e uma Sentença", correct: false }, { text: "O Sol é Para Todos", correct: false }, { text: "Malcolm X", correct: false }] },
    { question: "Quem interpreta a Rainha Elizabeth II em 'A Rainha'?", answers: [{ text: "Helen Mirren", correct: true }, { text: "Kate Winslet", correct: false }, { text: "Nicole Kidman", correct: false }, { text: "Judi Dench", correct: false }] },
    { question: "Qual é o nome do filme onde um homem é mantido em cativeiro por 15 anos?", answers: [{ text: "Oldboy", correct: true }, { text: "O Hospedeiro", correct: false }, { text: "Cisne Negro", correct: false }, { text: "O Lobo de Wall Street", correct: false }] },
    { question: "Qual é o nome do filme que mostra a vida de um piloto de Fórmula 1?", answers: [{ text: "Rush", correct: true }, { text: "Senna", correct: false }, { text: "Days of Thunder", correct: false }, { text: "Ford vs Ferrari", correct: false }] },
    { question: "Qual é o nome do personagem principal em 'Os Vingadores: Ultimato'?", answers: [{ text: "Tony Stark", correct: true }, { text: "Steve Rogers", correct: false }, { text: "Natasha Romanoff", correct: false }, { text: "Thor", correct: false }] },
    { question: "Qual é o nome do filme que mostra um grupo de amigos tentando encontrar um corpo perdido?", answers: [{ text: "Conta Comigo", correct: true }, { text: "Os Goonies", correct: false }, { text: "A História Sem Fim", correct: false }, { text: "O Senhor dos Anéis", correct: false }] },
    { question: "Quem é o diretor do filme 'Pulp Fiction'?", answers: [{ text: "Quentin Tarantino", correct: true }, { text: "Martin Scorsese", correct: false }, { text: "Christopher Nolan", correct: false }, { text: "Steven Spielberg", correct: false }] },
    { question: "Qual é o nome da saga onde um anel poderoso é destruído?", answers: [{ text: "O Senhor dos Anéis", correct: true }, { text: "Harry Potter", correct: false }, { text: "As Crônicas de Nárnia", correct: false }, { text: "Divergente", correct: false }] },
    { question: "Qual é o nome do filme que se passa em um hotel onde todos os hóspedes são assassinos?", answers: [{ text: "John Wick", correct: true }, { text: "Hotel Artemis", correct: false }, { text: "Assassins", correct: false }, { text: "Duro de Matar", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de um grupo de ladrões de arte?", answers: [{ text: "A Grande Ilusão", correct: true }, { text: "O Livro de Eli", correct: false }, { text: "A Arte da Conquista", correct: false }, { text: "O Grande Gatsby", correct: false }] },
    { question: "Qual é o nome da música tema de 'James Bond'?", answers: [{ text: "Skyfall", correct: true }, { text: "Goldfinger", correct: false }, { text: "Live and Let Die", correct: false }, { text: "You Only Live Twice", correct: false }] },
    { question: "Qual é o nome do filme que tem uma cena icônica onde um homem dança em um telhado?", answers: [{ text: "Cinquenta Tons de Cinza", correct: true }, { text: "A Rede Social", correct: false }, { text: "O Lobo de Wall Street", correct: false }, { text: "A Invenção de Hugo Cabret", correct: false }] },
    { question: "Quem é o ator que faz o papel de Wolverine nos filmes da Marvel?", answers: [{ text: "Hugh Jackman", correct: true }, { text: "Ryan Reynolds", correct: false }, { text: "Chris Pratt", correct: false }, { text: "Chris Evans", correct: false }] },
    { question: "Qual é o nome do filme que tem uma famosa cena de um avião quebrando ao meio?", answers: [{ text: "Voo 7500", correct: true }, { text: "Perigo à Vista", correct: false }, { text: "Planeta dos Macacos", correct: false }, { text: "Independence Day", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de uma mulher que luta contra a opressão em um regime totalitário?", answers: [{ text: "V de Vingança", correct: true }, { text: "A Estrada", correct: false }, { text: "O Jogo da Imitação", correct: false }, { text: "O Labirinto do Fauno", correct: false }] },
    { question: "Qual é o nome do personagem principal em 'O Rei Leão'?", answers: [{ text: "Simba", correct: true }, { text: "Mufasa", correct: false }, { text: "Scar", correct: false }, { text: "Zazu", correct: false }] },
    { question: "Qual é o nome do filme que apresenta uma sociedade distópica onde os cidadãos são controlados por um governo opressivo?", answers: [{ text: "1984", correct: true }, { text: "A Laranja Mecânica", correct: false }, { text: "Os Jogos Vorazes", correct: false }, { text: "Divergente", correct: false }] },
    { question: "Quem é o ator que interpretou o Coringa em 'Coringa'?", answers: [{ text: "Joaquin Phoenix", correct: true }, { text: "Heath Ledger", correct: false }, { text: "Jared Leto", correct: false }, { text: "Jack Nicholson", correct: false }] },
    { question: "Qual é o nome do filme que conta a história de um astronauta preso em Marte?", answers: [{ text: "Perdido em Marte", correct: true }, { text: "Interstellar", correct: false }, { text: "Gravity", correct: false }, { text: "O Primeiro Homem", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de um assassino em série que busca redenção?", answers: [{ text: "Dexter", correct: true }, { text: "Silêncio dos Inocentes", correct: false }, { text: "O Silêncio do Lago", correct: false }, { text: "Seven", correct: false }] },
    { question: "Qual é o nome do filme que tem uma famosa cena de dança no estacionamento?", answers: [{ text: "Grease", correct: true }, { text: "Flashdance", correct: false }, { text: "Dirty Dancing", correct: false }, { text: "Footloose", correct: false }] },
    { question: "Quem é o personagem principal em 'O Senhor dos Anéis'?", answers: [{ text: "Frodo Bolseiro", correct: true }, { text: "Gandalf", correct: false }, { text: "Aragorn", correct: false }, { text: "Legolas", correct: false }] },
    { question: "Qual é o nome do filme que se passa em um mundo virtual chamado 'The Matrix'?", answers: [{ text: "Matrix", correct: true }, { text: "Inception", correct: false }, { text: "Blade Runner", correct: false }, { text: "Minority Report", correct: false }] },
    { question: "Qual é o nome do filme que apresenta um grupo de amigos tentando descobrir a verdade sobre um assassinato?", answers: [{ text: "Os Suspeitos", correct: true }, { text: "A Estrada", correct: false }, { text: "Seven", correct: false }, { text: "Os Outros", correct: false }] },
    { question: "Quem é o diretor de 'O Senhor dos Anéis'?", answers: [{ text: "Peter Jackson", correct: true }, { text: "Steven Spielberg", correct: false }, { text: "James Cameron", correct: false }, { text: "George Lucas", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de um grupo de piratas?", answers: [{ text: "Piratas do Caribe", correct: true }, { text: "O Capitão Phillips", correct: false }, { text: "A Ilha do Tesouro", correct: false }, { text: "Morte ao Fogo", correct: false }] },
    { question: "Qual é o nome do filme que se passa em um mundo de robôs e androides?", answers: [{ text: "Blade Runner", correct: true }, { text: "Ex Machina", correct: false }, { text: "I, Robot", correct: false }, { text: "Matrix", correct: false }] },
    { question: "Qual é o nome do filme que apresenta uma guerra entre humanos e alienígenas?", answers: [{ text: "Guerra dos Mundos", correct: true }, { text: "Independence Day", correct: false }, { text: "Avatar", correct: false }, { text: "Star Wars", correct: false }] },
    { question: "Qual é o nome do personagem que busca vingança em 'Kill Bill'?", answers: [{ text: "A Noiva", correct: true }, { text: "Elle Driver", correct: false }, { text: "O Senhor das Armas", correct: false }, { text: "Bill", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de um garoto que é amigo de um extraterrestre?", answers: [{ text: "E.T. - O Extraterrestre", correct: true }, { text: "O Homem Bicentenário", correct: false }, { text: "Contato", correct: false }, { text: "Sinais", correct: false }] },
    { question: "Quem é o ator que faz o papel de Jack Dawson em 'Titanic'?", answers: [{ text: "Leonardo DiCaprio", correct: true }, { text: "Brad Pitt", correct: false }, { text: "Matt Damon", correct: false }, { text: "Johnny Depp", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de uma mulher que é enganada por seu marido?", answers: [{ text: "A Culpado", correct: true }, { text: "A Garota no Trem", correct: false }, { text: "O Lobo de Wall Street", correct: false }, { text: "O Labirinto do Fauno", correct: false }] },
    { question: "Qual é o nome do filme que apresenta uma guerra entre os mundos dos vivos e dos mortos?", answers: [{ text: "Coco", correct: true }, { text: "A Noiva Cadáver", correct: false }, { text: "Coraline", correct: false }, { text: "A Casa Monstro", correct: false }] },
    { question: "Qual é o nome do filme que se passa em um navio que afunda?", answers: [{ text: "Titanic", correct: true }, { text: "Poseidon", correct: false }, { text: "Náufrago", correct: false }, { text: "Guerra Mundial Z", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de um ladrão de identidade?", answers: [{ text: "Identidade", correct: true }, { text: "O Lobo de Wall Street", correct: false }, { text: "Catch Me If You Can", correct: false }, { text: "Um Crime de Mestre", correct: false }] },
    { question: "Qual é o nome do filme que apresenta uma sociedade onde as pessoas são divididas por suas habilidades?", answers: [{ text: "Divergente", correct: true }, { text: "Jogos Vorazes", correct: false }, { text: "A Hospedeira", correct: false }, { text: "Os 100", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de um garoto que é amigo de um dragão?", answers: [{ text: "Como Treinar o Seu Dragão", correct: true }, { text: "Shrek", correct: false }, { text: "O Meu Amigo Dragão", correct: false }, { text: "O Último Dragão", correct: false }] },
    { question: "Quem é o ator que faz o papel de Harry Potter?", answers: [{ text: "Daniel Radcliffe", correct: true }, { text: "Rupert Grint", correct: false }, { text: "Emma Watson", correct: false }, { text: "Tom Felton", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de uma mulher que busca vingança após ser traída?", answers: [{ text: "A Vingança", correct: true }, { text: "O Cisne Negro", correct: false }, { text: "Atração Fatal", correct: false }, { text: "A Noiva", correct: false }] },
    { question: "Qual é o nome do filme que tem uma famosa cena de dança em um restaurante?", answers: [{ text: "A Recruta Benjamin", correct: true }, { text: "A Rede Social", correct: false }, { text: "O Grande Hotel Budapeste", correct: false }, { text: "Um Dia de Fúria", correct: false }] },
    { question: "Qual é o nome do personagem principal em 'A Forma da Água'?", answers: [{ text: "Elisa", correct: true }, { text: "Giles", correct: false }, { text: "Richard", correct: false }, { text: "Strickland", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de um artista em busca de inspiração?", answers: [{ text: "Caminhos da Memória", correct: true }, { text: "A Arte de Ser Normal", correct: false }, { text: "O Fabuloso Destino de Amélie Poulain", correct: false }, { text: "A Fantástica Fábrica de Chocolate", correct: false }] },
    { question: "Qual é o nome do filme que se passa em um mundo onde as máquinas dominam?", answers: [{ text: "Matrix", correct: true }, { text: "Robocop", correct: false }, { text: "Exterminador do Futuro", correct: false }, { text: "Eu, Robô", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de uma mulher que busca a verdade sobre seu passado?", answers: [{ text: "A Verdade Nua", correct: true }, { text: "O Labirinto do Fauno", correct: false }, { text: "Memórias de uma Gueixa", correct: false }, { text: "A Menina que Roubava Livros", correct: false }] },
    { question: "Qual é o nome do filme que apresenta um grupo de amigos que se reúnem para uma festa de formatura?", answers: [{ text: "American Pie", correct: true }, { text: "As Vantagens de Ser Invisível", correct: false }, { text: "O Clube da Luta", correct: false }, { text: "Se Beber, Não Case!", correct: false }] },
    { question: "Quem é o diretor de 'Os Incríveis'?", answers: [{ text: "Brad Bird", correct: true }, { text: "Pixar", correct: false }, { text: "John Lasseter", correct: false }, { text: "Pete Docter", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de um assassino em série que se disfarça de pai de família?", answers: [{ text: "Dexter", correct: true }, { text: "A Garota da Porta ao Lado", correct: false }, { text: "O Silêncio dos Inocentes", correct: false }, { text: "Se7en", correct: false }] },
    { question: "Qual é o nome do filme que apresenta um grupo de jovens que tentam escapar de um labirinto mortal?", answers: [{ text: "O Labirinto", correct: true }, { text: "Maze Runner", correct: false }, { text: "Jogos Vorazes", correct: false }, { text: "Divergente", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de um detetive que investiga um assassinato?", answers: [{ text: "A Origem", correct: true }, { text: "Os Suspeitos", correct: false }, { text: "Seven", correct: false }, { text: "A Verdade Nua", correct: false }] },
    { question: "Qual é o nome do filme que apresenta uma guerra entre humanos e máquinas?", answers: [{ text: "Transformers", correct: true }, { text: "O Exterminador do Futuro", correct: false }, { text: "Blade Runner", correct: false }, { text: "Matrix", correct: false }] },
    { question: "Qual é o nome do filme que retrata a vida de um artista em busca de sucesso?", answers: [{ text: "A Fantástica Fábrica de Chocolate", correct: true }, { text: "O Diabo Veste Prada", correct: false }, { text: "Coco", correct: false }, { text: "A Rede Social", correct: false }] },
    { question: "Qual é o nome do filme que apresenta uma guerra entre os mundos dos vivos e dos mortos?", answers: [{ text: "Coco", correct: true }, { text: "A Noiva Cadáver", correct: false }, { text: "Coraline", correct: false }, { text: "A Casa Monstro", correct: false }] },
    { question: "Qual é o nome do filme que tem uma famosa cena de dança no estacionamento?", answers: [{ text: "Grease", correct: true }, { text: "Flashdance", correct: false }, { text: "Dirty Dancing", correct: false }, { text: "Footloose", correct: false }] },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

function selectRandomQuestions() {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    selectedQuestions = shuffled.slice(0, 10);
}

function startGame() {
    currentQuestionIndex = 0; 
    selectRandomQuestions();
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

    document.getElementById('score-container').style.display = 'block';
}


function getApelido(acertos) {
    if (acertos === 10) {
        return "Gênio";
    } else if (acertos >= 8) {
        return "Expert";
    } else if (acertos >= 6) {
        return "Sábio";
    } else if (acertos >= 4) {
        return "Estudioso";
    } else if (acertos >= 2) {
        return "Curioso";
    } else if (acertos === 1) {
        return "Iniciante";
    } else {
        return "Desafiante";
    }
}

document.getElementById('restart-button').addEventListener('click', startGame);

startGame();
