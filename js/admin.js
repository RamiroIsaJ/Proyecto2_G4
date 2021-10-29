import { validarCodigo, validarCampoRequerido, validarNumeros, validarGeneralP } from "./validaciones.js";
import { LibroN } from "./libro_class.js";

//traer los campos a validar
let codigo = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let autor = document.getElementById('autor');
let categoria = document.getElementById('categoria');
let paginas = document.getElementById('paginas');
let direccion = document.getElementById('direccion');
let formulario = document.getElementById('formLibros');
let limpiar = document.getElementById('limpiar');
let alerta = document.getElementById('msjAlerta');
let libroEncontrado = null;
let editar = false;
let listaLibros = [];

// funciones cuando sucede un evento en el html
codigo.addEventListener('blur', () => { validarCodigo(codigo) });
nombre.addEventListener('blur', () => { validarCampoRequerido(nombre) });
autor.addEventListener('blur', () => { validarCampoRequerido(autor) });
paginas.addEventListener('blur', () => { validarNumeros(paginas) });
direccion.addEventListener('blur', () => { validarCampoRequerido(direccion) });
limpiar.addEventListener('click', () => { limpiarForm() });
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
    <td>${libro.direccion}</td>
    <td>
      <button type="button" class="btn btn-warning" onclick="editarLibro(${libro.codigo});">Editar</button>
      <button type="button" class="btn btn-danger" onclick="borrarLibro(${libro.codigo});">Borrar</button>
    </td>
  </tr>`;
}

window.borrarLibro = (codigoE) => {
    let idx = listaLibros.indexOf(listaLibros.find((libro) => {return libro.codigo == codigoE}));
    if (idx!= undefined) {
        let resp = confirm("¿ Estás seguro de eliminar el producto?");
        if (resp) {
            listaLibros.splice(idx, 1);
            localStorage.setItem('listaLibrosT', JSON.stringify(listaLibros));
        }
    }
}

window.editarLibro = (codigoE) => {
    editar = true;
    libroEncontrado = listaLibros.find((libro) => { return libro.codigo == codigoE });
    if (libroEncontrado != undefined) {
        codigo.disabled = true;
        codigo.value = `${libroEncontrado.codigo}`;
        nombre.value = `${libroEncontrado.nombre}`;
        autor.value = `${libroEncontrado.autor}`;
        categoria.value = `${libroEncontrado.categoria}`;
        paginas.value = `${libroEncontrado.paginas}`;
        direccion.value = `${libroEncontrado.direccion}`;
    }
}

function limpiarForm() {
    editar = false;
    alerta.className = "alert alert-danger mt-4 d-none";
    alerta.innerHTML = "";
    limpiarFormulario();
}

const cargaInicial = () => {
    listaLibros = JSON.parse(localStorage.getItem('listaLibrosT')) || [];
    console.log(listaLibros)
    if (listaLibros.length > 0) {
        listaLibros.forEach((libro) => {
            crearFila(libro);
        });
    }
}

function guardarLibro(e) {
    e.preventDefault();
    if (validarGeneralP()) {
        ingresarLibro();
    }
}

function ingresarLibro() {
    if (editar) {
        let idx = listaLibros.indexOf(libroEncontrado);
        libroEncontrado.codigo = codigo.value;
        libroEncontrado.nombre = nombre.value;
        libroEncontrado.autor = autor.value;
        libroEncontrado.categoria = categoria.value;
        libroEncontrado.paginas = paginas.value;
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
}

function limpiarFormulario() {
    formulario.reset();
    codigo.disabled = false;
    codigo.className = 'form-control';
    nombre.className = 'form-control';
    autor.className = 'form-control';
    paginas.className = 'form-control';
    direccion.className = 'form-control';
}


cargaInicial();