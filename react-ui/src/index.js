import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app.js';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js';
import { initializeCurrentLocation,RouterProvider} from 'redux-little-router';

const store=configureStore(); 
const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
};

ReactDOM.render(<Provider store={store}>
	  <RouterProvider store={store}>
  	  <App />
  	</RouterProvider>
	</Provider>, document.getElementById('root'));