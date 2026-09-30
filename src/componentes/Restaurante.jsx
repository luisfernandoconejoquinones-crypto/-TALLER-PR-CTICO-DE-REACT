function Restaurante(){

let Restaurante = [
  { id: 1, nombre: "Bandeja Paisa", categoria: "Plato Fuerte", precio: "$35.000", tiempoPreparacion: "25 min", ingredientePrincipal: "Carne molida, chicharrón, frijoles" },
  { id: 2, nombre: "Ajiaco Santafereño", categoria: "Sopas", precio: "$28.000", tiempoPreparacion: "20 min", ingredientePrincipal: "Pollo, papa, guasca" },
  { id: 3, nombre: "Sancocho de Gallina", categoria: "Sopas", precio: "$30.000", tiempoPreparacion: "30 min", ingredientePrincipal: "Gallina, plátano, yuca" },
  { id: 4, nombre: "Lomo al Trapo", categoria: "Carnes", precio: "$42.000", tiempoPreparacion: "25 min", ingredientePrincipal: "Lomo de res, sal marina" },
  { id: 5, nombre: "Mojarra Frita", categoria: "Pescados", precio: "$38.000", tiempoPreparacion: "20 min", ingredientePrincipal: "Mojarra, patacones, ensalada" },
  { id: 6, nombre: "Empanadas de Papa y Carne", categoria: "Entradas", precio: "$12.000", tiempoPreparacion: "10 min", ingredientePrincipal: "Masa de maíz, carne, papa" },
  { id: 7, nombre: "Ceviche de Camarón", categoria: "Entradas", precio: "$24.000", tiempoPreparacion: "15 min", ingredientePrincipal: "Camarones, salsa rosada, limón" },
  { id: 8, nombre: "Postre de Natas", categoria: "Postres", precio: "$10.000", tiempoPreparacion: "5 min", ingredientePrincipal: "Leche, azúcar, canela" },
  { id: 9, nombre: "Arroz con Coco y Titoté", categoria: "Acompañamientos", precio: "$8.000", tiempoPreparacion: "15 min", ingredientePrincipal: "Arroz, leche de coco" },
  { id: 10, nombre: "Jugo Natural en Agua/Leche", categoria: "Bebidas", precio: "$7.000", tiempoPreparacion: "5 min", ingredientePrincipal: "Fruta natural" }
]

    return(
        <div>
            <h2>Lista de Platos</h2>

      {Restaurante.map((res)=>(
        <div key={res.id}>
            <p><strong>{res.id}</strong></p>
            <p>Nombre:{res.nombre}</p>
            <p>Categoria:{res.categoria}</p>
            <p>Tiempo de Preparacion:{res.tiempoPreparacion}</p>
            <p>Ingrediente Principal:{res.ingredientePrincipal}</p>

        </div>


      ))}

</div>

    )



}
export default Restaurante