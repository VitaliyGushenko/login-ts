import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminPanel from './AdminPanel';
import Basket from './Basket';
import ListProducts from './ListProducts';
import { fetchUser } from '../../redux/actions/user/actions';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import { IStore } from '../../interfaces/store/IStore';
import { IUserInfoData } from '../../interfaces/store/user/IStoreUserInfoData';

const Home = ({ email, uid }: IUserInfoData) => {
  const dispatch = useDispatch();

  const [check, fCheck] = useState(false);

  const userCurrent = useSelector((state: IStore) => {
    return state.userInfo.data;
  });
  const loading = useSelector((state: IStore) => state.userInfo.loading);
  const error = useSelector((state: IStore) => state.userInfo.error);

  const name = userCurrent.name;
  const password = userCurrent.password;
  const role = userCurrent.role;
  const cash = userCurrent.cash;

  useEffect(() => {
    dispatch(fetchUser(uid!));
    fCheck(true);
  }, [dispatch, uid]);

  const header =
    loading || !check ? (
      <Header email="" name="" password="" role="" cash={0} />
    ) : (
      <Header
        email={email}
        name={name}
        password={password}
        role={role}
        cash={cash}
      />
    );

  return (
    <div className="app-wrapper">
      {header}
      <Navbar role={role} />
      <div className="app-wrapper-content">
        {loading || !check ? (
          <p>{!error ? 'Loading...' : 'Error, try again'}</p>
        ) : (
          <div>
            <Route
              path="/products"
              render={() => <ListProducts role={role} name={name} uid={uid} />}
            />
            <Route path="/adminPanel" render={() => <AdminPanel />} />
            <Route
              path="/basket"
              render={() => <Basket name={name} uid={uid} role={role} />}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
