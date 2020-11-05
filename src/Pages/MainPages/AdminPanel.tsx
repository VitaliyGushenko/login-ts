import React, { useEffect, useState } from 'react';
import User from '../../components/MainPage/AdminPanel/User';
import { fetchAllUsers } from '../../redux/actions/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../interfaces/store/IStore';
import { IUserInfoData } from '../../interfaces/store/user/IStoreUserInfoData';

import { Layout } from 'antd';

const { Content } = Layout;

const AdminPanel = () => {
  const [check, fCheck] = useState(false);

  const dispatch = useDispatch();

  const usersAll = useSelector((state: IStore) => {
    return state.usersInfo.data;
  });

  const loading = useSelector((state: IStore) => state.usersInfo.loading);
  const error = useSelector((state: IStore) => state.usersInfo.error);

  useEffect(() => {
    dispatch(fetchAllUsers());
    fCheck(true);
  }, [dispatch]);

  const usersShow =
    usersAll !== undefined
      ? usersAll.map((element: IUserInfoData) => {
          return (
            <User key={element.key} name={element.name} uid={element.uid} />
          );
        })
      : null;

  return (
    <div>
      <Content style={{ margin: '24px 16px 0', padding: '0 40% 0 30%' }}>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 850,
            textAlign: 'center',
            paddingRight: 50,
            paddingLeft: 50,
          }}
        >
          {loading || !check ? (
            <p>{!error ? 'Loading...' : 'Error, try again'}</p>
          ) : (
            <div
              style={{
                width: '500px',
              }}
            >
              <h2>List users</h2>
              <div
                style={{
                  textAlign: 'left',
                }}
              >
                {usersShow}
              </div>
            </div>
          )}
        </div>
      </Content>
    </div>
  );
};

export default AdminPanel;
