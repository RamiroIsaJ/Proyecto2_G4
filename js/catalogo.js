let saludo = document.getElementById('iniSes');
let cerrar = document.getElementById('cerrarS');
cerrar.addEventListener('click', () => { cerrarSesion() });
let listaLogin = null;

const cargaInicial = () => {
    listaLogin = JSON.parse(localStorage.getItem('listaLoginU')) || [];
    if (listaLogin.length > 0) {
        iniSesion(listaLogin[0]);
    }
}
function cerrarSesion() {
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
        }
    })
}

function iniSesion(usuarioC) {
    saludo.innerHTML = `Hola, ${usuarioC.codigo}`;
}

function finSesion() {
    saludo.innerHTML = `Iniciar sesión...`;
}

cargaInicial();


let listaLibros = [];

cargarInicial();

function cargarInicial() {
  // revisar los datos del localstorage
  listaLibros = JSON.parse(localStorage.getItem("listaLibrosT")) || [];
  // dibujar las columas con sus respectivas cards
  if(listaLibros.length > 0){
    listaLibros.forEach(itemLibro => {
        crearColumna(itemLibro);
      });
  }
}

function crearColumna(libro) {
  let grilla = document.querySelector("#grilla");
  grilla.innerHTML += `<div class="col-sm-12 col-md-4 col-lg-3 mb-3 ">
    <div class="card text-center">
        <img src="${libro.direccion}" class="card-img-top" alt="${libro.nombre}">
        <div class="card-body">
        <p class="card-text">${libro.codigo}</p>
          <h5 class="card-title">${libro.nombre}</h5>
          <p class="card-text">${libro.categoria}</p>
          <p class="card-text">${libro.precio}</p>
          
          <button type="button" class="btn btn-primary text-center" onclick="agregarCarrito('${libro.nombre}','${libro.precio}')" id="comprar" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Comprar
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
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Seguir comprando</button>
        <a href="pages/error.html" class="btn btn-primary" role="button" data-bs-toggle="button">Finalizar compra</a>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
</div>`;
}


window.agregarCarrito = (nombre,precio) => {
    console.log(nombre,precio)

    let carrito = document.querySelector("#tarjetaCarrito");
  carrito.innerHTML += `
          <h5 class="card-title mt-1">${nombre}</h5>
          <p class="card-text">${precio}</p>
          <hr>`

         
}
