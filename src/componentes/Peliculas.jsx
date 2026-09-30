function Peliculas (){

    let Peliculas = [
  { id: 1, titulo: "Inception", director: "Christopher Nolan", genero: "Ciencia Ficción", año: 2010, duracion: "148 min" },
  { id: 2, titulo: "The Dark Knight", director: "Christopher Nolan", genero: "Acción", año: 2008, duracion: "152 min" },
  { id: 3, titulo: "Pulp Fiction", director: "Quentin Tarantino", genero: "Crimen", año: 1994, duracion: "154 min" },
  { id: 4, titulo: "Interstellar", director: "Christopher Nolan", genero: "Ciencia Ficción", año: 2014, duracion: "169 min" },
  { id: 5, titulo: "Matrix", director: "Lana y Lilly Wachowski", genero: "Ciencia Ficción", año: 1999, duracion: "136 min" },
  { id: 6, titulo: "Gladiator", director: "Ridley Scott", genero: "Acción", año: 2000, duracion: "155 min" },
  { id: 7, titulo: "Avatar", director: "James Cameron", genero: "Ciencia Ficción", año: 2009, duracion: "162 min" },
  { id: 8, titulo: "Coco", director: "Lee Unkrich", genero: "Animación", año: 2017, duracion: "105 min" },
  { id: 9, titulo: "Whiplash", director: "Damien Chazelle", genero: "Drama", año: 2014, duracion: "106 min" },
  { id: 10, titulo: "Spider-Man: Into the Spider-Verse", director: "Bob Persichetti", genero: "Animación", año: 2018, duracion: "117 min" }
]

    return(
        <div>
            <h2>
                Lista de Peliculas
            </h2>
            <ul>
                {Peliculas.map((pelis)=>(
                    <li key={pelis.id}>
                        <strong>{pelis.id}</strong>
                        Titulo: {pelis.titulo}<br/>
                        Director: {pelis.director}<br/>
                        Genero: {pelis.genero}<br/>
                        Año: {pelis.año}<br/>
                        Duracion: {pelis.duracion}<br/>
                    </li>


                ))}
              
            </ul>





        </div>
    )

}
export default Peliculas