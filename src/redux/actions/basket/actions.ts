import { IProduct } from '../../../interfaces/store/basketAndProduct/IProduct';
import {
  FETCHED_ADD_BASKET_PRODUCT,
  FETCHED_BASKET_PRODUCTS,
  FETCHED_DELETE_BASKET_PRODUCTS,
  REQUESTED_ADD_BASKET_PRODUCT,
  REQUESTED_BASKET_PRODUCTS,
  REQUESTED_DELETE_BASKET_PRODUCTS,
  REQUESTED_FAILED_ADD_BASKET_PRODUCT,
  REQUESTED_FAILED_BASKET_PRODUCTS,
  REQUESTED_FAILED_DELETE_BASKET_PRODUCTS,
  REQUESTED_SUCCEEDED_ADD_BASKET_PRODUCT,
  REQUESTED_SUCCEEDED_BASKET_PRODUCTS,
  REQUESTED_SUCCEEDED_DELETE_BASKET_PRODUCTS,
} from '../../types/basket/types';

// add BasketProduct
export const requestAddBasketProduct = () => {
  return { type: REQUESTED_ADD_BASKET_PRODUCT };
};

export const requestSuccessAddBasketProduct = () => {
  return { type: REQUESTED_SUCCEEDED_ADD_BASKET_PRODUCT };
};

export const requestErrorAddBasketProduct = () => {
  return { type: REQUESTED_FAILED_ADD_BASKET_PRODUCT };
};

export const fetchAddBasketProduct = (product: IProduct) => {
  return { type: FETCHED_ADD_BASKET_PRODUCT, data: product };
};

// show BasketProducts

export const requestBasketProducts = () => {
  return { type: REQUESTED_BASKET_PRODUCTS };
};

export const requestSuccessBasketProducts = (data: IProduct) => {
  return { type: REQUESTED_SUCCEEDED_BASKET_PRODUCTS, data: data };
};

export const requestErrorBasketProducts = () => {
  return { type: REQUESTED_FAILED_BASKET_PRODUCTS };
};

export const fetchBasketProducts = (uid: string) => {
  return { type: FETCHED_BASKET_PRODUCTS, data: uid };
};

// delete BasketProduct

export const requestDeleteBasketProducts = () => {
  return { type: REQUESTED_DELETE_BASKET_PRODUCTS };
};

export const requestSuccessDeleteBasketProducts = () => {
  return { type: REQUESTED_SUCCEEDED_DELETE_BASKET_PRODUCTS };
};

export const requestErrorDeleteBasketProducts = () => {
  return { type: REQUESTED_FAILED_DELETE_BASKET_PRODUCTS };
};

export const fetchDeleteBasketProducts = (name: string) => {
  return { type: FETCHED_DELETE_BASKET_PRODUCTS, data: name };
};
