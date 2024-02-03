class Usuario{
    constructor(nombre, contraseña) {
        // Asignar los valores de los parámetros a los atributos de la instancia
        this.nombre = nombre;
        this.contraseña = contraseña;
      }

      iniciarSesion(usuarioInput, contrasenaInput) {
        // Verificar si las credenciales son válidas
        if (usuarioInput === this.usuario && contrasenaInput === this.contrasena) {
            return true; // Credenciales válidas
        } else {
            return false; // Credenciales inválidas
        }
    }




}


class Cancion{

 // Definir el constructor con los parámetros
  constructor(nombre, artista, genero, año, foto) {
    // Asignar los valores de los parámetros a los atributos de la instancia
    this.nombre = nombre;
    this.artista = artista;
    this.genero = genero;
    this.año = año;
    this.foto = foto;
  }

  // Definir el método get para obtener el nombre de la canción
  get nombreCancion() {
    return this.nombre;
  }
// Definir el método get para obtener el artista de la canción
  get artistaCancion() {
    return this.artista;
  }
// Definir el método get para obtener el género de la canción
  get generoCancion() {
    return this.genero;
  }
// Definir el método get para obtener el año de la canción
  get añoCancion() {
    return this.año;
  }
// Definir el método get para obtener la foto de la canción
  get fotoCancion() {
    return this.foto;
  }
}




// Crear dos usuarios con sus respectivas contraseñas
//const usuario1 = new Usuario("usuario1", "contrasena1");
//const usuario2 = new Usuario("usuario2", "contrasena2");










// // Crear una instancia de la clase canción con valores de ejemplo
// let cancion1 = new Cancion("Despacito", "Luis Fonsi", "Pop", 2017, "https://pixabay.com/illustrations/nature-forest-trees-landscape-8280318/");
// // Mostrar los valores de los métodos get de la instancia
// console.log(cancion1.nombreCancion); // Despacito
// console.log(cancion1.artistaCancion); // Luis Fonsi
// console.log(cancion1.generoCancion); // Pop
// console.log(cancion1.añoCancion); // 2017
// console.log(cancion1.fotoCancion); // https://example.com/despacito.jpg










// // MARTES 6 DE FEBRERO         Array de canciones
// const canciones = [
//     { titulo: "Cancion 1", artista: "Artista 1" },
//     { titulo: "Cancion 2", artista: "Artista 2" },
//     { titulo: "Cancion 3", artista: "Artista 3" },
//     { titulo: "Cancion 4", artista:"Artista 1"},
//     { titulo: "Cancion 5", artista:"Artista 2"},
//     { titulo: "Cancion 6", artista:"Artista 3"}
    
// ];

// // Función para realizar la búsqueda
// function search() {
//     const searchTerm = document.getElementById("search-input").value.toLowerCase();
//     const resultsContainer = document.getElementById("search-results");
//     resultsContainer.innerHTML= ""; // Limpiar resultados anteriores o lista inicial de todas las canciones

//     const resultados = canciones.filter(cancion =>
//         cancion.titulo.toLowerCase().includes(searchTerm) || cancion.artista.toLowerCase().includes(searchTerm)
//     );

//     if (resultados.length === 0) {
//         resultsContainer.innerHTML = "<li>No se encontraron resultados.</li>";
//     } else {
//         resultados.forEach(cancion => {

//             const listItem = document.createElement("li");
//             listItem.textContent = `${cancion.titulo} - ${cancion.artista}`;
//             resultsContainer.appendChild(listItem);

//             //Añadir boton de agregar a favoritos a la lista de resultados
//             const addfavButton = document.createElement("button");
//             addfavButton.innerHTML = '<i class="fa fa-heart fa-2x"></i>';
//             addfavButton.addEventListener("click", () => addSongFavorites(favorites)); //el metodo de añadir cancion a favoritos se definira proximamente

//             //añadir boton de agregar a una lista de reproducción
//             const addPlaylistButton = document.createElement("button");
//             addPlaylistButton.innerHTML = '<i class="fa fa-plus-circle fa-thin fa-2x"></i>';
//             addPlaylistButton.addEventListener("click", () => addSongPlaylist(Playlist));//el  metodo de añadir cancion a lista de repro se definira proximamente
            


//             listItem.appendChild(addfavButton);
//             listItem.appendChild(addPlaylistButton);       
//             resultsContainer.appendChild(listItem);
//         });
//     }

// }

