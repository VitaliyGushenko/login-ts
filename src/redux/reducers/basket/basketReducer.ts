import { IProductRequestSuccsess } from '../../../interfaces/product/IProductInfo';
import {
  REQUESTED_ADD_BASKET_PRODUCT,
  REQUESTED_SUCCEEDED_ADD_BASKET_PRODUCT,
  REQUESTED_FAILED_ADD_BASKET_PRODUCT,
  FETCHED_ADD_BASKET_PRODUCT,
} from '../../types/basket/types';

const initialState = {
  data: {},
  loading: false,
  error: false,
};
export default (state = initialState, action: IProductRequestSuccsess) => {
  switch (action.type) {
    case REQUESTED_ADD_BASKET_PRODUCT:
      return {
        data: {},
        loading: true,
        error: false,
      };
    case REQUESTED_SUCCEEDED_ADD_BASKET_PRODUCT:
      return {
        doneAddBasket: action.data,
        loading: false,
        error: false,
      };
    case REQUESTED_FAILED_ADD_BASKET_PRODUCT:
      return {
        data: {},
        loading: false,
        error: true,
      };
    case FETCHED_ADD_BASKET_PRODUCT:
      return {};
    default:
      return state;
  }
};
