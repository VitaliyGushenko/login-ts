import { IUserRequestSuccsess } from '../../../interfaces/user/IUserInfo';
import {
  REQUESTED_ALL_USERS,
  REQUESTED_SUCCEEDED_ALL_USERS,
  REQUESTED_FAILED_ALL_USERS,
  FETCHED_ALL_USERS,
} from '../../types/user/types';

const initialState = {
  data: [],
  loading: false,
  error: false,
};
export default (state = initialState, action: IUserRequestSuccsess) => {
  switch (action.type) {
    case REQUESTED_ALL_USERS:
      return {
        data: [],
        loading: true,
        error: false,
      };
    case REQUESTED_SUCCEEDED_ALL_USERS:
      return {
        data: action.userInfo,
        loading: false,
        error: false,
      };
    case REQUESTED_FAILED_ALL_USERS:
      return {
        data: [],
        loading: false,
        error: true,
      };
    case FETCHED_ALL_USERS:
      return [];
    default:
      return state;
  }
};
