let biblioteca = []; 

function agregarlibro(anio, autor, titulo, genero, leido = false) {    
    let libro = {
        anio: anio,
        autor: autor,
        titulo: titulo,
        genero: genero,
        leido: leido
    };
    biblioteca.push(libro);
}
function eliminarlibro(titulo) { 
    biblioteca = biblioteca.filter(libro => libro.titulo !== titulo);
    ;
}

agregarlibro(1997, "J.K. Rowling", "Harry Potter y la piedra filosofal", "Fantasía");
agregarlibro(1954, "J.R.R. Tolkien", "El Señor de los Anillos", "Fantasía");
agregarlibro(2003, "Dan Brown", "El Código Da Vinci", "Misterio");
eliminarlibro("Harry Potter y la piedra filosofal");

function marcarcomoleido(titulo) {
    let libro = biblioteca.find(libro => libro.titulo === titulo);
    if (libro) {
        libro.leido = true;
    }
}

function buscarlibro(titulo) {
    let libro = biblioteca.filter(libro => libro.titulo === titulo);
    console.log(libro)
};

function generolibros(genero) {
    let libro = biblioteca.filter( libro=> libro.genero === genero);
    console.log(libro)
}

generolibros("Fantasía");
