import userReducer from './user/userReducer';
import usersReducer from './user/usersReducer';
import productReducer from './product/productReducer';
import basketProductsReducer from './basket/basketProductsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  userInfo: userReducer,
  usersInfo: usersReducer,
  products: productReducer,
  basket: basketProductsReducer,
});
