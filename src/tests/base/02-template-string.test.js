import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe retornar Hola jhon!', () => {

        const nombre = 'jhon';
        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre + '!');

    })

    // getSaludo debe retornar Hola Carlos! si no hay argumento en el nombre.
    test('getSaludo debe retornar Hola Carlos! si no hay argumento en el nombre.', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos!');

    });


});