import { IUserLoginType } from '../../../interfaces/user/IUserInfo';
import {
  REQUESTED_REGISTER_USER,
  REQUESTED_SUCCEEDED_REGISTER_USER,
  REQUESTED_FAILED_REGISTER_USER,
  FETCHED_REGISTER_USER,
} from '../../types/user/types';

const initialState = {
  data: {},
  loading: false,
  error: false,
};
export default (state = initialState, action: IUserLoginType) => {
  switch (action.type) {
    case REQUESTED_REGISTER_USER:
      return {
        data: {},
        loading: true,
        error: false,
      };
    case REQUESTED_SUCCEEDED_REGISTER_USER:
      return {
        data: action.userLoginInfo,
        loading: false,
        error: false,
      };
    case REQUESTED_FAILED_REGISTER_USER:
      return {
        data: {},
        loading: false,
        error: true,
      };
    case FETCHED_REGISTER_USER:
      return {};
    default:
      return state;
  }
};
