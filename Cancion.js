
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

 // Crear una instancia de la clase canción con valores de ejemplo
const canciones = [ cancion1, cancion2 , cancion3, cancion4];
 let cancion1 = new Cancion("Caprice 24 ", "David Garrett", "Classic", 2015, "../Portadas/cancion1.jpeg");
 let cancion2 = new Cancion("Caprice 25 ", "David Garrett", "Classic", 2015, "../Portadas/cancion1.jpeg");
 let cancion3 = new Cancion("Caprice 26 ", "David Tarrett", "Classic", 2015, "../Portadas/cancion1.jpeg");
 let cancion3 = new Cancion("Caprice 27 ", "David Tarrett", "Classic", 2015, "../Portadas/cancion1.jpeg");



