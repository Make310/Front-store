import Categoria from "./Categoria";

const categorias = [
  { nombre: "Ficción", imagen: "/cards/ficcion.png" },
  { nombre: "Ciencia", imagen: "/cards/ciencia.png" },
  { nombre: "Historia", imagen: "/cards/historia.png" },
  { nombre: "Romance", imagen: "/cards/romance.png" },
  { nombre: "Misterio", imagen: "/cards/misterio.png" },
  { nombre: "Tecnología", imagen: "/cards/tecnologia.png" },
];

function Categorias() {
  return (
    <div className="categorias">
      <h2>Categorías destacadas</h2>
      <div className="grid">
        {categorias.map((categoria) => (
          <Categoria
            key={categoria.nombre}
            nombre={categoria.nombre}
            imagen={categoria.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Categorias;
