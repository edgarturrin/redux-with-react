import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counter from './container/Counter';


import { counterApp } from './reducers';

const store = createStore(counterApp);

render(
	<Provider store={store} >
		<Counter />
	</Provider>,
	document.getElementById('root')
)