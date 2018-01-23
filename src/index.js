import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import routes from './routes.js'

ReactDOM.render(
<HashRouter>
<App />
</HashRouter>
, document.getElementById('root'));
