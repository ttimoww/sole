import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {BrowserRouter as Router} from 'react-router-dom'

const myApp = (
    <Router>
        <App />
    </Router>
)

ReactDOM.render(myApp, document.getElementById('root'));


