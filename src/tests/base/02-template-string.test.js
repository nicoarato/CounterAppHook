import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Prueba en 02-template-string.js', () => {

    test('getSaludo debe retornar hola fernando', () => {

        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);
        const saludo2 = getSaludo();

        expect(saludo).toBe('Hola ' + nombre + '!');
        expect(saludo2).toBe('Hola Carlos!');

    });
    test('getSaludo debe retornar Hola Carlos! si no hay argumentos en el nombre.', () => {

        // const nombre = 'Fernando';
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');

    })

    // getSaludo debe retornar "Hola Carlos! si no hay argumentos"

});