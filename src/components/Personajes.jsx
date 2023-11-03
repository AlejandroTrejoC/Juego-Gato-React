import Personaje from "./Personaje";

const Personajes = ({
  iconoPersonajeUno,
  setIconoPersonajeUno,
  iconoPersonajeDos,
  setIconoPersonajeDos,
  setTurno,
}) => {
  if (iconoPersonajeUno !== null && iconoPersonajeDos !== null) return null; // Si no eligen jugador

  return (
    <div className="flex justify-center text-white text-3xl h-screen">
      <Personaje
        setTurno={setTurno}
        setIconoPersonaje={setIconoPersonajeUno}
        jugador={"uno"}
      ></Personaje>
      <Personaje
        setIconoPersonaje={setIconoPersonajeDos}
        jugador={"dos"}
      ></Personaje>
    </div>
  );
};
export default Personajes;
