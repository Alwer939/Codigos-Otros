/*
  Cambios generales:
    Todo el codigo no tenían ; al final de sus lineas
*/

let formulario = document.forms["formulario"];
const lista = document.getElementById('listaInvitados');
let id = 0;
formulario.onsubmit = function(e) {
// function prueba(){
  
  e.preventDefault();
    
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;
  var i = na.selectedIndex;

  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  // Para mayor facilidad de entendimiento, si las siguientes validaciones no se cumplen tendremos una bandera
  // que al mantenerse en 0 es por que no hubo error en las validaciones, y 1 es por que no se cumplieron
  let ban = 0;
  if (nombre.length === 0) {
    ban = 1;
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    ban = 1;
    e.classList.add("error");
  }

  // El if estaba puesto de manera confusa en 3 lineas, por lo que con bandera podemos validarlo solo en 1 if
  if (ban == 0 ) { // y tenia un () innecesario dentro del if
    agregarInvitado(nombre, edad, nacionalidad);
  }
}

function agregarInvitado(nombre, edad, nacionalidad){
  let objeto = new invitadosPlantilla(nombre, edad, nacionalidad);
  objeto.datos;
}

class invitadosPlantilla{
  
  constructor(nombre, edad, nacionalidad){
    this.id = id;
    this.nombre = nombre; 
    this.edad = edad;
    this.nacionalidad = nacionalidad;
  }

  get datos(){
    let div = document.createElement("div");
    div.className = `${id}`;
    
    let name = document.createElement('p');
    let age = document.createElement('p');
    let nacion = document.createElement('p');
    let del = document.createElement('button');

    name.innerHTML = this.nombre;
    age.innerHTML = this.edad;
    nacion.innerHTML = this.nacionalidad;
    del.innerHTML = 'Eliminar';
    del.onclick= this.eliminar;

    div.appendChild(name);
    div.appendChild(age);
    div.appendChild(nacion);
    div.appendChild(del);

    lista.appendChild(div);
  }

  get eliminar(){
    lista.remove();
  }

}

/*
var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  function crearElemento(descripcion, valor){
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }
  // se cambiaron los if por un switch para mejora visual y de codigo
  switch(nacionalidad){
    case "ar":  nacionalidad = "Argentina";
              break;
    case "mx":  nacionalidad = "Mexicana";
              break;
    case "vnzl":  nacionalidad = "Venezolana";
              break;
    case "per":  nacionalidad = "Peruana";
              break;
    default:  nacionalidad = "default";          
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.added("elemento-lista");
  lista.appendChild(elementoLista);

  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  inputNombre.value = nombre ;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  // var botonBorrar = document.createElement("button");
  // botonBorrar.textContent = "Eliminar invitado";
  // botonBorrar.id = "boton-borrar";
  // var corteLinea = document.createElement("br");
  // elementoLista.appendChild(corteLinea);
  // elementoLista.appendChild(botonBorrar);

  // botonBorrar.onclick = function() {
  //   this.parentNode.style.display = 'none';
  //   botonBorrar.parentNode.remove()
  // }
}

*/