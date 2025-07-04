const corazonesContainer = document.querySelector('.corazones');
const titulo = document.getElementById('titulo');
const audio = document.getElementById('miAudio');

function crearCorazon() {
  const corazon = document.createElement('div');
  corazon.classList.add('corazon');
  corazon.textContent = '💖';
  corazon.style.left = Math.random() * 100 + 'vw';
  corazon.style.animationDuration = (Math.random() * 3 + 2) + 's';
  corazonesContainer.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 5000);
}

setInterval(crearCorazon, 500);

const mensajes = [
  "Mugrosita 💕",
  "BBY 💋",
  "Muñequita 🌸",
  "TE AMO ❤️",
  "Mi preciosa ✨",
  "Mi niña 💖",
  "Corazón de melón 🍈",
  "Chiquita 😘",
  "Linda mushashita 🥰"
];

document.body.addEventListener('click', (e) => {
  const mensaje = document.createElement('div');
  mensaje.classList.add('mensaje-random');
  mensaje.textContent = mensajes[Math.floor(Math.random() * mensajes.length)];

  mensaje.style.fontFamily = 'Pacifico, cursive';

  mensaje.style.left = e.clientX + 'px';
  mensaje.style.top = e.clientY + 'px';

  document.body.appendChild(mensaje);

  setTimeout(() => {
    mensaje.remove();
  }, 2000);
});

document.body.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  }
});
