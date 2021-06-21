import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = (e) => {
        setCounter(counter + 1);
        // setCounter((c) => c + 1);
    }

    const handleSubstract = (e) => {
        setCounter(counter - 1);
    }

    const handleReset = (e) => {
        setCounter(value);
    }
    return (
        <>
            <h1> Counter App </h1>
            <p> {counter} </p>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    )

};

CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;