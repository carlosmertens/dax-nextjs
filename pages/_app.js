import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from '../reducers/rootReducer';

export default function MyApp({ Component, pageProps }) {
  const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['siteModal'],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const theStore = applyMiddleware(reduxPromise)(createStore)(persistedReducer);
  const persistor = persistStore(theStore);

  return (
    <Provider store={theStore}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
