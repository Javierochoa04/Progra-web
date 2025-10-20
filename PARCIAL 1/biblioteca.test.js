describe('Gestión de Biblioteca Personal', () => {
    let libros;

    beforeEach(() => {
        libros = [];
        if (typeof window !== 'undefined') {
            window.idCounter = 0;
        }
    });

    test('Debería agregar un libro correctamente', () => {
        agregarLibro('Cien años de soledad', 'Gabriel García Márquez', 1967, 'Realismo mágico', false, libros);
        expect(libros).toHaveLength(1);
        expect(libros[0].titulo).toBe('Cien años de soledad');
        expect(libros[0].leido).toBe(false);
    });

    test('Debería eliminar un libro existente', () => {
        agregarLibro('El principito', 'Antoine de Saint-Exupéry', 1943, 'Fábula', true, libros);
        eliminarLibro(libros[0].id, libros);
        expect(libros).toHaveLength(0);
    });

    test('Debería marcar un libro como leído', () => {
        agregarLibro('1984', 'George Orwell', 1949, 'Ciencia ficción', false, libros);
        marcarComoLeido(libros[0].id, libros);
        expect(libros[0].leido).toBe(true);
    });

    test('Debería filtrar libros por género', () => {
        agregarLibro('Fundación', 'Isaac Asimov', 1951, 'Ciencia ficción', false, libros);
        agregarLibro('Orgullo y prejuicio', 'Jane Austen', 1813, 'Romance', true, libros);
        
        const librosCienciaFiccion = filtrarPorGenero('Ciencia ficción', libros);
        expect(librosCienciaFiccion).toHaveLength(1);
        expect(librosCienciaFiccion[0].titulo).toBe('Fundación');
    });

    test('Debería generar estadísticas correctamente', () => {
        agregarLibro('El hobbit', 'J.R.R. Tolkien', 1937, 'Fantasía', true, libros);
        agregarLibro('It', 'Stephen King', 1986, 'Terror', false, libros);
        
        const stats = obtenerEstadisticas(libros);
        expect(stats.total).toBe(2);
        expect(stats.leidos).toBe(1);
        expect(stats.noLeidos).toBe(1);
    });
});
