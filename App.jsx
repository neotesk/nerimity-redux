/* @refresh reload */

/*
    Nerimity Redux, Cutting-edge client for https://github.com/Nerimity
    Open-Source, MIT License. Copyright (C) 2025-20xx Nerimity Team
*/

import { render } from 'solid-js/web';

import './App.scss';
import App from './src/app';

const root = document.getElementById( 'root' );

if ( !( root instanceof HTMLElement ) ) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

render( () => <App />, root );