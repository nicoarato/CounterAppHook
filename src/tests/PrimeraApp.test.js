import React from 'react';

import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp>', () => {

    // test('Debe mostrar el Mensaje "Hola, Soy Goku"', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render(< PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('Debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el subtitulo enviado por props.', () => {
        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Hola, soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo);


        expect(textoParrafo).toBe(subtitulo);
    });




})