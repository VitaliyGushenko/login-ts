import { IProductRequestSuccsess } from '../../../interfaces/product/IProductInfo';
import {
  REQUESTED_PRODUCTS,
  REQUESTED_SUCCEEDED_PRODUCTS,
  REQUESTED_FAILED_PRODUCTS,
  FETCHED_PRODUCTS,
} from '../../types/product/types';

const initialState = {
  data: [],
  loading: false,
  error: false,
};
export default (state = initialState, action: IProductRequestSuccsess) => {
  switch (action.type) {
    case REQUESTED_PRODUCTS:
      return {
        data: [],
        loading: true,
        error: false,
      };
    case REQUESTED_SUCCEEDED_PRODUCTS:
      return {
        data: action.data,
        loading: false,
        error: false,
      };
    case REQUESTED_FAILED_PRODUCTS:
      return {
        data: [],
        loading: false,
        error: true,
      };
    case FETCHED_PRODUCTS:
      return [];
    default:
      return state;
  }
};
