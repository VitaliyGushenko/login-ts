import { IUserInfoData } from '../store/user/IStoreUserInfoData';

// registration user

export interface IUserRegisrationType {
  type: string;
  userRegistrationInfo: IUserInfoData;
}

// login user

export interface IUserLoginType {
  type: string;
  userLoginInfo: IUserInfoData;
}

// show user info

export interface IUserType {
  type: string;
  uid: string;
}

export interface IUserRequestSuccsess {
  type: string;
  userInfo: IUserInfoData;
}
