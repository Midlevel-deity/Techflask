import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/route';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
