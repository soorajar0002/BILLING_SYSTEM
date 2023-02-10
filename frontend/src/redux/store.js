import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './reducers/userSlice.js'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
key: 'counter',
storage,
};

const reducers = combineReducers({ token:tokenReducer });
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
reducer: persistedReducer,
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

// export default configureStore({
//   reducer: {
//     token:tokenReducer,
//   },
// });