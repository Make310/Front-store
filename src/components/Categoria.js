function Categoria({ nombre, imagen }) {
  return (
    <div className="categoria">
      <img src={imagen} alt={nombre} className="categoria-imagen" />
      <h3>{nombre}</h3>
    </div>
  );
}

export default Categoria;
