function Ciudades() {

  let ciudades = [
    "Bogotá",
    "Medellín",
    "Cali",
    "Barranquilla",
    "Cartagena",
    "Bucaramanga",
    "Pereira",
    "Santa Marta",
    "Manizales",
    "Pasto"
  ]

  return (
    <div>
      <h2>Lista de Ciudades</h2>

      <ul>
        {ciudades.map((ciudad, index) => (
          <li key={index}>
          Nombre: {ciudad}</li>
        ))}
      </ul>
    </div>
  )
}

export default Ciudades