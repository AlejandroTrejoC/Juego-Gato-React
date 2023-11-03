const Inicio = ({ sleccionaPersonaje, setSleccionaPersonaje }) => {
  if (sleccionaPersonaje === true) return null;
  
  return (
    <div className="flex flex-col justify-center items-center h-screen text-white">
      <h1 className="font-bold text-7xl mb-10">Gato 🐈</h1>
      <button
        onClick={() => {
          setSleccionaPersonaje(true);
        }}
        className="bg-gray-800 hover:bg-gray-900 border-2 border-gray-800 hover:border-gray-900 p-10 text-3xl rounded-md shadow-xl hover:shadow-2xl"
      >
        Elige tus personajes
      </button>
    </div>
  );
};
export default Inicio;
