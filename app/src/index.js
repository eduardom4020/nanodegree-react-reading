import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { MainStore } from './store/base-stores';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={MainStore} >
        <link 
            rel="stylesheet" 
            href="https://fonts.googleapis.com/icon?family=Material+Icons" 
        />
        <App />
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
