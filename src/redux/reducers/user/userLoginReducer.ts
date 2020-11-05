import { IUserLoginType } from '../../../interfaces/user/IUserInfo';
import {
  REQUESTED_LOGIN_USER,
  REQUESTED_SUCCEEDED_LOGIN_USER,
  REQUESTED_FAILED_LOGIN_USER,
  FETCHED_LOGIN_USER,
} from '../../types/user/types';

const initialState = {
  data: {},
  loading: false,
  error: false,
};
export default (state = initialState, action: IUserLoginType) => {
  switch (action.type) {
    case REQUESTED_LOGIN_USER:
      return {
        data: {},
        loading: true,
        error: false,
      };
    case REQUESTED_SUCCEEDED_LOGIN_USER:
      return {
        data: action.userLoginInfo,
        loading: false,
        error: false,
      };
    case REQUESTED_FAILED_LOGIN_USER:
      return {
        data: {},
        loading: false,
        error: true,
      };
    case FETCHED_LOGIN_USER:
      return {};
    default:
      return state;
  }
};
