// Proyecto Coderhouse de Jesus Janeiro **Juego de Piedra papel o tijera**.

// Se define la funcion juegoUsuario que recibe como parametro la eleccion del usuario y se usa un switch para determinar que eleccion hizo el usuario por medio de alertas

const juegoUsuario = (eleccionUsuario) => {
  switch (eleccionUsuario) {
    case "papel":
      alert("Elegiste Papel");
      return "papel";
    case "piedra":
      alert("Elegiste Piedra");
      return "piedra";
    case "tijera":
      alert("Elegiste Tijera");
      return "tijera";
    default:
      alert("Elección no válida, intenta de nuevo");
      return null;
  }
};

// Se define la funcion juegoMaquina que recibe como parametro la eleccion de la maquina y se usa un switch para determinar que eleccion hizo la maquina por medio de alertas
const juegoMaquina = (eleccionMaquina) => {
  switch (eleccionMaquina) {
    case 0:
      alert("La máquina eligió Piedra");
      return "piedra";
    case 1:
      alert("La máquina eligió Papel");
      return "papel";
    case 2:
      alert("La máquina eligió Tijera");
      return "tijera";
  }
};

// Se define la funcion jugar que llama a las funciones juegoUsuario y juegoMaquina y compara las elecciones de ambos para determinar el ganador.
const jugar = () => {
  const eleccionUsuario = prompt("Elige: Piedra, Papel o Tijera").toLowerCase();
  const usuario = juegoUsuario(eleccionUsuario);
  if (!usuario) {
    return;
  }

  const eleccionMaquina = Math.floor(Math.random() * 3);
  const maquina = juegoMaquina(eleccionMaquina);

  if (usuario === maquina) {
    alert("Empate");
    return;
  }

  switch (usuario) {
    case "piedra":
      if (maquina === "tijera") {
        alert("Ganaste");
      } else {
        alert("Perdiste");
      }
      break;
    case "papel":
      if (maquina === "piedra") {
        alert("Ganaste");
      } else {
        alert("Perdiste");
      }
      break;
    case "tijera":
      if (maquina === "papel") {
        alert("Ganaste");
      } else {
        alert("Perdiste");
      }
      break;
  }
};

const $recargar = document.querySelector(".recargar-btn");

$recargar.addEventListener("click", () => {
  jugar();
});

jugar();
