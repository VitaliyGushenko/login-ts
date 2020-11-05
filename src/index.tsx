import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import createSagaMiddleware from 'redux-saga';
import {
  watchFetchAllUsers,
  watchFetchDeleteUser,
  watchFetchLoginUser,
  watchFetchRegisterUser,
  watchFetchUser,
} from './redux/sagas/user/sagas';

import {
  watchFetchAddProduct,
  watchFetchDeleteProducts,
  watchFetchProducts,
} from './redux/sagas/product/sagas';

import {
  watchFetchBasket,
  watchFetchBasketProducts,
  watchFetchDeleteBasketProducts,
} from './redux/sagas/basket/sagas';
import rootReducer from './redux/reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

const sagaMeddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMeddleware));
sagaMeddleware.run(watchFetchRegisterUser);
sagaMeddleware.run(watchFetchLoginUser);
sagaMeddleware.run(watchFetchUser);
sagaMeddleware.run(watchFetchAllUsers);
sagaMeddleware.run(watchFetchAddProduct);
sagaMeddleware.run(watchFetchProducts);
sagaMeddleware.run(watchFetchDeleteProducts);
sagaMeddleware.run(watchFetchDeleteUser);
sagaMeddleware.run(watchFetchBasket);
sagaMeddleware.run(watchFetchBasketProducts);
sagaMeddleware.run(watchFetchDeleteBasketProducts);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
