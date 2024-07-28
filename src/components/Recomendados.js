import Libro from "./Libro";

const libros = [
  {
    titulo: "El Alquimista",
    autor: "Paulo Coelho",
    precio: "$10.99",
    imagen: "/cards/alquimista.png",
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    precio: "$10.99",
    imagen: "/cards/soledad.png",
  },
  {
    titulo: "Sapiens: De animales a dioses",
    autor: "Yuval Noah Harari",
    precio: "$10.99",
    imagen: "/cards/sapiens.png",
  },
];

function Recomendados() {
  return (
    <div className="libros-recomendados">
      <h2>Libros recomendados</h2>
      <div className="libros-grid">
        {libros.map((libro, index) => (
          <Libro
            key={libro.titulo}
            titulo={libro.titulo}
            autor={libro.autor}
            precio={libro.precio}
            imagen={libro.imagen}
            isLarge={index === 0} // Marca el primer libro como el grande
          />
        ))}
      </div>
    </div>
  );
}

export default Recomendados;
