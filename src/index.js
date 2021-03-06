import React from 'react';
import ReactDOM from 'react-dom';

// components
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

// styles
import './index.css';

const divRoot = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp  saludo="Hola mundo!" />, divRoot);
ReactDOM.render(<CounterApp value={0} />, divRoot);
