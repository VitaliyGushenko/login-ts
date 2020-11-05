import React, { useEffect, useState } from 'react';
import { fetchBasketProducts } from '../../redux/actions/basket/actions';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/MainPage/Products/Product';
import { IProduct } from '../../interfaces/store/basketAndProduct/IProduct';
import { IStore } from '../../interfaces/store/IStore';
import { IUserInfoData } from '../../interfaces/store/user/IStoreUserInfoData';

import { Layout } from 'antd';

const { Content } = Layout;

const Basket = ({ name, uid }: IUserInfoData) => {
  const [check, fCheck] = useState(false);

  const dispatch = useDispatch();

  const basket = useSelector((state: IStore) => {
    return state.basket.data;
  });

  const loading = useSelector((state: IStore) => state.basket.loading);
  const error = useSelector((state: IStore) => state.basket.error);

  useEffect(() => {
    dispatch(fetchBasketProducts(uid!));
    fCheck(true);
  }, [dispatch, uid]);

  const listBroductProducts =
    basket !== undefined
      ? basket.map((element: IProduct) => {
          return (
            <Product key={element.key!} productInfo={element} basket={true} />
          );
        })
      : null;

  return (
    <div>
      <Content style={{ margin: '24px 16px 0', padding: '0 30% 0 30%' }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 850, textAlign: 'center' }}
        >
          {loading || !check ? (
            <p>{!error ? 'Loading...' : 'Error, try again'}</p>
          ) : (
            <div>
              <h3>Basket {name}</h3>
              <div
                style={{
                  textAlign: 'left',
                }}
              >
                {listBroductProducts}
              </div>
            </div>
          )}
        </div>
      </Content>
    </div>
  );
};

export default Basket;
