import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log(store, action);
  next(action);
};

const middleware = applyMiddleware(loggerMiddleware);

const store = createStore(rootReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    </Provider>
  </React.StrictMode>
);
