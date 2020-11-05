import { Button } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IUserInfoData } from '../../../interfaces/store/user/IStoreUserInfoData';
import { fetchDeleteUser } from '../../../redux/actions/user/actions';

const User = ({ name, uid }: IUserInfoData) => {
  const dispatch = useDispatch();

  const deleteUser = useCallback(
    (uid: string) => {
      dispatch(fetchDeleteUser(uid));
    },
    [dispatch]
  );

  const deleteUserCallback = useCallback(() => {
    deleteUser(uid!);
  }, [deleteUser, uid]);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '10px',
          paddingTop: '10px',
          borderBottom: '1px solid black',
          marginBottom: '10px',
        }}
      >
        <div>{name}</div>
        <div style={{ textAlign: 'right' }}>
          <Button onClick={deleteUserCallback}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default User;
