import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../data/heroes';

describe('Pruebas con promesas.', () => {

    test('getHeroeByIdAsync Debe retornar un héroe.', (done) => {

        const id = 3;

        // eslint-disable-next-line jest/valid-expect-in-promise
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes.find(e => e.id === id));
                done();

            })
            .catch(done);
    });

    test('Debe obtener un error si el héroe por id no existe', (done) => {
        const id = 10;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes.find(e => e.id === id));
                done()
            })
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })
    })


})