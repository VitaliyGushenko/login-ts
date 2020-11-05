import React, { useCallback, useState } from 'react';
import { Button, Input, Form } from 'antd';
import { fetchAddProduct } from '../../../redux/actions/product/actions';
import { useDispatch } from 'react-redux';
import { IUserInfoData } from '../../../interfaces/store/user/IStoreUserInfoData';

import './../../../Pages/Pages.css';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 7 },
};

const tailLayout = {
  wrapperCol: { offset: 9, span: 8 },
};

const AddProduct = ({ name, uid }: IUserInfoData) => {
  let [nameOrganization, setNameOrganization] = useState('');
  let [nameProduct, setNameProduct] = useState('');
  let [price, setPrice] = useState(0);
  let [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const add = () => {
    const dataAddProduct = {
      userName: name!,
      userUid: uid!,
      nameOrganization: nameOrganization,
      nameProduct: nameProduct,
      price: price,
      count: count,
    };

    dispatch(fetchAddProduct(dataAddProduct));

    setNameOrganization('');
    setNameProduct('');
    setPrice(0);
    setCount(0);
  };

  const setNameOrganizationCallback = useCallback((event) => {
    event.persist();
    setNameOrganization(event.target.value);
  }, []);

  const setNameProductCallback = useCallback((event) => {
    event.persist();
    setNameProduct(event.target.value);
  }, []);

  const setPriceCallback = useCallback((event) => {
    event.persist();
    setPrice(+event.target.value);
  }, []);

  const setCountCallback = useCallback((event) => {
    event.persist();
    setCount(+event.target.value);
  }, []);

  return (
    <Form
      className="form"
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
    >
      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <h2>Add new Product</h2>
      </Form.Item>

      <Form.Item
        className="marginLeft"
        label="NameOrganization"
        name="nameOrganization"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
          type="text"
          onChange={setNameOrganizationCallback}
          value={nameOrganization}
        />
      </Form.Item>
      <Form.Item
        className="marginLeft"
        label="NameProduct"
        name="NameProduct"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
          type="text"
          onChange={setNameProductCallback}
          value={nameProduct}
        />
      </Form.Item>

      <Form.Item
        className="marginLeft"
        label="Price"
        name="Price"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input type="number" onChange={setPriceCallback} value={price} />
      </Form.Item>

      <Form.Item
        className="marginLeft"
        label="Count"
        name="Count"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input type="number" onChange={setCountCallback} value={count} />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Button className="loginBtn" value="Enter" onClick={add}>
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
