import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartPageReducer from './CartPageReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartPageReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
