// ------------------------
// AdulTech – script.js (versión para estructura de carpetas)
// ------------------------
let currentStep = '';
const IMG_BASE = 'assets/img/';

function toggleFontSize() {
  document.body.classList.toggle('large-font');
  const isLarge = document.body.classList.contains('large-font');

  const btn = document.getElementById('btnLetra') || document.querySelector('.accessibility button');
  if (btn) {
    btn.innerText = isLarge ? '🔠 Reducir letra' : '🔠 Aumentar letra';
    btn.setAttribute('aria-label', isLarge ? 'Reducir tamaño de letra' : 'Aumentar tamaño de letra');
  }
}

function speakCurrent() {
  const el = document.getElementById('instructionText');
  if (!el) return;
  const text = el.innerText.trim();
  if (!text) return;

  window.speechSynthesis.cancel();
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'es-ES';
  window.speechSynthesis.speak(speech);
}

function showInstructions(topic) {
  let text = '';
  let contentHTML = '';

  switch (topic) {
    case 'whatsapp':
      text = 'Para enviar un mensaje: 1. Abra WhatsApp. 2. Toque el contacto. 3. Escriba y toque el botón de enviar (avión de papel).';
      contentHTML = '<img src="' + IMG_BASE + 'whatsapp1.png" alt="Instrucciones para enviar un mensaje por WhatsApp"><br><a href="https://youtu.be/By1Ukgh_Ihw" target="_blank" rel="noopener">Ver video tutorial, haciendo click en este texto</a>';
      break;
    case 'gmail':
      text = 'Para revisar correos: 1. Abra Gmail. 2. Toque el mensaje. 3. Lea el contenido. Puede responder abajo.';
      contentHTML = '<img src="' + IMG_BASE + 'gmail1.png" alt="Instrucciones para revisar correos en Gmail"><br><a href="https://youtu.be/9yhzvTT6x1k" target="_blank" rel="noopener">Ver video tutorial, haciendo click en este texto</a>';
      break;
    case 'llamada':
      text = 'Para hacer una llamada: 1. Abra la app Teléfono. 2. Toque el ícono de llamar. 3. Marque el número o elija un contacto.';
      contentHTML = '<img src="' + IMG_BASE + 'llamada1.png" alt="Instrucciones para hacer una llamada"><br><a href="https://youtu.be/PKyhDjWT1Jk" target="_blank" rel="noopener">Ver video tutorial, haciendo click en este texto</a>';
      break;
    default:
      text = 'Tema no reconocido.';
      contentHTML = '<img src="' + IMG_BASE + 'error.png" alt="Tema no reconocido. Intente nuevamente.">';
  }

  const instructionTextElem = document.getElementById('instructionText');
  const instructionImageElem = document.getElementById('instructionImage');

  if (instructionTextElem) {
    instructionTextElem.innerText = text;
  }

  if (instructionImageElem) {
    instructionImageElem.innerHTML = contentHTML;
  }

  // ⚠️ Cambio: Desplaza la vista a la sección de instrucciones
  const instructionSection = document.getElementById('instructionText');
  if (instructionSection) {
    instructionSection.scrollIntoView({ behavior: 'instant' });
  }

  speakCurrent();
}