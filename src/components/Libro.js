function Libro({ titulo, autor, precio, imagen, isLarge }) {
  return (
    <div className={`libro ${isLarge ? "large" : ""}`}>
      <img src={imagen} alt={titulo} className="libro-imagen" />
      <h3>{titulo}</h3>
      <p>{autor}</p>
      <p>{precio}</p>
    </div>
  );
}

export default Libro;
