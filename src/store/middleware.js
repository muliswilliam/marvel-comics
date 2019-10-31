import { applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// const isProd = process.env.NODE_ENV === 'production';
const middlewareList = [];

middlewareList.push(thunk);

// if (!isProd) {
// 	middlewareList.push(createLogger());
// }

const middleware = composeWithDevTools(applyMiddleware(...middlewareList));

export default middleware;
