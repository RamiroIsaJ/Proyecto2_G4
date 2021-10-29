export class UsuarioN{
    constructor(){
        this.id = null;
        this.correo = null;
        this.anio = null;
        this.contrasena = null;
    }

    set nuevoId(id){
        this.id = id;
    }
    set nuevoCorreo(correo){
        this.correo = correo;
    }
    set nuevoAnio(anio){
        this.anio = anio;
    }
    set nuevaContrasena(contrasena){
        this.contrasena = contrasena;
    }

    get mostrarId(){
        return this.id;
    }
    get mostrarCorreo(){
        return this.correo;
    }
    get mostrarAnio(){
        return this.anio;
    }
    get mostrarContrasena(){
        return this.contrasena;
    }

}