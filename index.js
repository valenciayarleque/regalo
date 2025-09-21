// 💛 Ajusta la fecha correcta aquí (formato DDMMYYYY)
const fechaCorrecta = "2025";

let entrada = "";

// --- Funciones de la calculadora ---
function agregarNumero(num) {
  if (entrada.length < 8) {
    entrada += num;
    actualizarDisplay();
  }
}

function borrar() {
  entrada = entrada.slice(0, -1);
  actualizarDisplay();
}

function limpiar() {
  entrada = "";
  actualizarDisplay();
}

function actualizarDisplay() {
  document.getElementById("display").innerText = entrada || "❤️❤️❤️";
}

// --- Verificar fecha ---
function verificarFecha() {
  if (entrada === fechaCorrecta) {
    mostrarFlores("modalExito");
  } else {
    mostrarFlores("modalError");
  }
}

// --- Mostrar flores en los modales ---
function mostrarFlores(idModal) {
  const modal = document.getElementById(idModal);
  const contenedor = modal.querySelector(".flores");
  contenedor.innerHTML = "";

  const simbolos = ["🌸", "💛", "💖", "🌼", "💕"];

  for (let i = 0; i < 15; i++) {
    let span = document.createElement("span");
    span.innerText = simbolos[Math.floor(Math.random() * simbolos.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = (3 + Math.random() * 3) + "s";
    contenedor.appendChild(span);
  }

  modal.classList.remove("oculto");
}

// --- Funciones de modales ---
function irASorpresa() {
  window.location.href = "sorpresa.html"; // Cambia a tu página sorpresa
}

function cerrarError() {
  document.getElementById("modalError").classList.add("oculto");
  limpiar();
}

// --- Corazones flotando en el fondo ---
const contenedorFondo = document.createElement("div");
contenedorFondo.classList.add("fondo-corazones");
document.body.appendChild(contenedorFondo);

const simbolosFondo = ["💖", "💗", "💘", "💕", "💞"];

function crearCorazonFondo() {
  let span = document.createElement("span");
  span.innerText = simbolosFondo[Math.floor(Math.random() * simbolosFondo.length)];
  span.style.left = Math.random() * 100 + "%";
  let scale = 0.5 + Math.random() * 0.7;
  span.style.setProperty("--scale", scale);
  span.style.fontSize = 20 * scale + "px";
  let opacity = 0.4 + Math.random() * 0.6;
  span.style.setProperty("--opacity", opacity);
  let duracion = 5 + Math.random() * 5;
  span.style.animationDuration = duracion + "s";
  contenedorFondo.appendChild(span);

  setTimeout(() => {
    contenedorFondo.removeChild(span);
  }, duracion * 1000);
}

// Crear corazones cada 300ms
setInterval(crearCorazonFondo, 300);
