class Lista {
    constructor(nombre,_canciones) {
      this.nombre = nombre;
      this.canciones = [];
    }
  
    // Método para añadir una canción a la lista
    agregarCancion(cancion) {
      this.canciones.push(cancion);
    }
  
    // Método para borrar una canción de la lista
    borrarCancion(index) {
      if (index >= 0 && index < this.canciones.length) {
        this.canciones.splice(index, 1);
      }
    }
  }
  