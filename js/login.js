import { validarCampoRequerido, validarLogin } from "./validaciones.js";

let idUsuario = document.getElementById('usuario');
let contrasena = document.getElementById('password');
let tipoUsuario = document.getElementsByName('usuarios');
let formulario = document.getElementById('formPersonas');
let saludo = document.getElementById('iniSes');
let panel1 = document.getElementById('panel1');
let panel2 = document.getElementById('panel2');
let panelTexto = document.getElementById('nombreU');
let cerrar = document.getElementById('cerrarS');

// funciones cuando sucede un evento en el html
idUsuario.addEventListener('blur', () => { validarCampoRequerido(idUsuario) });
contrasena.addEventListener('blur', () => { validarCampoRequerido(contrasena) });
cerrar.addEventListener('click', () => { cerrarSesion()});
formulario.addEventListener('submit', loginUsuario);
let usuario = 1;
let listaInvitados = null;
let listaAdmins = null;

function definirUsuario(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            return input[i].value;
        }
    }
}

const cargaInicial = () => {
    listaInvitados = JSON.parse(localStorage.getItem('listaInvitadosT')) || [];
    listaAdmins = JSON.parse(localStorage.getItem('listaAdminsT')) || [];
}

function loginUsuario(e) {
    e.preventDefault();
    if (validarLogin()) {
        usuario = definirUsuario(tipoUsuario);
        if (usuario == 1) {
            loginInvitado();
        } else {
            loginAdmin();
        }
    }
}

function loginInvitado() {
    let invitadoE = listaInvitados.find((invitado) => { return invitado.codigo == idUsuario.value });
    if (invitadoE != undefined) {
        if (invitadoE.contrasena == contrasena.value) {
            iniSesion(invitadoE);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La contraseña es incorrecta',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario no existe',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    limpiarFormulario();
}

function loginAdmin() {
    let adminE = listaAdmins.find((admin) => { return admin.codigo == idUsuario.value });
    if (adminE != undefined) {
        if (adminE.contrasena == contrasena.value) {
            iniSesion(adminE);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La contraseña es incorrecta',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario no existe',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    limpiarFormulario();
}

function iniSesion(usuarioC){
    saludo.innerHTML = `Hola, ${usuarioC.codigo}`;
    panel1.className = "contenedor2 text-center my-5 d-none";
    panel2.className = "text-center container borderF my-5";
    if (usuario ==  1){
        panelTexto.innerHTML = `Invitado: ${usuarioC.codigo}`;
        
    }else{
        panelTexto.innerHTML = `Admin: ${usuarioC.codigo}`;
    } 
}

function limpiarFormulario() {
    tipoUsuario[0].checked = true;
    formulario.reset();
    idUsuario.className = 'form-control';
    contrasena.className = 'form-control';
}
cargaInicial();