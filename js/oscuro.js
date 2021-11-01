const storage = window.localStorage

const check = document.querySelector('.botonespacio')
const body = document.querySelector('.body')
const card = document.querySelectorAll("div[class = 'card-body']")
console.log(card)
let oscuro = Boolean(storage.getItem('oscuro'))

const comprobarOscuro = oscuro => {
  if (oscuro) {
    body.classList.add('cambio-color')
    for (const i of card) {
      i.classList.add('cambio-color-card')
    }
    
    check.checked = true
  }else{
    body.classList.remove('cambio-color')
    for (const i of card) {
      i.classList.remove('cambio-color-card')
    }
    
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
    storage.setItem('oscuro', true)
    
  }else{
    body.classList.remove('cambio-color')
    for (const i of card) {
      i.classList.remove('cambio-color-card')
    }
    
    storage.removeItem('oscuro')
  }
}
)