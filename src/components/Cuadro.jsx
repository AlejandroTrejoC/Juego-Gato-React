const Cuadro = ({ children, actualizarTablero, index, turno }) => {
  const className =
    turno === undefined
      ? "flex justify-center items-center w-32 h-32 border-4 rounded-md border-gray-900 cursor-pointer"
      : turno === true
      ? "flex justify-center items-center w-32 h-32 rounded-md bg-gray-900"
      : "flex justify-center items-center w-32 h-32 rounded-md";
  const handleClickSeleccionar = () => {
    actualizarTablero(index);
  };

  return (
    <div key={index} onClick={handleClickSeleccionar} className={className}>
      <p className="text-5xl">{children}</p>
    </div>
  );
};
export default Cuadro;
