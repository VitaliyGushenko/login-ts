import { Button } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IProductInfo } from '../../../interfaces/product/IProductInfo';
import { IProduct } from '../../../interfaces/store/basketAndProduct/IProduct';
import {
  fetchAddBasketProduct,
  fetchDeleteBasketProducts,
} from '../../../redux/actions/basket/actions';
import { fetchDeleteProducts } from '../../../redux/actions/product/actions';

const Product = ({ productInfo, basket }: IProductInfo) => {
  const dispatch = useDispatch();

  const { count, nameProduct, price } = productInfo;

  const deleteProduct = useCallback(
    (elem: string) => {
      dispatch(fetchDeleteProducts(elem));
    },
    [dispatch]
  );

  const deleteProductCallback = useCallback(() => {
    deleteProduct(productInfo.key!);
  }, [deleteProduct, productInfo]);

  const buyProduct = useCallback(
    (elem: IProduct) => {
      dispatch(fetchAddBasketProduct(elem));
    },
    [dispatch]
  );

  const buyProductCallback = useCallback(() => {
    buyProduct(productInfo);
  }, [buyProduct, productInfo]);

  const basketProductDelete = useCallback(
    (elem: string) => {
      dispatch(fetchDeleteBasketProducts(elem));
    },
    [dispatch]
  );

  const basketProductDeleteCallback = useCallback(() => {
    basketProductDelete(productInfo.key!);
  }, [basketProductDelete, productInfo.key]);

  const buyBtn = <Button onClick={buyProductCallback}>Add</Button>;
  const adminBtnDelete =
    productInfo.userRole === 'Admin' && !basket ? (
      <Button onClick={deleteProductCallback} style={{ marginLeft: '20px' }}>
        Delete
      </Button>
    ) : (
      ''
    );

  const btnDeleteBasketProduct = basket ? (
    <Button onClick={basketProductDeleteCallback}>DeleteBasket</Button>
  ) : (
    ''
  );

  return (
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
      {nameProduct}: price: {price}, count: {count}
      <div
        style={{ textAlign: 'right', display: 'flex', flexDirection: 'row' }}
      >
        {!basket ? (count !== 0 ? buyBtn : ' Products are sold out ') : ''}
        {btnDeleteBasketProduct}
        {adminBtnDelete}
      </div>
    </div>
  );
};

export default Product;
