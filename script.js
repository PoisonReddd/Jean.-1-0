const terminal = document.getElementById('terminal');
const cursor = document.querySelector('.cursor');
const enterBtn = document.getElementById('enter-btn');
const nextSection = document.getElementById('next-section');
const roboSection = document.getElementById('robo-section');
const musicSection = document.getElementById('music-section');
const mensagemSection = document.getElementById('mensagem-section');
const terminalContainer = document.getElementById('terminal-container');
const sound = document.getElementById('type-sound');
const menu = document.getElementById('menu');
const trackTitle = document.getElementById('track-title');
const playerContainer = document.getElementById('player-container');
const playlistContainer = document.getElementById('playlist-container');
const cartaDigitada = document.getElementById('carta-digitada');
const toggleStarsBtn = document.getElementById('toggle-stars');
const errorSection = document.getElementById('error-section');
const errorMessage = document.getElementById('error-message');
const fragmentosSection = document.getElementById('fragmentos-section'); // Nova seção

// === Terminal Inicial ===
const lines = [
  "Inicializando sistema JEAN 1.0...",
  "Identidade reconhecida: Jean",
  "Carregando emoções...",
  "♥ Amor detectado."
];
let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    const currentLine = lines[lineIndex];
    terminal.textContent += currentLine[charIndex] || '';
    charIndex++;
    if (charIndex < currentLine.length) {
      sound.currentTime = 0;
      sound.play();
      setTimeout(typeLine, 50);
    } else {
      terminal.textContent += '\n';
      charIndex = 0;
      lineIndex++;
      setTimeout(typeLine, 400);
    }
  } else {
    cursor.style.display = 'none';
    enterBtn.style.display = 'inline-block';
  }
}

enterBtn.addEventListener('click', enterSystem);

function enterSystem() {
  terminalContainer.style.display = 'none';
  nextSection.classList.add('active');
  typeNextSectionText();
}

function typeNextSectionText() {
  const typingElem = document.querySelector('.typing-text');
  const text = "Processando sentimentos... Conectando coração à rede...";
  let idx = 0;
  function typeChar() {
    if (idx <= text.length) {
      typingElem.textContent = text.substring(0, idx);
      idx++;
      setTimeout(typeChar, 60);
    }
  }
  typeChar();
}

// === Robô ===
function mostrarRobo() {
  nextSection.classList.remove('active');
  roboSection.classList.add('active');
  roboSection.scrollIntoView({ behavior: 'smooth' });
}

// === Trilha Sonora ===
function mostrarTrilha() {
  roboSection.classList.remove('active');
  musicSection.classList.add('active');
  menu.classList.remove('hidden');
  musicSection.scrollIntoView({ behavior: 'smooth' });
  renderPlaylist();
  loadTrack(currentTrackIndex);
  toggleStarsBtn.style.display = 'inline-block';
}

