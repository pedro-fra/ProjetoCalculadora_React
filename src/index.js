import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <h1>Projeto React</h1>
        <h2>Calculadora</h2>
        <Calculator />
    </div>
, document.getElementById('root'));
registerServiceWorker();
