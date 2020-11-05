import { CLEAR_STORE } from '../../types/store/types';

export default (state = {}, action: any) => {
  switch (action.type) {
    case CLEAR_STORE:
      state = null!;
      break;
    default:
      return state;
  }
};
