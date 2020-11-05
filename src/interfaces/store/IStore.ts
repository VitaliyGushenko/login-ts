import { IStoreProduct } from './basketAndProduct/IStoreProduct';
import { IStoreAllUsersInfo } from './user/IStoreAllUsersInfo';
import { IStoreUserInfo } from './user/IStoreUserInfo';
// import { IStoreAllUsers } from './users/IStoreAllUsers';

// Store

export interface IStore {
  basket: IStoreProduct;
  products: IStoreProduct;
  userInfo: IStoreUserInfo;
  usersInfo: IStoreAllUsersInfo;
}
