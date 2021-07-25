import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>{saludo}!!</h1>
            {/* <p>{saludo}. {JSON.stringify(saludoJson)}</p> */}
            <p>{subtitulo}</p>
        </>
    )

};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    saludo: 'Hola Mundo',
    subtitulo: 'soy un subtitulo'
}


export default PrimeraApp;