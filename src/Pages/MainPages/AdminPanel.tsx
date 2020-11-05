import React, { useEffect, useState } from 'react';
import User from '../../components/MainPage/AdminPanel/User';
import { fetchAllUsers } from '../../redux/actions/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../interfaces/store/IStore';
import { IUserInfoData } from '../../interfaces/store/user/IStoreUserInfoData';
import './../Pages.css';

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
      <Content className="contentStyleAdminPanel">
        <div className="site-layout-background">
          {loading || !check ? (
            <p>{!error ? 'Loading...' : 'Error, try again'}</p>
          ) : (
            <div className="styleWidth">
              <h2>List users</h2>
              <div className="contentStyleListProducts">{usersShow}</div>
            </div>
          )}
        </div>
      </Content>
    </div>
  );
};

export default AdminPanel;
