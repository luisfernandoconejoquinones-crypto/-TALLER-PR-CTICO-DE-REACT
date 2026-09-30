function Jugadores(){

let Jugadores =[
  { numero: 1, nombre: "Emiliano", apellido: "Martínez", posicion: "Portero", edad: 32 },
  { numero: 2, nombre: "Dani", apellido: "Carvajal", posicion: "Lateral Derecho", edad: 32 },
  { numero: 3, nombre: "Ruben", apellido: "Dias", posicion: "Defensa Central", edad: 27 },
  { numero: 4, nombre: "Virgil", apellido: "van Dijk", posicion: "Defensa Central", edad: 33 },
  { numero: 5, nombre: "Jude", apellido: "Bellingham", posicion: "Mediocampista", edad: 21 },
  { numero: 6, nombre: "Rodri", apellido: "Hernández", posicion: "Mediocampista", edad: 28 },
  { numero: 7, nombre: "Vinicius", apellido: "Júnior", posicion: "Extremo Izquierdo", edad: 24 },
  { numero: 8, nombre: "Federico", apellido: "Valverde", posicion: "Mediocampista", edad: 26 },
  { numero: 9, nombre: "Erling", apellido: "Haaland", posicion: "Delantero Centro", edad: 24 },
  { numero: 10, nombre: "Lionel", apellido: "Messi", posicion: "Delantero", edad: 37 },
  { numero: 11, nombre: "Kylian", apellido: "Mbappé", posicion: "Delantero", edad: 25 },
]

return(
<div>

<h2>Tabla de Jugadores</h2>
<table border= "1">
    <thead>
          <tr>
            <th>Numero</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Posición</th>
            <th>Edad</th>
          </tr>
    </thead>
    <tbody>
        {Jugadores.map((ju)=>(
            <tr key={ju.numero}>
                <td>{ju.numero}</td>
                <td>{ju.nombre}</td>
                <td>{ju.apellido}</td>
                <td>{ju.posicion}</td>
                <td>{ju.edad}</td>
            </tr>


        ))}



    </tbody>

</table>

</div>
)

}
export default Jugadores