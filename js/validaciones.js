// script para validar los campos de los formularios
// mediante expresiones regulares

export function validarCodigo(input){
    if (input.value.trim() != "" && input.value.trim().length >= 3){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}


export function validarNumeros(input){
    let patron = /^[0-9]{2,3}$/;
    if (patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarAnio(input){
    let patron = /^[0-9]{4}$/;
    if (patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarCorreo(input){
    let patron = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarCampoRequerido(input){
    if (input.value.trim().length > 0){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarGeneralP(){
    let alerta = document.getElementById('msjAlerta');
    if (validarCodigo(codigo) && validarCampoRequerido(nombre) && validarCampoRequerido(autor) && validarNumeros(paginas) 
        && validarCampoRequerido(direccion) ){
        alerta.className = "alert alert-danger mt-4 d-none";
        return true;
    }else{
        alerta.className = "alert alert-danger mt-4";
        alerta.innerHTML = "No se puede ingresar. Datos incorrectos.!";
        return false;
    }
    
}

export function validarGeneralU(){
    let alerta = document.getElementById('msjAlerta');
    if (validarCampoRequerido(nombre) && validarNumeros(peso) && validarNumeros(altura) && validarAnio(anio)){
        alerta.className = "alert alert-danger mt-4 d-none";
        return true;
    }else{
        alerta.className = "alert alert-danger mt-4";
        alerta.innerHTML = "No se puede ingresar. Datos incorrectos.!";
        return false;
    }
    
}
