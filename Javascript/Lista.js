const Cancion = require('/Cancion'); //IMPORTAR CANCION PARA PODER CREAR EL ARREGLO

const catalogo=Cancion.canciones;
class Lista {
    constructor(nombre,_catalogo) {
      this.nombre = nombre;
      this.catalogo = this.catalogo;
    }
  
    // Método para añadir una canción a la lista
    agregarCancion(cancion) {
      this.catalogo.push(cancion);
    }
  
    // Método para borrar una canción de la lista
    borrarCancion(index) {
      if (index >= 0 && index < this.canciones.length) {
        this.canciones.splice(index, 1);
      }
    }

  }

catalogo.forEach(Cancion => {
    console.log(Cancion);
});
  
  