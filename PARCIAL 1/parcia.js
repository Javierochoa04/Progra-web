
<h1>FUTBOLISTA</h1>
<input type="text" placeholder="nombre" id="nombre"><br>
<input type="text" placeholder="posicion" id="posicion"><br>
<input type="checkbox" id="activo">ACTIVO<br>
<input type="button" value="Agregar jugador" id="botonagregar"><br>

<input type="text" placeholder="id jugador a eliminar" id="eliminarjugador">
<input type="button" value="eliminar jugador" id="botoneliminar"><br>

<input type="text" placeholder="filtrar por posicion" id="filtro">
<input type="button" value="filtrar" id="botonfiltro"><br>

<input type="text" placeholder="id a activar" id="idactivar">
<input type="button" value="activar" id="botonactivar"><br>

<h2>LISTA</h2>
<div id="listajugadores"></div>


let id=0 
let futbolistas=[]

let id=0 
let futbolistas=[]

function mostrarJugadores(lista=futbolistas){
  let contenedor = document.getElementById("listajugadores")
  contenedor.innerHTML = ""
  for (let i=0; i<lista.length; i++){
    let j = lista[i]
    contenedor.innerHTML += "ID: " + j.id + 
      " | Nombre: " + j.nombre + 
      " | Posicion: " + j.posicion + 
      " | Activo: " + j.activo + "<br>"
  }
}

function agregarfutbolista(){
  let nombre= document.getElementById("nombre").value
  let posicion= document.getElementById("posicion").value
  let activo= document.getElementById("activo").checked
  let objeto={
    id:id,
    nombre:nombre,
    posicion:posicion,
    activo:activo
  }
  futbolistas.push(objeto)
  id+=1
  mostrarJugadores()
}

function eliminarjugador(){
  let idaeliminar = (document.getElementById("eliminarjugador").value)
  let i = futbolistas.findIndex(function(p){return
string(p.id)===idaeliminar})
  futbolistas.splice(i,1)
  mostrarJugadores()
}

function filtrar(){
  let pos = document.getElementById("filtro").value
  let filtrados= futbolistas.filter(function(p){return p.posicion === pos})
  mostrarJugadores(filtrados)
}

function marcaractivo(){
  let idactivar = document.getElementById("idactivar").value
  let i = futbolistas.findIndex(function(p){return String(p.id)===idactivar})
  futbolistas[i].activo=true
  mostrarJugadores()
}
const botonagregar= document.getElementById("botonagregar")
botonagregar.addEventListener("click", agregarfutbolista)

const botoneliminar= document.getElementById("botoneliminar")
botoneliminar.addEventListener("click", eliminarjugador)

const botonfiltro= document.getElementById("botonfiltro")
botonfiltro.addEventListener("click", filtrar)

const botonactivar = document.getElementById("botonactivar")
botonactivar.addEventListener("click", marcaractivo)
