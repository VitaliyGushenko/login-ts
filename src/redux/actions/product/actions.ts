import { IProduct } from '../../../interfaces/store/basketAndProduct/IProduct';
import {
  REQUESTED_PRODUCTS,
  REQUESTED_DELETE_PRODUCTS,
  REQUESTED_FAILED_PRODUCTS,
  REQUESTED_FAILED_DELETE_PRODUCTS,
  REQUESTED_SUCCEEDED_PRODUCTS,
  REQUESTED_SUCCEEDED_DELETE_PRODUCTS,
  FETCHED_PRODUCTS,
  FETCHED_DELETE_PRODUCTS,
  REQUESTED_ADD_PRODUCT,
  REQUESTED_SUCCEEDED_ADD_PRODUCT,
  FETCHED_ADD_PRODUCT,
  REQUESTED_FAILED_ADD_PRODUCT,
} from './../../types/product/types';

// add product
export const requestAddProduct = () => {
  return { type: REQUESTED_ADD_PRODUCT };
};

export const requestSuccessAddProduct = () => {
  return { type: REQUESTED_SUCCEEDED_ADD_PRODUCT };
};

export const requestErrorAddProduct = () => {
  return { type: REQUESTED_FAILED_ADD_PRODUCT };
};

export const fetchAddProduct = (data: IProduct) => {
  return { type: FETCHED_ADD_PRODUCT, data: data };
};

// show products

export const requestProducts = () => {
  return { type: REQUESTED_PRODUCTS };
};

export const requestSuccessProducts = (data: IProduct) => {
  return { type: REQUESTED_SUCCEEDED_PRODUCTS, data: data };
};

export const requestErrorProducts = () => {
  return { type: REQUESTED_FAILED_PRODUCTS };
};

export const fetchProducts = () => {
  return { type: FETCHED_PRODUCTS };
};

// delete product

export const requestDeleteProducts = () => {
  return { type: REQUESTED_DELETE_PRODUCTS };
};

export const requestSuccessDeleteProducts = () => {
  return { type: REQUESTED_SUCCEEDED_DELETE_PRODUCTS };
};

export const requestErrorDeleteProducts = () => {
  return { type: REQUESTED_FAILED_DELETE_PRODUCTS };
};

export const fetchDeleteProducts = (name: string) => {
  return { type: FETCHED_DELETE_PRODUCTS, data: name };
};
