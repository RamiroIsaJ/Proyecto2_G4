let saludo = document.getElementById('iniSes');
let iniciar = document.getElementById('iniciarS');
let cerrar = document.getElementById('cerrarS');
iniciar.addEventListener('click', () => { iniciarSesion() });
cerrar.addEventListener('click', () => { cerrarSesion() });
let listaLogin = null;
let listaLibros = [];
let totalCompra = 0;

const cargaInicial = () => {
    listaLogin = JSON.parse(localStorage.getItem('listaLoginU')) || [];
    if (listaLogin.length > 0) {
        iniSesion(listaLogin[0]);
    }
    listaLibros = JSON.parse(localStorage.getItem("listaLibrosT")) || [];
    if (listaLibros.length > 0) {
        listaLibros.forEach(itemLibro => {
            crearColumna(itemLibro);
        });
    }
}

function iniciarSesion() {
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
                    location.href = "../index.html";
                }
            }
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No has iniciado sesion',
            footer: '<a href="">Why do I have this issue?</a>'
        }).then(function () {
            location.href = "/pages/login.html";
        });
    }
    cargaInicial();
}

function iniSesion(usuarioC) {
    saludo.innerHTML = `Hola, ${usuarioC.codigo}`;
}

function finSesion() {
    saludo.innerHTML = `Iniciar sesión...`;
}

function crearColumna(libro) {
    let grilla = document.querySelector("#grilla");
    grilla.innerHTML += `
    <div class="col-sm-12 col-md-4 col-lg-3 mb-3 ">
        <div class="card">
            <img src="${libro.direccion}" class="card-img-top" alt="${libro.nombre}">
            <div class="card-header">
                ${libro.codigo}
            </div>
            <div class="card-body">
                <h5 class="card-title">${libro.nombre}</h5>
                <p class="card-text">Autor: ${libro.autor}</p>
                <p class="card-text">Categoría: ${libro.categoria}</p>
                <p class="card-text">Precio: $${libro.precio}</p>
                <button type="button" class="btn btn-primary text-center" onclick="agregarCarrito('${libro.nombre}','${libro.precio}')" id="comprar" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Comprar
                </button>
                <button type="button" class="btn btn-secondary text-center" onclick="agregarComentario('${libro.nombre}','${libro.precio}')" id="comprar" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Comentar
                </button>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">Carrito de compras</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Seguir comprando"></button>
                    </div>
                    <div class="modal-body">
                    <div class="card text-center">
                      <div id="tarjetaCarrito">
                      </div>
              
                      <div id="totalCarrito">
                      </div>
                   </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Seguir comprando</button>
                      <a href="/pages/error.html" class="btn btn-danger" role="button" role="button">Finalizar compra</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>`;
}

window.agregarCarrito = (nombre, precio) => {
    let OK = inicioOK();
    if (OK) {
        let carrito = document.querySelector("#tarjetaCarrito");
        let total = document.querySelector("#totalCarrito")
        carrito.innerHTML += `
              <h5 class="card-title mt-1">${nombre}</h5>
              <p class="card-text" >${precio}</p>
              <hr>`;

        totalCompra += parseFloat(precio);
        total.innerHTML = ` <h5 class="card-title mt-1">Total= $${totalCompra}</h5>`;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Para comprar debes inciar sesión',
            footer: '<a href="">Why do I have this issue?</a>'
        }).then(function () {
            location.href = "/pages/login.html";
        });
    }
}

cargaInicial();
