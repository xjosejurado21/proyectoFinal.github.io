const squares = document.querySelectorAll(".square");
let currentPlayer = "🤺";


squares.forEach(square => {
  square.addEventListener("click", () => {
    if (!square.innerHTML) {
      square.innerHTML = currentPlayer;
      if (checkWin(currentPlayer)) {
        alert(`¡Jugador ${currentPlayer} ha ganado!`);
        return;
      }
      if (checkDraw()) {
        alert("¡Empate!");
        return;
      }
      currentPlayer = currentPlayer === "🤺" ? "🤸" : "🤺";
    }
  });
});

function checkWin(playerSymbol) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      squares[a].innerHTML === playerSymbol &&
      squares[b].innerHTML === playerSymbol &&
      squares[c].innerHTML === playerSymbol
    ) {
      return true;
    }
  }
  return false;
}
//Para verificar si hay empate
function checkDraw() {
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i].innerHTML) {
      return false;
    }
  }
  return true;
}

// LocalStorage
const localInput = document.getElementById('localInput');
const localButton = document.getElementById('localButton');
const localValue = document.getElementById('localValue');

localButton.addEventListener('click', () => {
  localStorage.setItem('localData', localInput.value);
  localValue.textContent = localStorage.getItem('localData');
});

localValue.textContent = localStorage.getItem('localData');

// SessionStorage
const sessionInput = document.getElementById('sessionInput');
const sessionButton = document.getElementById('sessionButton');
const sessionValue = document.getElementById('sessionValue');

sessionButton.addEventListener('click', () => {
  sessionStorage.setItem('sessionData', sessionInput.value);
  sessionValue.textContent = sessionStorage.getItem('sessionData');
});

sessionValue.textContent = sessionStorage.getItem('sessionData');
window.onload = function() {
  alert("Nombre: Jose Jurado Florido\nCurso: 1ºDAM");
}
document.getElementById('mode-switch').addEventListener('click', function() {
  const body = document.body;
  if (body.classList.contains('dark')) {
      body.classList.remove('dark');
      this.innerHTML = 'Cambiar a modo dia';
  } else {
      body.classList.add('dark');
      this.innerHTML = 'Cambiar a modo noche';
  }
});

function mostrarInformacion() {
  var nombreDelAlumno = "Jose Jurado Florido"; 
  var curso = "1 DAM"; 
  var temaDelProyectoFinal = ""; 

  var mensaje = "Nombre del Alumno: " + nombreDelAlumno + "\nCurso: " + curso + "\nTema del Proyecto Final: " + temaDelProyectoFinal;
  alert(mensaje);
}

   
   
       
    




