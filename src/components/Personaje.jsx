import { useState } from "react";
import { PERSONAJES_JUGADOR_UNO, PERSONAJES_JUGADOR_DOS } from "../constants";

const Personaje = ({ setIconoPersonaje, jugador, setTurno }) => {
  const [posibleIcono, setPosibleIcono] = useState(0);

  const handleClick = () => {
    const personajes =
      jugador === "uno"
        ? PERSONAJES_JUGADOR_UNO.length - 1
        : PERSONAJES_JUGADOR_DOS.length - 1;
    const iconoNuevo = posibleIcono - 1;

    if (iconoNuevo < 0) {
      setPosibleIcono(personajes);
    } else if (iconoNuevo > personajes) {
      setPosibleIcono(0);
    } else {
      setPosibleIcono(iconoNuevo);
    }
  };

  const handleClickJugar = () => {
    setIconoPersonaje(posibleIcono);
    if (jugador === "uno") {
      setTurno(PERSONAJES_JUGADOR_UNO[posibleIcono]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-44">
      <h2 className="m-10">Personaje 1</h2>
      <div className="flex gap-5">
        <button onClick={handleClick} className="text-5xl">
          👈
        </button>
        <p className="m-10 text-9xl">
          {jugador === "uno"
            ? PERSONAJES_JUGADOR_UNO[posibleIcono]
            : PERSONAJES_JUGADOR_DOS[posibleIcono]}
        </p>
        <button onClick={handleClick} className="text-5xl">
          👉
        </button>
      </div>
      <button
        onClick={handleClickJugar}
        className="bg-gray-800 hover:bg-gray-900 border-2 border-gray-800 hover:border-gray-900 p-10 text-3xl rounded-md shadow-xl hover:shadow-2xl"
      >
        Seleccionar
      </button>
    </div>
  );
};
export default Personaje;
