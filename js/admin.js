import {validarCampoRequerido, validarNumeros, validarAnio, validarGeneral} from "./validaciones.js";
import {PersonaN} from "./persona_class.js";

//traer los campos a validar
let nombre = document.getElementById('nombre');
<<<<<<< HEAD
let autor = document.getElementById('autor');
let categoria = document.getElementById('categoria');
let paginas = document.getElementById('paginas');
let precio = document.getElementById('precio');
let direccion = document.getElementById('direccion');
let formulario = document.getElementById('formLibros');
let limpiar = document.getElementById('limpiar');
let alerta = document.getElementById('msjAlerta');
let saludo = document.getElementById('iniSes');
let panel1 = document.getElementById('panel1');
let panel2 = document.getElementById('panel2');
let panel3 = document.getElementById('panel3');
let panel4 = document.getElementById('panel4');
let iniciar = document.getElementById('iniciarS');
let cerrar = document.getElementById('cerrarS');
let textoUsuario = document.getElementById('ideU');
let textoAdmin = document.getElementById('ideA');
let libroEncontrado = null;
let listaLogin = null;
let editar = false;
let listaLibros = [];

// funciones cuando sucede un evento en el html
codigo.addEventListener('blur', () => {validarCodigo(codigo)});
nombre.addEventListener('blur', () => {validarCampoRequerido(nombre)});
autor.addEventListener('blur', () => {validarCampoRequerido(autor)});
paginas.addEventListener('blur', () => {validarNumeros(paginas)});
precio.addEventListener('blur', () => {validarCampoRequerido(precio)});
direccion.addEventListener('blur', () => { validarCampoRequerido(direccion) });
limpiar.addEventListener('click', () => { limpiarForm() });
iniciar.addEventListener('click', () => { iniciarSesion() });
cerrar.addEventListener('click', () => { cerrarSesion() });
formulario.addEventListener('submit', guardarLibro);

const crearFila = (libro) => {
    let tabla = document.getElementById("tablaLibro");
    tabla.innerHTML += `              
    <tr>
    <th scope="row">${libro.codigo}</th>
    <td>${libro.nombre}</td>
    <td>${libro.autor}</td>
    <td>${libro.categoria}</td>
    <td>${libro.paginas}</td>
    <td>${libro.precio}</td>
    <td>${libro.direccion}</td>
    <td>
      <button type="button" class="btn btn-warning" onclick="editarLibro(${libro.codigo});">Editar</button>
      <button type="button" class="btn btn-danger" onclick="borrarLibro(${libro.codigo});">Borrar</button>
    </td>
  </tr>`;
}

window.borrarLibro = (codigoE) => {
    let idx = listaLibros.indexOf(listaLibros.find((libro) => {return libro.codigo == codigoE}));
    Swal.fire({
        title: '¿Estás seguro de eliminar el libro?',
        text: "No se podrá recuperar los datos",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            listaLibros.splice(idx, 1);
            localStorage.setItem('listaLibrosT', JSON.stringify(listaLibros));
        }
    })
=======
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
>>>>>>> 17aa2211137ba9be2e2101f671379cd347ffd364
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

<<<<<<< HEAD
function iniciarSesion(){
    location.href = "/pages/login.html";

}

const inicioOK = () => {
    listaLogin = JSON.parse(localStorage.getItem('listaLoginU')) || [];
    if (listaLogin.length > 0) {
        return true;
    } else {
        return false;
    }
}

function cerrarSesion() {
    if (inicioOK()) {
    Swal.fire({
        title: '¿Estás seguro de cerrar sesión?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            if (listaLogin.length > 0) {
                listaLogin.splice(0, 1);
                localStorage.setItem('listaLoginU', JSON.stringify(listaLogin));
                finSesion();
            }
            location.href = "../index.html";
        }
    })
}else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No has iniciado sesion',
        footer: '<a href="">Why do I have this issue?</a>'
    }).then(function () {
        location.href = "/pages/login.html";
    });
}
}
=======
  contenedor.innerHTML = cardPers;
  listaTotal.appendChild(contenedor);
>>>>>>> 17aa2211137ba9be2e2101f671379cd347ffd364

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

<<<<<<< HEAD
function ingresarLibro() {
    if (editar) {
        let idx = listaLibros.indexOf(libroEncontrado);
        libroEncontrado.codigo = codigo.value;
        libroEncontrado.nombre = nombre.value;
        libroEncontrado.autor = autor.value;
        libroEncontrado.categoria = categoria.value;
        libroEncontrado.paginas = paginas.value;
        libroEncontrado.precio = precio.value;
        libroEncontrado.direccion = direccion.value;
        // asignar al array la modificación
        listaLibros[idx] = libroEncontrado;
        Swal.fire(
            'Buen trabajo',
            'Se editó el libro correctamente',
            'success'
        )
    }else {
        let libroBuscado = listaLibros.find((libro) => {return libro.codigo == codigo.value });
        if (libroBuscado == undefined) {
            let nuevoLibro = new LibroN();
            nuevoLibro.nuevoCodigo = codigo.value;
            nuevoLibro.nuevoNombre = nombre.value;
            nuevoLibro.nuevoAutor = autor.value;
            nuevoLibro.nuevaCategoria = categoria.value;
            nuevoLibro.nuevasPaginas = paginas.value;
            nuevoLibro.nuevoPrecio = precio.value;
            nuevoLibro.nuevaDireccion = direccion.value;
            // agregar a la lista de productos
            listaLibros.push(nuevoLibro);
            Swal.fire(
                'Buen trabajo',
                'Se agregó el producto correctamente',
                'success'  
            )
        }else {
            alerta.className = "alert alert-danger mt-4";
            alerta.innerHTML = "No se puede ingresar. El código ya existe !!";
        }
    }
    // guardar en localstorage previo a la base de datos
    localStorage.setItem('listaLibrosT', JSON.stringify(listaLibros));
    limpiarFormulario();
    cargaInicial();
=======
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

>>>>>>> 17aa2211137ba9be2e2101f671379cd347ffd364
}

function obtenerGeneracion(persona){
    let msj = persona.mostrarGeneracion();
    let alerta = document.getElementById('msjAlerta');
    alerta.className = "alert alert-danger mt-4";
    alerta.innerHTML = msj;

}

<<<<<<< HEAD
function iniSesion(usuarioC) {
    let ideUsuario = usuarioC.confirmar;
    saludo.innerHTML = `Hola, ${usuarioC.codigo}`;
    panel2.className = "text-center container borderF my-5 d-none";
    if (ideUsuario  == undefined) {
        panel3.className = "text-center container borderF my-5";
        textoUsuario.innerHTML = `${usuarioC.codigo}`;
    } else {
        panel4.className = "text-center container borderF my-5";
        textoAdmin.innerHTML = `${usuarioC.codigo}`;
        panel1.className = "";
    }
=======
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
>>>>>>> 17aa2211137ba9be2e2101f671379cd347ffd364
}

function limpiarFormulario(){
    formulario.reset();

    nombre.className = 'form-control';
    peso.className = 'form-control';
    altura.className = 'form-control';
    anio.className = 'form-control';
}

cargaInicial();