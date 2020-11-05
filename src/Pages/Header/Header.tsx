import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import fire from '../../firebase/fire';
import { IUserInfoData } from '../../interfaces/store/user/IStoreUserInfoData';
import { clearStore } from '../../redux/actions/store/actions';
import './Header.css';

import { Layout } from 'antd';

const { Header } = Layout;

function MyHeader({ name, cash }: IUserInfoData) {
  const dispatch = useDispatch();

  const logout = () => {
    fire.auth().signOut();
    dispatch(clearStore());
  };

  return (
    <Header className="header">
      {!name ? (
        <p>Loading...</p>
      ) : (
        <div>
          {name}
          {
            <NavLink to="/login">
              <Button
                onClick={logout}
                style={{ marginRight: '10px', marginLeft: '10px' }}
              >
                Logout
              </Button>
            </NavLink>
          }
        </div>
      )}
    </Header>
  );
}

export default MyHeader;
