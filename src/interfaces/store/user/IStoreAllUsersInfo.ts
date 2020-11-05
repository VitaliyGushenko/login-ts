import { IUserInfoData } from './IStoreUserInfoData';

export interface IStoreAllUsersInfo {
  data: Array<IUserInfoData>;
  error: boolean;
  loading: boolean;
}