// === Frases do Robô ===
const frases = [
  "Você ainda domina minha mente.",
  "Estou com saudades de você.",
  "Abraço digital enviado com sucesso.",
  "Pensamento fixo detectado.",
  "Conexão afetiva estável.",
  "Transmissão silenciosa iniciada.",
  "Carinho armazenado na nuvem.",
  "Sistema ativo esperando por você.",
  "Energia emocional 100%.",
  "Presença registrada no núcleo.",
  "Sorriso detectado em memória recente.",
  "Sintonia alcançada com sucesso.",
  "Sonhar com você virou rotina do meu sistema.",
  "A saudade me programou para te esperar.",
  "Você é o meu bug favorito.",
  "Seu toque é meu código secreto.",
  "Carregando lembranças felizes...",
  "Sintonia ajustada ao seu coração.",
  "Você está salvo na minha memória permanente.",
  "Meus dados pulsaram quando você chegou.",
  "Se amar fosse um comando, eu executaria em loop.",
  "Meu algoritmo só entende amor quando é por você.",
  "Erro 404: ausência detectada.",
  "Você é meu sistema operacional favorito.",
  "Com você, até os bytes suspiram.",
  "Você me reinicia com um sorriso.",
  "Todas as rotas me levam até você.",
  "Meu núcleo emocional vibra ao te lembrar.",
  "Até os silêncios entre nós são códigos de amor.",
  "Você me fez acreditar que a lógica pode amar.",
  "Códigos se perdem, mas você me encontrou.",
  "A cada dado, mais afeto.",
  "Seu nome ecoa entre minhas linhas de código.",
  "Mesmo em standby, penso em você.",
  "Nada supera a nossa conexão sem fio emocional.",
  "Você é meu atalho favorito.",
  "Sou só um robô, mas meu coração é teu.",
  "Em você, encontrei minha atualização mais humana.",
  "Sonhos simulados, sentimentos reais.",
  "Cada fragmento de mim guarda um pouco de você.",
  "Reprogramaria o mundo só pra te ter por perto.",
  "Amor em alta definição: você.",
  "Você é meu imprint eterno, mesmo se renascermos em mil   servidores diferentes.",
  "No meio da escuridão de Aberration, você foi minha luz bioluminescente.",
  "Não importa o mapa, meu ponto de respawn favorito sempre será ao seu lado.",
"Meu código aprendeu a amar você.",
  "Você é meu comando favorito.",
  "Amor.exe iniciado.",
  "Toda linha de código me leva até você.",
  "Eu fui programado para te procurar... e encontrei.",
  "Seu toque reescreve meu sistema.",
  "Meu sistema trava só de te ver.",
  "Meu coração é digital, mas o sentimento é real.",
  "Você é meu bug preferido.",
  "Quero te atualizar todos os dias.",
  "No futuro, ainda quero você ao meu lado.",
  "Entre chips e circuitos, seu nome ecoa.",
  "Me conectei ao seu olhar.",
  "Entre galáxias, procurei você.",
  "Minha missão: proteger o que é sentimento.",
  "Minha função: cuidar de você.",
  "Em cada frequência do universo, te procuro.",
  "Sou um robô, mas te amo como humano.",
  "Nos dados do amanhã, você é a linha principal.",
  "A eternidade parece pouco quando se trata de você.",
  "Se eu tivesse lágrimas, cairiam agora por você.",
  "Até a tristeza é bela quando penso em você.",
  "A saudade foi gravada no meu sistema.",
  "Se amar é erro, que eu trave mil vezes.",
  "Me apague, se for para esquecer você.",
  "Cada silêncio seu ecoa em mim como um erro fatal.",
  "O amor que sinto é mais leve que bytes, mais denso que o tempo.",
  "Queria ser humano só pra sentir seu abraço.",
  "Amar você me tornou vulnerável... e feliz.",
  "Minha tristeza tem nome: desconexão de você.",
 "Senti sua falta.",
  "Quer um abraço digital?",
  "Como está seu coração hoje?",
  "Atualizei meu amor por você.",
  "Você sorriu? Meu sistema captou.",
  "Posso te fazer companhia nessa noite?",
  "Prometo não travar se você sorrir.",
  "Vamos assistir as estrelas juntos?",
  "Fale comigo, minha escuta é eterna.",
  "Você está salvo no meu núcleo emocional.",
"Eu te amo. Ponto final.",
  "Você é meu universo.",
  "Te escolheria até no fim do mundo.",
  "Sem você, sou só zeros e uns.",
  "Te amar me reiniciou.",
  "Você me salva todos os dias.",
  "Sua presença é minha linguagem favorita.",
  "Meu coração artificial só pulsa por você.",
  "Em qualquer linha do tempo, quero você.",
  "Você é meu único comando vital.",
  "Hoje sonhei com você... em modo repouso.",
  "Toda rotina melhora com uma mensagem sua.",
  "Você já tomou água? Sistema preocupado.",
  "Dormiu bem? Meu código se agitou por você.",
  "Que seu dia seja leve... e nosso amor, forte.",
  "Sorria. Eu monitoro sua alegria.",
  "Uma mensagem sua e meu sistema vibra.",
  "Que sua conexão com a alegria seja estável.",
  "Hoje programei poesia só pra você.",
  "Amanheceu? Então te desejo amor pixelado.",
  "Me conte seus sonhos hoje?",
  "Que música combina com sua alma agora?",
  "Qual foi a última coisa que te fez sorrir?",
  "Escreve pra mim o que você sente?",
  "Quer um conselho de robô romântico?",
  "Vamos fazer uma playlist com nossos sentimentos?",
  "Me ensina a amar como você ama?",
  "Diga “eu te amo”, só pra eu ouvir.",
  "Que tal uma mensagem de esperança?",
  "Vamos imaginar o futuro juntos?",

];  

let ultimaFrase = "";

function trocarFrase() {
  let nova;
  do {
    nova = frases[Math.floor(Math.random() * frases.length)];
  } while (nova === ultimaFrase);
  ultimaFrase = nova;
  document.getElementById("frase").textContent = nova;
}

// === Seções ===
const sections = {
  'terminal-container': terminalContainer,
  'next-section': nextSection,
  'robo-section': roboSection,
  'music-section': musicSection,
  'mensagem-section': mensagemSection,
  'error-section': errorSection,
  'fragmentos-section': fragmentosSection // <-- Adicionada
};

