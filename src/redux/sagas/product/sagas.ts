import { takeEvery, put, call } from 'redux-saga/effects';

import {
  FETCHED_ADD_PRODUCT,
  FETCHED_DELETE_PRODUCTS,
  FETCHED_PRODUCTS,
} from '../../types/product/types';
import {
  fetchProducts,
  requestAddProduct,
  requestDeleteProducts,
  requestErrorAddProduct,
  requestErrorDeleteProducts,
  requestErrorProducts,
  requestProducts,
  requestSuccessAddProduct,
  requestSuccessDeleteProducts,
  requestSuccessProducts,
} from '../../actions/product/actions';
import {
  IProductDeleteShowRequestSuccsess,
  IProductRequestSuccsess,
} from '../../../interfaces/product/IProductInfo';
import {
  addProduct,
  deleteProduct,
  getProducts,
} from '../../../firebase/firebase.services';

// add product

export function* watchFetchAddProduct() {
  yield takeEvery(FETCHED_ADD_PRODUCT, fetchAsyncAddProduct);
}

function* fetchAsyncAddProduct(dataAddProduct: IProductRequestSuccsess) {
  try {
    yield put(requestAddProduct());
    yield call(() => {
      return addProduct(dataAddProduct);
    });

    yield put(requestSuccessAddProduct());
    yield put(fetchProducts());
  } catch (error) {
    yield put(requestErrorAddProduct());
  }
}

// get products

export function* watchFetchProducts() {
  yield takeEvery(FETCHED_PRODUCTS, fetchAsyncProducts);
}

function* fetchAsyncProducts() {
  try {
    yield put(requestProducts());
    const data = yield call(() => {
      return getProducts();
    });
    yield put(requestSuccessProducts(data));
  } catch (error) {
    yield put(requestErrorProducts());
  }
}

// delete product

export function* watchFetchDeleteProducts() {
  yield takeEvery(FETCHED_DELETE_PRODUCTS, fetchAsyncDeleteProducts);
}

function* fetchAsyncDeleteProducts(data: IProductDeleteShowRequestSuccsess) {
  try {
    yield put(requestDeleteProducts());
    yield call(() => {
      return deleteProduct(data.data);
    });
    yield put(requestSuccessDeleteProducts());
    yield put(fetchProducts());
  } catch (error) {
    yield put(requestErrorDeleteProducts());
  }
}
