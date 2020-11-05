import { takeEvery, put, call } from 'redux-saga/effects';

import {
  FETCHED_ALL_USERS,
  FETCHED_DELETE_USER,
  FETCHED_LOGIN_USER,
  FETCHED_REGISTER_USER,
  FETCHED_USER,
} from '../../types/user/types';
import {
  fetchAllUsers,
  requestAllUsers,
  requestDeleteUser,
  requestErrorAllUsers,
  requestErrorDeleteUser,
  requestErrorLoginUser,
  requestErrorRegisterUser,
  requestErrorUser,
  requestLoginUser,
  requestRegisterUser,
  requestSuccessAllUsers,
  requestSuccessDeleteUser,
  requestSuccessLoginUser,
  requestSuccessRegisterUser,
  requestSuccessUser,
  requestUser,
} from '../../actions/user/actions';
import {
  IUserLoginType,
  IUserRegisrationType,
  IUserType,
} from '../../../interfaces/user/IUserInfo';
import {
  allUsers,
  deleteUser,
  getInfoCurrentUser,
  loginUser,
  registerUser,
} from '../../../firebase/firebase.services';

// login User

export function* watchFetchLoginUser() {
  yield takeEvery(FETCHED_LOGIN_USER, fetchAsyncLoginUser);
}

function* fetchAsyncLoginUser({ userLoginInfo }: IUserLoginType) {
  try {
    const { email, password } = userLoginInfo;
    yield put(requestLoginUser());
    yield call(() => {
      loginUser(email!, password!);
    });

    yield put(requestSuccessLoginUser());
  } catch (error) {
    yield put(requestErrorLoginUser());
  }
}

// register User

export function* watchFetchRegisterUser() {
  yield takeEvery(FETCHED_REGISTER_USER, fetchAsyncRegisterUser);
}

function* fetchAsyncRegisterUser({
  userRegistrationInfo,
}: IUserRegisrationType) {
  try {
    const { cash, email, name, password, supplier } = userRegistrationInfo;
    yield put(requestRegisterUser());
    yield call(() => {
      registerUser(cash!, email!, name!, password!, supplier!);
    });

    yield put(requestSuccessRegisterUser());
  } catch (error) {
    yield put(requestErrorRegisterUser());
  }
}

// show info current User

export function* watchFetchUser() {
  yield takeEvery(FETCHED_USER, fetchAsync);
}

function* fetchAsync({ uid }: IUserType) {
  try {
    yield put(requestUser());
    const data = yield call(() => {
      return getInfoCurrentUser(uid);
    });
    yield put(requestSuccessUser(data));
  } catch (error) {
    yield put(requestErrorUser());
  }
}

// delete user

export function* watchFetchDeleteUser() {
  yield takeEvery(FETCHED_DELETE_USER, fetchAsyncDeleteUser);
}

function* fetchAsyncDeleteUser({ uid }: IUserType) {
  try {
    console.log(uid);
    yield put(requestDeleteUser());
    yield call(() => {
      return deleteUser(uid);
    });
    yield put(requestSuccessDeleteUser());
    yield put(fetchAllUsers());
  } catch (error) {
    yield put(requestErrorDeleteUser());
  }
}

// All Users

export function* watchFetchAllUsers() {
  yield takeEvery(FETCHED_ALL_USERS, fetchAsyncUsers);
}

function* fetchAsyncUsers() {
  try {
    yield put(requestAllUsers());
    const data = yield call(() => {
      return allUsers();
    });
    yield put(requestSuccessAllUsers(data));
  } catch (error) {
    yield put(requestErrorAllUsers());
  }
}
