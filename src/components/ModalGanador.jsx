const ModalGanador = ({ ganador, turno, reiniciarJuego }) => {
  if (ganador === null) return null;

  return (
    <div className="fixed inset-0 flex flex-col gap-10 items-center justify-center bg-black bg-opacity-80">
      <h2 className="text-white text-5xl">
        {ganador === true ? "Ganador 👑" : "Empate 😕"}
      </h2>
      <div className="flex justify-center items-center w-52 h-52 bg-gray-700 rounded-md">
        <p className="text-9xl">{turno}</p>
      </div>
      <button
        onClick={reiniciarJuego}
        className="bg-gray-800 hover:bg-gray-900 border-2 border-gray-800 hover:border-gray-900 p-10 text-3xl rounded-md shadow-xl hover:shadow-2xl"
      >
        Reiniciar juego
      </button>
    </div>
  );
};
export default ModalGanador;
