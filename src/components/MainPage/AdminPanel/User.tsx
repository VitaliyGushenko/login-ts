import { Button } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IUserInfoData } from '../../../interfaces/store/user/IStoreUserInfoData';
import { fetchDeleteUser } from '../../../redux/actions/user/actions';

import './../../../Pages/Pages.css';

const User = ({ name, uid }: IUserInfoData) => {
  const dispatch = useDispatch();

  const deleteUser = useCallback(() => {
    dispatch(fetchDeleteUser(uid!));
  }, [dispatch, uid]);

  return (
    <div>
      <div className="productContent">
        <div>{name}</div>
        <div className="contentStyleListProductsR">
          <Button onClick={deleteUser}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default User;
