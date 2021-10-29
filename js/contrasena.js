import { validarContrasena } from "./validaciones.js";

let codigo = document.getElementById('codigo');
let claveI = document.getElementById('claveI');
let claveC = document.getElementById('claveC');
let formulario = document.getElementById('formClave');

claveI.addEventListener('blur', () => { validarCampoRequerido(claveI) });
claveC.addEventListener('blur', () => { validarCampoRequerido(claveC) });
formulario.addEventListener('submit', editarUsuario);
let listaAdmins = null;
let listaInvitados = null;
let listaUsuario = null;

const cargaInicial = () => {
    listaInvitados = JSON.parse(localStorage.getItem('listaInvitadosT')) || [];
    listaAdmins = JSON.parse(localStorage.getItem('listaAdminsT')) || [];
    listaUsuario = JSON.parse(localStorage.getItem('listaUsuarioC')) || [];
    if (listaUsuario.length > 0) {
        cargarUsuario(listaUsuario[0]);
    }
}

function editarUsuario(e) {
    e.preventDefault();
    if (validarContrasena()) {
        actualizarContrasena();
    }

}

function cargarUsuario(usuarioE) {
    codigo.value = `${usuarioE.codigo}`;
}

function actualizarContrasena() {
    let ideUsuario = listaUsuario[0].confirmar;
    if (ideUsuario == undefined) {
        let invitadoE = listaInvitados.find((invitado) => { return invitado.codigo == codigo.value });
        let idx = listaInvitados.indexOf(invitadoE);
        if (claveI.value == claveC.value) {
            invitadoE.nuevaContrasena = claveI.value;
            listaInvitados[idx] = invitadoE;
            localStorage.setItem('listaInvitadosT', JSON.stringify(listaInvitados));
            Swal.fire(
                'Buen trabajo',
                'Se actualizó la contraseña',
                'success'
            )
            limpiarFormulario();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no son iguales',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    } else {
        let adminE = listaAdmins.find((admin) => { return admin.codigo == codigo.value });
        let idx = listaAdmins.indexOf(adminE);
        if (claveI.value == claveC.value) {
            adminE.nuevaContrasena = claveI.value;
            listaAdmins[idx] = adminE;
            localStorage.setItem('listaAdminsT', JSON.stringify(listaAdmins));
            Swal.fire(
                'Buen trabajo',
                'Se actualizó la contraseña',
                'success'
            )
            limpiarFormulario();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no son iguales',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }

    }
}

function limpiarFormulario() {
    formulario.reset();
    codigo.disabled = true;
    codigo.className = 'form-control';
    claveI.className = 'form-control';
    claveC.className = 'form-control';
}

cargaInicial();