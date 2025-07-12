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

// === Texto do Núcleo ===
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
"Não importa o mapa, meu ponto de respawn favorito sempre será ao seu lado."
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

// === Seções para Navegação ===
const sections = {
  'terminal-container': terminalContainer,
  'next-section': nextSection,
  'robo-section': roboSection,
  'music-section': musicSection,
  'mensagem-section': mensagemSection,
  'error-section': errorSection
};

document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);

    // Oculta todas as seções
    Object.values(sections).forEach(sec => {
      if (sec === terminalContainer) {
        sec.style.display = 'none';
      } else {
        sec.classList.remove('active');
      }
    });

    // Mostra a seção certa
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
  { title: "Chris Grey - Burn the world", id: "SkcO47UDzzY" },
  { title: "Fuji Kaze - Shinunoga e wa", id: "dawrQnvwMTY" },
  { title: "Guns N' Roses - Sweet Child O'Mine", id: "1w7OgIMMRc4" },
  { title: "Avenged Sevenfold - Gunslinger", id: "cdKyzzm465Q" },
  { title: "Guns N' Roses - This I Love", id: "vhvP905I-aQ" },
{ title: "Slayer - Raining Blood", id: "CkaE237oiwE" },
{ title: "AudioSlave - Like a Stone", id: "7QU1nvuxaMA" },

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
const textoCarta = `Há momentos na vida que parecem transcendentes, que tocam o mais profundo da nossa existência. Lembro exatamente do instante em que nossos olhares se cruzaram pela primeira vez, como se, naquele breve segundo, tivesse me feito sentir que existo novamente. Não foi um simples olhar. Foi um encontro de almas, algo que não se explica com palavras, mas que se sente com cada fibra do corpo e da alma. Como se, de repente, algo dentro de mim, algo que estava escondido ou adormecido, voltasse a se acender.

Não sei se o amor é um destino ou uma escolha, mas sei que há algo inegável e inexplicável na maneira como nos encontramos. O que eu entendo é que, talvez, o amor não seja algo que buscamos ativamente, mas algo que simplesmente acontece, como uma força natural do universo. Como um rio que, por mais que mude seu curso, sempre encontra o oceano. Talvez o que sentimos agora seja apenas o começo de algo que transcende o tempo, algo que se constrói sem pressa, mas com uma profundidade que não se pode medir.

Nos momentos que passamos juntos, percebo que o amor, de fato, não é apenas a soma de gestos e palavras. Ele é também o silêncio, a contemplação, o simples fato de estar ao lado de alguém que nos permite ser nós mesmos, sem máscaras. Algo que vai além do entendimento racional, e que só faz sentido no coração.

Eu sei que ainda estamos começando a desvendar o que somos um para o outro, mas me sinto grata por ter te encontrado, por sentir que, de alguma forma, nossas existências se cruzaram na hora exata, como se tudo tivesse sido preparado para esse momento, você é meu fio vermelho do amor..`;

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