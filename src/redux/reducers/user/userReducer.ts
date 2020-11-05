import { IUserRequestSuccsess } from '../../../interfaces/user/IUserInfo';
import {
  REQUESTED_USER,
  REQUESTED_SUCCEEDED_USER,
  REQUESTED_FAILED_USER,
  FETCHED_USER,
} from '../../types/user/types';

const initialState = {
  data: {},
  loading: false,
  error: false,
};
export default (state = initialState, action: IUserRequestSuccsess) => {
  switch (action.type) {
    case REQUESTED_USER:
      return {
        data: {},
        loading: true,
        error: false,
      };
    case REQUESTED_SUCCEEDED_USER:
      return {
        data: action.userInfo,
        loading: false,
        error: false,
      };
    case REQUESTED_FAILED_USER:
      return {
        data: {},
        loading: false,
        error: true,
      };
    case FETCHED_USER:
      return {};
    default:
      return state;
  }
};
