import { createStore } from 'redux';
import reducer from './reducer';
import middleware from './middleware';

// configure store
const configureStore = initialState => {
	return createStore(reducer, initialState, middleware);
};

export default configureStore;
