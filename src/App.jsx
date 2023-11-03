import { useState } from "react";
import Inicio from "./components/Inicio";
import Personajes from "./components/Personajes";
import Juego from "./components/Juego";

function App() {
  const [sleccionaPersonaje, setSleccionaPersonaje] = useState(false);
  const [iconoPersonajeUno, setIconoPersonajeUno] = useState(null);
  const [iconoPersonajeDos, setIconoPersonajeDos] = useState(null);
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState(null);
  const [ganador, setGanador] = useState(null);

  const reiniciarJuego = () => {
    setSleccionaPersonaje(false);
    setIconoPersonajeUno(null);
    setIconoPersonajeDos(null);
    setTablero(Array(9).fill(null));
    setTurno(null);
    setGanador(null);
  };

  const revancha = () => {
    // Hacer la revancha con los mimsmos jugadores
  };

  // LocalStorage

  return (
    <>
      <Inicio
        sleccionaPersonaje={sleccionaPersonaje}
        setSleccionaPersonaje={setSleccionaPersonaje}
      ></Inicio>
      <Personajes
        iconoPersonajeUno={iconoPersonajeUno}
        setIconoPersonajeUno={setIconoPersonajeUno}
        iconoPersonajeDos={iconoPersonajeDos}
        setIconoPersonajeDos={setIconoPersonajeDos}
        setTurno={setTurno}
      ></Personajes>
      <Juego
        iconoPersonajeUno={iconoPersonajeUno}
        iconoPersonajeDos={iconoPersonajeDos}
        ganador={ganador}
        setGanador={setGanador}
        reiniciarJuego={reiniciarJuego}
        tablero={tablero}
        setTablero={setTablero}
        turno={turno}
        setTurno={setTurno}
      ></Juego>
    </>
  );
}

export default App;
