function Cine (){

let Nombrecine ="Cine DeLUX"
let Ubicacion = "Centro Comencial Campanario"
let Promocion ="Miercoles 2x1 En Todas Las Funciones"

let cartelera = [
    { id: 1, titulo: "Avatar 3", genero: "Ciencia Ficción", duracion: "190 min", sala: "Sala 1 (3D)" },
    { id: 2, titulo: "Batman: Parte II", genero: "Acción / Crimen", duracion: "165 min", sala: "Sala 2 (IMAX)" },
    { id: 3, titulo: "Intensamente 2", genero: "Animación / Familiar", duracion: "100 min", sala: "Sala 3" },
    { id: 4, titulo: "Gladiador 2", genero: "Acción / Drama", duracion: "150 min", sala: "Sala 4" },
    { id: 5, titulo: "Alien: Romulus", genero: "Terror / Sci-Fi", duracion: "119 min", sala: "Sala 5" },
    { id: 6, titulo: "Deadpool & Wolverine", genero: "Comedia / Acción", duracion: "128 min", sala: "Sala 6" },
    { id: 7, titulo: "Dune: Parte 2", genero: "Ciencia Ficción", duracion: "166 min", sala: "Sala 7 (VIP)" },
    { id: 8, titulo: "Kung Fu Panda 4", genero: "Animación / Aventura", duracion: "94 min", sala: "Sala 8" }
  ]

return(
<div>
<section>
        <h1>{Nombrecine}</h1>
        <h2>Información General</h2>
        <p><strong>Ubicación:</strong> {Ubicacion}</p>
        <p><strong>Promoción especial:</strong> {Promocion}</p>
      </section>
      <hr/>
      <section>
        <h2>Cartelera Principal</h2>
        <table border="1">
            <thead>
                <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Genero</th>
                <th>Duracion</th>
                <th>Sala</th>
                </tr>
            </thead>
            <tbody>
                {cartelera.map((peli)=>(
                    <tr key={peli.id}>
                        <td>{peli.id}</td>
                        <td>{peli.titulo}</td>
                        <td>{peli.genero}</td>
                        <td>{peli.duracion}</td>
                        <td>{peli.sala}</td>
                    </tr>
                
                ))} 
         </tbody>  
        </table>
      </section>

      <hr />

      <section>

        <h2>Dulceria y Servivios</h2>

        <ul>
        <li>Combo Pareja: Crispetas Grandes + 2 Gaseosas</li>
        <li>Combo Individual: Crispetas Medianas + 1 Gaseosa + Perro Caliente</li>
        <li>Gafas 3D reusables</li>
        <li>Reserva de salas para eventos privados</li>
       </ul>
      </section>

</div>

    
)

}
export default Cine