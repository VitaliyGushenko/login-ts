import { CLEAR_STORE } from './../../types/store/types';

export const clearStore = () => {
  return {
    type: CLEAR_STORE,
  };
};
