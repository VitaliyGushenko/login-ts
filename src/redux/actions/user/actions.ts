import { IUserRequestSuccsess } from '../../../interfaces/user/IUserInfo';
import { IUserInfoData } from '../../../interfaces/store/user/IStoreUserInfoData';
import {
  FETCHED_ALL_USERS,
  FETCHED_DELETE_USER,
  FETCHED_LOGIN_USER,
  FETCHED_REGISTER_USER,
  FETCHED_USER,
  REQUESTED_ALL_USERS,
  REQUESTED_DELETE_USER,
  REQUESTED_FAILED_ALL_USERS,
  REQUESTED_FAILED_DELETE_USER,
  REQUESTED_FAILED_LOGIN_USER,
  REQUESTED_FAILED_REGISTER_USER,
  REQUESTED_FAILED_USER,
  REQUESTED_LOGIN_USER,
  REQUESTED_REGISTER_USER,
  REQUESTED_SUCCEEDED_ALL_USERS,
  REQUESTED_SUCCEEDED_DELETE_USER,
  REQUESTED_SUCCEEDED_LOGIN_USER,
  REQUESTED_SUCCEEDED_REGISTER_USER,
  REQUESTED_SUCCEEDED_USER,
  REQUESTED_USER,
} from '../../types/user/types';

// login User
export const requestLoginUser = () => {
  return { type: REQUESTED_LOGIN_USER };
};

export const requestSuccessLoginUser = () => {
  return { type: REQUESTED_SUCCEEDED_LOGIN_USER };
};

export const requestErrorLoginUser = () => {
  return { type: REQUESTED_FAILED_LOGIN_USER };
};

export const fetchLoginUser = (data: IUserInfoData) => {
  return { type: FETCHED_LOGIN_USER, userLoginInfo: data };
};

// register User
export const requestRegisterUser = () => {
  return { type: REQUESTED_REGISTER_USER };
};

export const requestSuccessRegisterUser = () => {
  return { type: REQUESTED_SUCCEEDED_REGISTER_USER };
};

export const requestErrorRegisterUser = () => {
  return { type: REQUESTED_FAILED_REGISTER_USER };
};

export const fetchRegisterUser = (data: IUserInfoData) => {
  return { type: FETCHED_REGISTER_USER, userRegistrationInfo: data };
};

// show info current User
export const requestUser = () => {
  return { type: REQUESTED_USER };
};

export const requestSuccessUser = (data: IUserInfoData) => {
  return { type: REQUESTED_SUCCEEDED_USER, userInfo: data };
};

export const requestErrorUser = () => {
  return { type: REQUESTED_FAILED_USER };
};

export const fetchUser = (uid: string) => {
  return { type: FETCHED_USER, uid: uid };
};

// delete user
export const requestDeleteUser = () => {
  return { type: REQUESTED_DELETE_USER };
};

export const requestSuccessDeleteUser = () => {
  return { type: REQUESTED_SUCCEEDED_DELETE_USER };
};

export const requestErrorDeleteUser = () => {
  return { type: REQUESTED_FAILED_DELETE_USER };
};

export const fetchDeleteUser = (uid: string) => {
  return { type: FETCHED_DELETE_USER, uid: uid };
};

// AllUser

export const requestAllUsers = () => {
  return { type: REQUESTED_ALL_USERS };
};

export const requestSuccessAllUsers = (data: IUserRequestSuccsess) => {
  return { type: REQUESTED_SUCCEEDED_ALL_USERS, userInfo: data };
};

export const requestErrorAllUsers = () => {
  return { type: REQUESTED_FAILED_ALL_USERS };
};

export const fetchAllUsers = () => {
  return { type: FETCHED_ALL_USERS };
};
