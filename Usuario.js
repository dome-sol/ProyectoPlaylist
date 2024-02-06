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
