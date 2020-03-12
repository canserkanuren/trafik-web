import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middlewares = [logger, thunk];

export const store = createStore(reducers, applyMiddleware(...middlewares));
