function Libro() {
  const titulo = "Noche Gris";
  const autor = "Juna Miguel Velasquez";
  const añoPublicacion = 1967;
  const editorial = "Editorial Sudamericana";
  const paginas = 471;

  return (
    <div>
      <h2>Información de un Libro</h2>

      <h1>{titulo}</h1>

      <p><strong>Autor:</strong> {autor}</p>

      <p><strong>Año de publicación:</strong> {añoPublicacion}</p>

      <p><strong>Editorial:</strong> {editorial}</p>
      
      <p><strong>Número de páginas:</strong> {paginas}</p>
    </div>
  );
}

export default Libro;