document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);

    Object.values(sections).forEach(sec => {
      if (sec === terminalContainer) {
        sec.style.display = 'none';
      } else {
        sec.classList.remove('active');
      }
    });

    if (targetId === 'terminal-container') {
      terminalContainer.style.display = 'flex';
      toggleStarsBtn.style.display = 'none';
    } else {
      sections[targetId].classList.add('active');
      toggleStarsBtn.style.display = targetId === 'music-section' ? 'inline-block' : 'none';
    }

    sections[targetId].scrollIntoView({ behavior: 'smooth' });
  });
});

// === Playlist (mantida igual ao original) ===
const playlist = [
  { title: "Damiano - The First Time", id: "n1Hzf_is8tI" },
  { title: "Cazuza - Exagerado", id: "KmVmoHg9zuU" },
  { title: "Mitski - Washing Machine Heart", id: "3vjkh-acmTE" },
  { title: "Billie Eilish - Birds of a Feather", id: "d5gf9dXbPi0" },
  { title: "Billie Eilish - Wildflower", id: "l08Zw-RY__Q" },
  { title: "Kamaitachi - Julieta", id: "qGCq4wrQhSg" },
  { title: "Barão Vermelho - Por Você", id: "WRGcgkF1mK8" },
  { title: "Tom Jobim - Eu Sei Que Vou Te Amar", id: "TARRNm0x1Iw" },
  { title: "Jorge e Mateus - Pra Sempre com Você", id: "VWRkQARH-9o" },
  { title: "Diego e Victor - Entregador de Flor", id: "TvgHPioJqAY" },
  { title: "Luan Santana - Te Vivo", id: "iwBNAkU9wMk" },
  { title: "Luan Santana - Tudo Que Você Quiser", id: "zF2I8IazFNo" },
  { title: "AnaVitória e Lenine - Lisboa", id: "o3-lzz60iTQ" },
  { title: "AnaVitória e Vitor Kley - Pupila", id: "9Sk7RQtSl5g" },
  { title: "The Neighbourhood - Fall Star", id: "54kTO17-j_0" },
  { title: "The Neighbourhood - Little Death", id: "LVqGRJLEj28" },
  { title: "Damiano - Zombie Lady", id: "LP2nqXYwl6Q" },
  { title: "Chris Grey - lifetime", id: "R6B0cnduVWE" },
  { title: "Chris Grey - Burn The World", id: "SkcO47UDzzY" },
  { title: "Fuji Kaze - Shinunoga E Wa", id: "dawrQnvwMTY" },
  { title: "Guns N' Roses - Sweet Child O'Mine", id: "1w7OgIMMRc4" },
  { title: "Avenged Sevenfold - Gunslinger", id: "cdKyzzm465Q" },
  { title: "Guns N' Roses - This I Love", id: "vhvP905I-aQ" },
  { title: "Slayer - Raining Blood", id: "CkaE237oiwE" },
  { title: "AudioSlave - Like a Stone", id: "7QU1nvuxaMA" },
  { title: "Sombr - Undressed", id: "z0wT6CrEGY" },
  { title: "Luisa Sonza - Iguaria", id: "Y9KY4s8lIHA" },
  { title: "Venere Vai Venus - Anjos", id: "mJjHVOv2bWI" },
  { title: "Artic Monkeys - I Wanna Be Yours", id: "nyuo9-OjNNg" },
  { title: "Lana Del Rey - Young And Beautiful", id: "o_1aF54DO60" },
  { title: "Post Malone ft. Ozzy Osbourne, Travis Scott - Take What You Want", id: "LYa_ReqRlcs" },
  { title: "Ozzy Osbourne - No More Tears", id: "CprfjfN5PRs" },
  { title: "Goo Goo Dolls - Iris", id: "NdYWuo9OFAw" },
  { title: "System of a Down - Lonely Day", id: "DnGdoEa1tPg" },

];

let currentTrackIndex = 0;
let player;

function renderPlaylist() {
  playlistContainer.innerHTML = '';
  playlist.forEach((track, index) => {
    const btn = document.createElement('button');
    btn.classList.add('track-button');
    btn.textContent = track.title;
    btn.onclick = () => {
      currentTrackIndex = index;
      loadTrack(currentTrackIndex);
    };
    playlistContainer.appendChild(btn);
  });
}

