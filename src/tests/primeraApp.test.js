import { shallow } from 'enzyme';
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('pruebas en <PrimeraApp />', () => {

    // con test normal jest.
    // test('Debe de mostrar el mensaje "Hola mundo!"', () => {

    //     const saludo = "Hola mundo!";
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect( getByText(saludo) ).toBeInTheDocument();

    // })

    // Con enzyme
    test('Debe de mostrar < PrimeraApp /> correctamente', () => {

        const saludo = "Hola mundo!"
        const wrapper = shallow( <PrimeraApp saludo={saludo}/> );

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe enviar el subtitulo enviado por props', () => {

        const saludo = "Hola mundo!"
        const subtitulo = "Soy un subtitulo";
        const wrapper = shallow( <
            PrimeraApp saludo={saludo}
            subtitle={subtitulo}
        /> );

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo);

    })

});
