function Animales() {

  let animales = [
    { nombre: "León", especie: "Panthera leo", habitad: "Sabana" },
    { nombre: "Tigre", especie: "Panthera tigris", habitad: "Selva" },
    { nombre: "Elefante", especie: "Loxodonta africana", habitad: "Sabana" },
    { nombre: "Águila", especie: "Aquila chrysaetos", habitad: "Montañas" },
    { nombre: "Delfín", especie: "Delphinidae", habitad: "Océano" },
    { nombre: "Oso Panda", especie: "Ailuropoda melanoleuca", habitad: "Bosques de bambú" },
    { nombre: "Lobo", especie: "Canis lupus", habitad: "Bosques y tundra" },
    { nombre: "Jirafa", especie: "Giraffa camelopardalis", habitad: "Sabana" },
    { nombre: "Canguro", especie: "Macropus", habitad: "Praderas" },
    { nombre: "Jaguar", especie: "Panthera onca", habitad: "Selva tropical" }
  ]

  return (
    <div>
      <h2>
        Lista de Animales 
        </h2>
      <ul>
        {animales.map((animal, index) => (
          <li key={index}>
            <strong>Nombre: {animal.nombre}</strong> <br/>
             Especie: {animal.especie}<br/>
             Hábitat: {animal.habitad}<br/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Animales