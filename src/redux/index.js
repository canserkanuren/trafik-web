import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'react-thunk';

import reducers from './reducers';

export const store = createStore(reducers, applyMiddleware(logger));
