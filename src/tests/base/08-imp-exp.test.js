import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en Funciones de heroes.', () => {

    test('Debe retornar un héroe por Id', () => {

        const id = 5;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(heroe => heroe.id === id);
        expect(heroe).toEqual(heroeData);

    });

    test('Debe retornar un undefined si héroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    });

    test('Debe retornar un arrglo con los héroes de DC', () => {

        const owner = 'DC';
        const arrDC = getHeroesByOwner(owner);

        const arrDCTest = heroes.filter(h => h.owner === owner);

        expect(arrDC).toEqual(arrDCTest);

    })

    test('Debe retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const arrMarvel = getHeroesByOwner(owner);

        // const arrMarvelTest = heroes.filter(h => h.owner === owner);

        expect(arrMarvel.length).toBe(2);
    })



});