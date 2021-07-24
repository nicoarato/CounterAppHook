describe('Pruebas en el archivo demo.test.js', () => {


    test('debe ser iguales los strings', () => {

        // 1. inicialización
        const mensaje = 'Hola mundo';

        // 2. estimulo
        const mensaje2 = "Hola mundo";

        // 3. observar el comportamiento
        expect(mensaje).toBe(mensaje2); //===

    })
});