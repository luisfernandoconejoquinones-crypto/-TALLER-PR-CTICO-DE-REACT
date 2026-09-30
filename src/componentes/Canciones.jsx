function Canciones() {
  
  let canciones = [
   { id: 1, titulo: "Medallo", artista: "Blessd", album: "Hecho en Medellín", año: 2021 },
    { id: 2, titulo: "Quien TV", artista: "Blessd", album: "Siempre Blessd", año: 2022 },
    { id: 3, titulo: "Las Moras", artista: "Blessd", album: "Siempre Blessd", año: 2022 },
    { id: 4, titulo: "Mambo", artista: "Kris R", album: "Mambo Single", año: 2023 },
    { id: 5, titulo: "Puro Barrio", artista: "Kris R", album: "Street", año: 2022 },
    { id: 6, titulo: "Carabina", artista: "Kris R", album: "Carabina Single", año: 2023 },
    { id: 7, titulo: "Ziploc", artista: "Carabina", album: "Calle", año: 2023 },
    { id: 8, titulo: "Frecuencia", artista: "Carabina", album: "Frecuencia Single", año: 2024 }
  ]

  return (
    <div>
      <h2> Tabla de Canciones</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {canciones.map((cancion) => (
            <tr key={cancion.id}>
              <td>{cancion.id}</td>
              <td>{cancion.titulo}</td>
              <td>{cancion.artista}</td>
              <td>{cancion.album}</td>
              <td>{cancion.año}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Canciones