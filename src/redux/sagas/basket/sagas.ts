import { takeEvery, put, call } from 'redux-saga/effects';

import firebase from 'firebase';
import {
  FETCHED_ADD_BASKET_PRODUCT,
  FETCHED_BASKET_PRODUCTS,
  FETCHED_DELETE_BASKET_PRODUCTS,
} from '../../types/basket/types';
import {
  fetchBasketProducts,
  requestAddBasketProduct,
  requestBasketProducts,
  requestDeleteBasketProducts,
  requestErrorAddBasketProduct,
  requestErrorBasketProducts,
  requestErrorDeleteBasketProducts,
  requestSuccessAddBasketProduct,
  requestSuccessBasketProducts,
  requestSuccessDeleteBasketProducts,
} from '../../actions/basket/actions';
import { fetchProducts } from '../../actions/product/actions';
import {
  IProductDeleteShowRequestSuccsess,
  IProductRequestSuccsess,
} from '../../../interfaces/product/IProductInfo';
import {
  addBasketProduct,
  deleteBasketProduct,
  getBasketProduct,
} from '../../../firebase/firebase.services';

// add BasketProduct

export function* watchFetchBasket() {
  yield takeEvery(FETCHED_ADD_BASKET_PRODUCT, fetchAsyncBasket);
}

function* fetchAsyncBasket(product: IProductRequestSuccsess) {
  try {
    yield put(requestAddBasketProduct());

    yield call(() => {
      return addBasketProduct(product);
    });
    yield put(requestSuccessAddBasketProduct());
    yield put(fetchProducts());
  } catch (error) {
    yield put(requestErrorAddBasketProduct());
  }
}

// get BasketProducts

export function* watchFetchBasketProducts() {
  yield takeEvery(FETCHED_BASKET_PRODUCTS, fetchAsyncBasketProducts);
}

function* fetchAsyncBasketProducts(uid: IProductDeleteShowRequestSuccsess) {
  try {
    yield put(requestBasketProducts());
    const data = yield call(() => {
      return getBasketProduct(uid.data);
    });

    yield put(requestSuccessBasketProducts(data));
  } catch (error) {
    yield put(requestErrorBasketProducts());
  }
}

// delete BasketProduct

export function* watchFetchDeleteBasketProducts() {
  yield takeEvery(
    FETCHED_DELETE_BASKET_PRODUCTS,
    fetchAsyncDeleteBasketProducts
  );
}

function* fetchAsyncDeleteBasketProducts(
  name: IProductDeleteShowRequestSuccsess
) {
  try {
    yield put(requestDeleteBasketProducts());
    yield call(() => {
      return deleteBasketProduct(name.data);
    });
    yield put(requestSuccessDeleteBasketProducts());
    yield put(fetchBasketProducts(firebase.auth().currentUser!.uid));
  } catch (error) {
    yield put(requestErrorDeleteBasketProducts());
  }
}
