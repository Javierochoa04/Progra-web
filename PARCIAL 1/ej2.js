<input type="text" placeholder="titulo" id="titulo">
<input type="text" placeholder="director" id="director">
<input type="text" placeholder="anio" id="anio">
<input type="text" placeholder="genero" id="genero">
<input type="checkbox" id="vista"> Vista<br><br>

<input type="button" value="Agregar Película" id="agregarpelicula">
<br><br>

<input type="text" placeholder="id a eliminar" id="eliminar">
<input type="button" id="botoneliminar" value="Eliminar"><br><br>

<input type="text" placeholder="id pelicula vista" id="visteado">
<input type="button" id="botonvisteado" value="Marcarvisto"

<!-- Aquí mostraremos la lista de películas -->
<div id="lista"></div>



let peliculas = [];
let id = 0;

function agregarpelicula() {
  let tituloHTML = document.getElementById("titulo").value;
  let anioHTML = document.getElementById("anio").value;
  let directorHTML = document.getElementById("director").value;
  let generoHTML = document.getElementById("genero").value;
  let vistaHTML = document.getElementById("vista").checked;

  let objeto = {
    id: id,
    titulo: tituloHTML,
    director: directorHTML,
    anio: anioHTML,
    genero: generoHTML,
    vista: vistaHTML   
  };

  peliculas.push(objeto);
  id += 1;

  mostrarPeliculas();
}

function eliminarpelicula() {
  let ideliminar = parseInt(document.getElementById("eliminar").value);

  let index = peliculas.findIndex(p => p.id === ideliminar);

  if (index !== -1) {
    peliculas.splice(index, 1);
    mostrarPeliculas();
  } else {
    alert("No se encontró película con id: " + ideliminar);
  }
}

function mostrarPeliculas() {
  let contenedor = document.getElementById("lista");
  contenedor.innerHTML = "";
  
function vispelicula(){ 
  let idvisto = parseInt(document.getElementById("visteado").value, 10);
  
  for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].id === idvisto) {
      peliculas[i].vista = true;
      console.log("Película marcada como vista:", peliculas[i]);
    }  
  }

  // si quieres actualizar la vista en pantalla:
  if (typeof mostrarPeliculas === "function") {
    mostrarPeliculas();
  }
}


  peliculas.forEach(p => {
    contenedor.innerHTML += `
      <p>
        <b>ID:</b> ${p.id} | 
        <b>Título:</b> ${p.titulo} | 
        <b>Director:</b> ${p.director} | 
        <b>Año:</b> ${p.anio} | 
        <b>Género:</b> ${p.genero} | 
        <b>Vista:</b> ${p.vista ? "Sí" : "No"}
      </p>
    `;
  });
}

document.getElementById("agregarpelicula").addEventListener("click", agregarpelicula);
document.getElementById("botoneliminar").addEventListener("click", eliminarpelicula);
document.getElementById("botonvisteado").addEventListener("click", vispelicula);