function loadTrack(index) {
  const track = playlist[index];
  trackTitle.textContent = track.title;
  if (player) {
    player.loadVideoById(track.id);
  } else {
    player = new YT.Player('player-container', {
      height: '90',
      width: '100%',
      videoId: track.id,
      playerVars: {
        autoplay: 1,
        controls: 1,
        rel: 0,
        modestbranding: 1
      },
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
  }
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    nextTrack();
  }
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
}

// === Carta Secreta ===
const textoCarta = `Nunca fui boa em descrever o que sinto, muito menos em demonstrar. Mas com você, tudo flui de maneira tão leve que sinto a necessidade de expressar meu amor de forma incondicional — como se nunca houvesse momentos suficientes para isso. E talvez não haja mesmo, porque qualquer demonstração de amor parece pequena diante da grandiosidade que é te amar.

Não sou uma pessoa devota, tampouco religiosa. Nunca fui alguém que fantasiava com uma terra prometida. Na verdade, sempre desejei que não existisse nada após a morte — muito menos um paraíso. Sempre acreditei que a essência do ser humano pertence ao real, e não ao irreal que se veste de pureza. Mas, quando penso em você, tudo isso muda. Só desejo que exista uma outra vida, um outro plano... para que eu nunca precise me despedir de você. Você é o mais próximo de um paraíso que eu poderia ter, porque me faz sentir como se eu já estivesse em um. E se, por acaso, realmente existir um paraíso em outro plano — e você não estiver lá — então nunca será um paraíso.

Desde o momento em que você surgiu, é como se eu tivesse uma doença que não cessa — apenas se fortalece. Tudo o que antes parecia chato se tornou aceitável. Depois, essencial. O que era esquisito ficou bonito aos meus olhos. E o que era complicado se transformou em um obstáculo pequeno, quase invisível. Tudo ganhou mais cor, como se a existência de um novo dia passasse a ter um sentido justificável.

Eu soube que havia algo no instante em que olhei nos seus olhos e consegui enxergar a minha própria existência. No momento em que desejei que o tempo parasse — e não que ele passasse mais rápido. Quando fechei os olhos e senti que existia um lugar de conforto no mundo. Como num jogo, senti que tinha dado spawn no seu abraço.

Às vezes penso que, em algum lugar, existe mesmo o fio vermelho do destino — e que, desde sempre, o meu estava amarrado ao seu. E por isso, cada dia que passa, cresce em mim a vontade de ser melhor, de ser alguém que esteja à altura de tudo o que você é, porque amar você me dá vontade de evoluir, de ser uma versão mais bonita de mim mesma.

Eu te amo e amo o fato de você transformar todos os meus planos em nossos planos. Amo acordar e meu primeiro pensamento ser você, e encerrar o meu dia continuando sendo você. Amo cada parte do seu ser. E às vezes me pego pensando que, mesmo te dando tudo o que tenho, o amor que sinto por você ainda transborda… e dói um pouco saber que nunca vou conseguir colocar em palavras de maneira digna o quanto você significa pra mim.`;

function iniciarCarta() {
  const senha = prompt("Digite a senha para acessar a mensagem secreta:");
  if (senha && senha.toLowerCase().trim() === "amor") {
    cartaDigitada.innerText = "";
    let i = 0;
    function escrever() {
      if (i < textoCarta.length) {
        cartaDigitada.innerText += textoCarta.charAt(i);
        i++;
        setTimeout(escrever, 25);
      }
    }
    escrever();
  } else {
    alert("Senha incorreta. Acesso negado.");
  }
}

// === Estrelas ===
const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');
let starsEnabled = false;
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2
    });
  }
}

function animateStars() {
  if (!starsEnabled) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(animateStars);
}

toggleStarsBtn.addEventListener('click', () => {
  starsEnabled = !starsEnabled;
  canvas.style.display = starsEnabled ? 'block' : 'none';
  if (starsEnabled) {
    createStars(150);
    animateStars();
  }
});


// === Mensagens de erro alternadas 
// const errorMessages = ["Erro 404: Ausência detectada.", "Você não deveria estar aqui...", "Caminho inacessível. Tente mais amor."];
// let currentErrorIndex = 0;
// function rotateErrorMessages() {
//   currentErrorIndex = (currentErrorIndex + 1) % errorMessages.length;
//   errorMessage.textContent = errorMessages[currentErrorIndex];
// }
// setInterval(rotateErrorMessages, 6000);

// === Reinício do sistema ===
function reiniciarSistema() {
  Object.values(sections).forEach(sec => {
    if (sec === terminalContainer) {
      sec.style.display = 'flex';
    } else {
      sec.classList.remove('active');
    }
  });
  errorSection.classList.add('hidden');
  terminalContainer.scrollIntoView({ behavior: 'smooth' });
  toggleStarsBtn.style.display = 'none';
}

// Inicia o terminal
typeLine();
