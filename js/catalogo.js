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

function crearColumna(producto) {
    let grilla = document.querySelector("#grilla");
    grilla.innerHTML += `<div class="col-sm-12 col-md-4 col-lg-3 mb-3">
      <div class="card">
          <img src="${producto.url}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
          </div>
        </div>
  </div>`;
  }