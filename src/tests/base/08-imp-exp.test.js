import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {

    test('Debe retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        
        const heoreData = heroes.find( h => heroe.id);

        expect(heroe).toEqual(heoreData);

    })

    test('Debe retornar undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    })

    test('Debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const herosData = heroes.filter( h => h.owner === owner);

        expect(heroes).toEqual(herosData);

    })

    test('Debe retornar un arreglo con los heroes de marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

    })
    


});
