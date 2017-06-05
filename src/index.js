import React from 'react';
import { render } from 'react-dom';
import './css/styles.css';

window.React = React;
const target = document.getElementById('react-container');

/*
    Color Organizer
*/
import App from './App';
import { createStore, combineReducers, compose } from 'redux';
import { addColor, removeColor, rateColor, sortColors } from './components/color';
import storeFactory from './store';

const store = storeFactory(true);

render(
    <App {...store.getState()} />,
    target
);

store.dispatch( removeColor('83c7ba2f-7392-4d7d-9e23-35adbe186046') );
store.dispatch( rateColor('a5685c39-6bdc-4727-9188-6c9a00bf7f95', 5) );
store.dispatch( sortColors('title') );
store.dispatch( addColor('Black', '#000') );

const print = compose(
    list => console.log(list),
    titles => titles.join(', '),
    map => map(c => c.title),
    colors => colors.map.bind(colors),
    state => state.colors
);

print(store.getState());

localStorage.clear();