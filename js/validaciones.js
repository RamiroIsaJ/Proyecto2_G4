export function validarCampoRequerido(input){
    if (input.value.trim().length > 0){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

// expresiones regulares
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

export function validarGeneral(){
    let alerta = document.getElementById('msjAlerta');
    if (validarCampoRequerido(nombre) && validarNumeros(peso) && validarNumeros(altura) && validarAnio(anio)){
        alerta.className = "alert alert-danger mt-4 d-none";
        return true;
    }else{
        alerta.className = "alert alert-danger mt-4";
        return false;
    }
    
}
