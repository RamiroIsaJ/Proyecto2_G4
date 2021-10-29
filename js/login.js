import { validarCampoRequerido, validarLogin } from "./validaciones.js";

let idUsuario = document.getElementById('usuario');
let contrasena = document.getElementById('password');
let tipoUsuario = document.getElementsByName('usuarios');
let formulario = document.getElementById('formPersonas');

// funciones cuando sucede un evento en el html
idUsuario.addEventListener('blur', () => { validarCampoRequerido(idUsuario) });
contrasena.addEventListener('blur', () => { validarCampoRequerido(contrasena) });
formulario.addEventListener('submit', loginUsuario);

function definirUsuario(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            return input[i].value;
        }
    }
}

function loginUsuario(e) {
    e.preventDefault();
    if (validarLogin()) {
        let usuario = definirUsuario(tipoUsuario);
        console.log(usuario)
    }
}