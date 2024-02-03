
// Array de canciones
const canciones = [
    { titulo: "Cancion 1", artista: "Artista 1" },
    { titulo: "Cancion 2", artista: "Artista 2" },
    { titulo: "Cancion 3", artista: "Artista 3" },
    { titulo: "Cancion 4", artista:"Artista 1"},
    { titulo: "Cancion 5", artista:"Artista 2"},
    { titulo: "Cancion 6", artista:"Artista 3"}
    
];

// Función para realizar la búsqueda
function search() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML= ""; // Limpiar resultados anteriores o lista inicial de todas las canciones

    const resultados = canciones.filter(cancion =>
        cancion.titulo.toLowerCase().includes(searchTerm) || cancion.artista.toLowerCase().includes(searchTerm)
    );

    if (resultados.length === 0) {
        resultsContainer.innerHTML = "<li>No se encontraron resultados.</li>";
    } else {
        resultados.forEach(cancion => {

            const listItem = document.createElement("li");
            listItem.textContent = `${cancion.titulo} - ${cancion.artista}`;
            resultsContainer.appendChild(listItem);

            //Añadir boton de agregar a favoritos a la lista de resultados
            const addfavButton = document.createElement("button");
            addfavButton.innerHTML = '<i class="fa fa-heart fa-2x"></i>';
            addfavButton.addEventListener("click", () => addSongFavorites(favorites)); //el metodo de añadir cancion a favoritos se definira proximamente

            //añadir boton de agregar a una lista de reproducción
            const addPlaylistButton = document.createElement("button");
            addPlaylistButton.innerHTML = '<i class="fa fa-plus-circle fa-thin fa-2x"></i>';
            addPlaylistButton.addEventListener("click", () => addSongPlaylist(Playlist));//el  metodo de añadir cancion a lista de repro se definira proximamente
            


            listItem.appendChild(addfavButton);
            listItem.appendChild(addPlaylistButton);       
            resultsContainer.appendChild(listItem);
        });
    }

}

