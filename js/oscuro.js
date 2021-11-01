const storage = window.localStorage

const check = document.querySelector('.botonespacio')
const body = document.querySelector('.body')
const card = document.querySelectorAll("div[class = 'card-body']")
const section = document.querySelector('.section')

let oscuro = Boolean(storage.getItem('oscuro'))

const comprobarOscuro = oscuro => {
  if (oscuro) {
    body.classList.add('cambio-color')
    for (const i of card) {
      i.classList.add('cambio-color-card')
    }
    section.classList.add('cambio-color-section')
    check.checked = true
  }else{
    body.classList.remove('cambio-color')
    for (const i of card) {
      i.classList.remove('cambio-color-card')
    }
    /* section.classList.remove('cambio-color-section') */
    check.checked = false
  }
}
comprobarOscuro(oscuro)

check.addEventListener('click', function(){
  if (this.checked) {
    body.classList.add('cambio-color')
    for (const i of card) {
      i.classList.add('cambio-color-card')
    }
    section.classList.add('cambio-color-section')
    storage.setItem('oscuro', true)
    
  }else{
    body.classList.remove('cambio-color')
    for (const i of card) {
      i.classList.remove('cambio-color-card')
    }
    section.classList.remove('cambio-color-section')
    storage.removeItem('oscuro')
  }
}
)