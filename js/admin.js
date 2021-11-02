import {validarCampoRequerido, validarNumeros, validarAnio, validarGeneral} from "./validaciones.js";
import {PersonaN} from "./persona_class.js";

//traer los campos a validar
let nombre = document.getElementById('nombre');
let radio = document.querySelectorAll('input[name="sexo"]');
let peso = document.querySelector('#peso');
let altura = document.getElementById('altura');
let anio = document.getElementById('anio');
let formulario = document.getElementById('formPersonas');
let generacion = document.getElementById('genera');
let mayor = document.getElementById('mayor');
let mostrar = document.getElementById('mostrar');

let listaTotal = document.getElementById('listaTotal');
let listaPersonas = [];

// funciones cuando sucede evento blur en el html
nombre.addEventListener('blur', () => {validarCampoRequerido(nombre)});
peso.addEventListener('blur', () => {validarNumeros(peso)});
altura.addEventListener('blur', () => {validarNumeros(altura)});
anio.addEventListener('blur', () => {validarAnio(anio)});
formulario.addEventListener('submit',  guardarPersona);

let sexo = "Hombre";
function definirSexo(contact){
    for (let i = 0; i < contact.length; i++) {
       contact[i].addEventListener('change', function(event){                          
            let val = this.value;
            if (val == 0){
                sexo = "Hombre";
            }else if (val == 1){
                sexo = "Mujer";
            }
        });         
    }
}

const crearLista = (pers) =>{
    let contenedor = document.createElement('div');
    let cardPers = `<div class="card">
    <div class="card-header">
    </div>
    <div class="card-body">
      <h5 class="card-title">${pers.nombre}</h5>
      <p class="card-text">La persona es ${pers.sexo}, tiene ${pers.edad} años de edad. Su peso es de 
      ${pers.peso} kg. y su altura de ${pers.altura} cm.</p>
    </div>
  </div>`;

  contenedor.innerHTML = cardPers;
  listaTotal.appendChild(contenedor);

}

const cargaInicial = () =>{
    listaPersonas = JSON.parse(localStorage.getItem('listaPersonasF')) || [];

}

function guardarPersona(e){
    e.preventDefault();
    if (validarGeneral()){
        definirSexo(radio);
        let persona = agregarPersona();
        listaPersonas.push(persona);
        // guardar en localstorage previo a la base de datos
        localStorage.setItem('listaPersonasF', JSON.stringify(listaPersonas));

        generacion.className = "btn btn-primary";
        generacion.addEventListener('click', () => {obtenerGeneracion(persona)});
        mayor.className = "btn btn-primary";
        mayor.addEventListener('click', () => {obtenerMayor(persona)});
        mostrar.className = "btn btn-primary";
        mostrar.addEventListener('click', () => {mostrarTodos(listaPersonas)});
        console.log('Correcto');

        limpiarFormulario();
        limpiarLista();
    }else{
        console.log('Incorrecto');
    }

}

function limpiarLista(){
    listaTotal.innerHTML = "";
}

function mostrarTodos(listaPersonas){
    if (listaPersonas.length > 0){
        listaPersonas.forEach((persona) => {
            crearLista(persona); 
        });
        generacion.className = "btn btn-primary disabled";
        mayor.className = "btn btn-primary disabled";
        mostrar.className = "btn btn-primary disabled";
    }

}

function obtenerGeneracion(persona){
    let msj = persona.mostrarGeneracion();
    let alerta = document.getElementById('msjAlerta');
    alerta.className = "alert alert-danger mt-4";
    alerta.innerHTML = msj;

}

function obtenerMayor(persona){
    let msj = persona.esMayor();
    let alerta = document.getElementById('msjAlerta');
    alerta.className = "alert alert-danger mt-4";
    alerta.innerHTML = msj;

}

function agregarPersona(){
    let nuevaPersona = new PersonaN();
    nuevaPersona.nuevoNombre = nombre.value;
    nuevaPersona.nuevoSexo =  sexo;
    nuevaPersona.nuevoPeso = peso.value;
    nuevaPersona.nuevaAltura = altura.value;
    nuevaPersona.nuevoAnio = anio.value;
    nuevaPersona.calcularEdad();
    return nuevaPersona;
}

function limpiarFormulario(){
    formulario.reset();

    nombre.className = 'form-control';
    peso.className = 'form-control';
    altura.className = 'form-control';
    anio.className = 'form-control';
}

cargaInicial();