import { applyMiddleware, createStore, compose, Store } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducers, { AppState } from '@src/reducers';
import { isBrowser } from '@src/config/constants';

export default function getStore(initState?: AppState) {
  const isReduxDevtools = isBrowser && (window as any).__REDUX_DEVTOOLS_EXTENSION__;
  let store: Store;
  if (process.env.NODE_ENV === 'production' || !isReduxDevtools) {
    store = createStore(rootReducers, initState, applyMiddleware(reduxThunk));
  } else {
    store = createStore(
      rootReducers,
      initState,
      compose(
        applyMiddleware(reduxThunk),
        isBrowser
          ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
          : null
      )
    );
  }
  return store;
}
