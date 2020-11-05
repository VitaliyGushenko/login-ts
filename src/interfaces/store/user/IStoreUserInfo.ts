import { IUserInfoData } from './IStoreUserInfoData';

export interface IStoreUserInfo {
  data: IUserInfoData;
  error: boolean;
  loading: boolean;
}
