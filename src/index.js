import React from 'react';
import { render } from 'react-dom';
import './css/styles.css';

window.React = React;

const target = document.getElementById('react-container');

// import { Menu } from './components';
// import { recipes } from './data';

// render(
//     <Menu recipes={recipes} />,
//     target
// );

/*
    Color Organizer
*/
// import App from './App';
// import { colors } from './data';

// render(
//     <App colors={colors} />,
//     target
// );

// import { MemberList } from './components';

// render(
//     <MemberList count={5} />,
//     target
// );

// import { CountryDropdown } from './components';

// render(
//     <CountryDropdown selected="Philippines" />,
//     target
// );

import { countdownActions, CountDown, CountdownDispatcher, CountdownStore } from './components/countdown';

const appDispatcher = new CountdownDispatcher();
const actions = countdownActions(appDispatcher);
const store = new CountdownStore(10, appDispatcher);

const renderr = count => render(
    <CountDown count={count} {...actions} />,
    target
);

store.on('TICK', () => renderr(store.count));
store.on('RESET', () => renderr(store.count));
renderr(store.count);