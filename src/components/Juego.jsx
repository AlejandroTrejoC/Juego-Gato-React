import Cuadro from "./Cuadro"; // Componentes
import ModalGanador from "./ModalGanador";
import { revisaGanador, empateGame } from "../logic/board"; // Funcs aux
import { PERSONAJES_JUGADOR_DOS, PERSONAJES_JUGADOR_UNO } from "../constants";

const Juego = ({
  iconoPersonajeUno,
  iconoPersonajeDos,
  ganador,
  setGanador,
  reiniciarJuego,
  tablero,
  setTablero,
  turno,
  setTurno,
}) => {
  const actualizarTablero = (index) => {
    if (tablero[index] || ganador !== null) return null;
    const nuevoTablero = [...tablero];
    nuevoTablero[index] = turno;
    setTablero(nuevoTablero);

    setTurno(
      turno === PERSONAJES_JUGADOR_UNO[iconoPersonajeUno]
        ? PERSONAJES_JUGADOR_DOS[iconoPersonajeDos]
        : PERSONAJES_JUGADOR_UNO[iconoPersonajeUno]
    );

    const nuevoGanador = revisaGanador(nuevoTablero);
    if (nuevoGanador) {
      setGanador(nuevoGanador);
    } else if (empateGame(nuevoTablero)) {
      setGanador(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white">
      <h1 className="font-bold text-7xl mb-10">Gato 😺</h1>
      <div className="grid grid-cols-3 gap-3">
        {tablero.map((cuadro, index) => (
          <Cuadro
            key={index}
            actualizarTablero={actualizarTablero}
            index={index}
          >
            {cuadro}
          </Cuadro>
        ))}
      </div>
      <div className="flex mt-10">
        <Cuadro
          turno={
            turno === PERSONAJES_JUGADOR_UNO[iconoPersonajeUno] ? true : false
          }
        >
          {PERSONAJES_JUGADOR_UNO[iconoPersonajeUno]}
        </Cuadro>
        <Cuadro
          turno={
            turno === PERSONAJES_JUGADOR_DOS[iconoPersonajeDos] ? true : false
          }
        >
          {PERSONAJES_JUGADOR_DOS[iconoPersonajeDos]}
        </Cuadro>
      </div>
      <ModalGanador
        ganador={ganador}
        turno={
          turno === PERSONAJES_JUGADOR_UNO
            ? PERSONAJES_JUGADOR_DOS[iconoPersonajeDos]
            : PERSONAJES_JUGADOR_UNO[iconoPersonajeUno]
        }
        reiniciarJuego={reiniciarJuego}
      ></ModalGanador>
    </div>
  );
};
export default Juego;
