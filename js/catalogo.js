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
  grilla.innerHTML += `<div class="col-sm-12 col-md-4 col-lg-3 mb-3">
    <div class="card">
        <img src="${libro.direccion}" class="card-img-top" alt="${libro.nombre}">
        <div class="card-body">
          <h5 class="card-title">${libro.autor}</h5>
          <p class="card-text">${libro.precio}</p>
        </div>
      </div>
</div>`;
}
