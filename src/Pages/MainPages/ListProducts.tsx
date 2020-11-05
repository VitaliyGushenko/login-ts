import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/product/actions';

import Product from '../../components/MainPage/Products/Product';
import AddProduct from '../../components/MainPage/Products/AddProduct';
import { IStore } from '../../interfaces/store/IStore';
import { IProduct } from '../../interfaces/store/basketAndProduct/IProduct';
import { IUserInfoData } from '../../interfaces/store/user/IStoreUserInfoData';
import './../Pages.css';

import { Layout } from 'antd';

const { Content } = Layout;

const ListProducts = ({ name, role, uid }: IUserInfoData) => {
  const [check, fCheck] = useState(false);

  const dispatch = useDispatch();

  const products = useSelector((state: IStore) => {
    return state.products.data;
  });

  const loading = useSelector((state: IStore) => state.products.loading);
  const error = useSelector((state: IStore) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
    fCheck(true);
  }, [dispatch]);

  const listProducts =
    products !== undefined
      ? products.map((element: IProduct) => {
          Object.assign(element, { userRole: role });
          return (
            <Product key={element.key!} productInfo={element} basket={false} />
          );
        })
      : null;

  const addPoductInput =
    role !== 'User' ? (
      <AddProduct name={name} uid={uid} role={role} />
    ) : (
      <div />
    );

  return (
    <div>
      <Content className="contentStyleProducts">
        <div className="site-layout-background">
          {loading || !check ? (
            <p>{!error ? 'Loading...' : 'Error, try again'}</p>
          ) : (
            <div>
              <div className="contentStyleProductsChildren">
                <h2>List Product</h2>
                <div className="contentStyleListProducts">{listProducts}</div>
              </div>

              {addPoductInput}
            </div>
          )}
        </div>
      </Content>
    </div>
  );
};

export default ListProducts;
