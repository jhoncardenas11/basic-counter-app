// Funcional components
import React from "react";
import propTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitle }) => {

    return (
        <>
            {/* <pre> { JSON.stringify(saludo, null, 3) } </pre> */}
            <h1>{ saludo }</h1>
            <p>{ subtitle }</p>
        </>
    )

}

PrimeraApp.propTypes = {
    saludo: propTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitle: 'soy un subtitulo'
}

export default PrimeraApp;
