import { IProductRequestSuccsess } from '../../../interfaces/product/IProductInfo';
import {
  REQUESTED_BASKET_PRODUCTS,
  REQUESTED_SUCCEEDED_BASKET_PRODUCTS,
  REQUESTED_FAILED_BASKET_PRODUCTS,
  FETCHED_BASKET_PRODUCTS,
} from './../../types/basket/types';

const initialState = {
  data: [],
  loading: false,
  error: false,
};
export default (state = initialState, action: IProductRequestSuccsess) => {
  switch (action.type) {
    case REQUESTED_BASKET_PRODUCTS:
      return {
        data: [],
        loading: true,
        error: false,
      };
    case REQUESTED_SUCCEEDED_BASKET_PRODUCTS:
      return {
        data: action.data,
        loading: false,
        error: false,
      };
    case REQUESTED_FAILED_BASKET_PRODUCTS:
      return {
        data: [],
        loading: false,
        error: true,
      };
    case FETCHED_BASKET_PRODUCTS:
      return [];
    default:
      return state;
  }
};
