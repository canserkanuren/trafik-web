import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'trafik',
  // Storage Method (React Native)
  storage,
  // Whitelist (Save Specific Reducers)
  // whitelist: ['theme', 'lines', 'stations', 'language'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ['journey'],
  // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
  timeout: null
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Redux: Store
const store = compose(applyMiddleware(...middlewares))(createStore)(
  persistedReducer
);

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

export { store, persistor };
