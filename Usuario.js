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

//Crear dos usuarios con sus respectivas contraseñas
const usuario1 = new Usuario("usuario1", "contrasena1");
const usuario2 = new Usuario("usuario2", "contrasena2");

