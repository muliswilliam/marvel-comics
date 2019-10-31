import { combineReducers} from 'redux';

import comicReducer from './comic/reducer';

const rootReducer = combineReducers({
	comic: comicReducer
});

export default rootReducer;
