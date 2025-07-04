
function SeeProjectsContt() {
  location.href = 'projts.html'
}

let AreaTexto = document.querySelector("#Texto");
let AreaExibeTexto = document.querySelector("#AreaExibeTexto");

function ContagemCaracteres() {
  AreaExibeTexto.textContent = AreaTexto.value.length + '/200';
}

ContagemCaracteres()

AreaTexto.addEventListener('input', ContagemCaracteres)

AreaTexto.addEventListener('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
  this.style.scrollHeight = '0'
})
AreaTexto.className = "AreaTexto";



