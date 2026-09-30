function Videojuegos(){

let Videojuegos =[
    { id: 1, nombre: "frefire", plataforma:"playstore", genero:"disparos", año: 2018},
    { id: 2, nombre: "fornite", plataforma:"steam", genero:"disparos", año: 2012},
    { id: 3, nombre: "minecraf", plataforma:"xbox", genero:"supervivencia", año: 2001},
    { id: 4, nombre: "roblox", plataforma:"playstore", genero:"creatividad", año: 2004},
    { id: 5, nombre: "blod", plataforma:"playstore", genero:"disparos", año: 2022},
    { id: 6, nombre: "clash royale", plataforma:"playstore", genero:"cartas", año: 2007},
    { id: 7, nombre: "conterstrike", plataforma:"steam", genero:"disparos", año: 2007},
    { id: 8, nombre: "cardx", plataforma:"playstore", genero:"conduccion", año: 2001},
]

return(
<div>

<h2>Tabla de Video Juegos</h2>
<table border= "1">
    <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Plataforma</th>
            <th>Genero</th>
            <th>Año</th>
          </tr>
    </thead>
    <tbody>
        {Videojuegos.map((juegos)=>(
            <tr key={juegos.id}>
                <td>{juegos.id}</td>
                <td>{juegos.nombre}</td>
                <td>{juegos.plataforma}</td>
                <td>{juegos.genero}</td>
                <td>{juegos.año}</td>
            </tr>


        ))}



    </tbody>


</table>





</div>
)

}
export default Videojuegos