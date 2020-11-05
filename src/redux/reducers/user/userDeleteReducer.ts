import { IUserType } from '../../../interfaces/user/IUserInfo';
import {
  REQUESTED_DELETE_USER,
  REQUESTED_SUCCEEDED_DELETE_USER,
  REQUESTED_FAILED_DELETE_USER,
  FETCHED_DELETE_USER,
} from '../../types/user/types';

const initialState = {
  data: {},
  loading: false,
  error: false,
};
export default (state = initialState, action: IUserType) => {
  switch (action.type) {
    case REQUESTED_DELETE_USER:
      return {
        data: {},
        loading: true,
        error: false,
      };
    case REQUESTED_SUCCEEDED_DELETE_USER:
      return {
        data: {},
        loading: false,
        error: false,
      };
    case REQUESTED_FAILED_DELETE_USER:
      return {
        data: {},
        loading: false,
        error: true,
      };
    case FETCHED_DELETE_USER:
      return {};
    default:
      return state;
  }
};
