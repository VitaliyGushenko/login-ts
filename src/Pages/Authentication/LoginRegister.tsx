import React, { createRef, useCallback, useState } from 'react';
import '../../App.css';
import { Button, Input, Form } from 'antd';
import { useDispatch } from 'react-redux';
import './LoginForm.css';
import {
  fetchLoginUser,
  fetchRegisterUser,
} from '../../redux/actions/user/actions';
import { SubmitBtn } from '../../components/Authentication/SubmitBtn';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 7 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const LoginRegister = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [supplier, setSupplier] = useState(false);

  const [formTitle, setTitle] = useState('Login');
  const [loginBtn, setLoginBtn] = useState(true);

  const dispatch = useDispatch();

  const refCheckbox = createRef<HTMLInputElement>();

  const login = (e: Event) => {
    e.preventDefault();

    const dataLoginUser = {
      email: email,
      password: password,
    };

    dispatch(fetchLoginUser(dataLoginUser));
  };

  const register = (e: Event) => {
    e.preventDefault();

    const dataRegisterUser = {
      email: email,
      password: password,
      name: name,
      supplier: supplier,
      cash: 0,
    };

    dispatch(fetchRegisterUser(dataRegisterUser));
  };

  const getAction = (value: boolean): void | undefined => {
    const action = value ? 'reg' : '';
    if (action) {
      setTitle('Register New User');
      setLoginBtn(false);
    } else {
      setTitle('Login');
      setLoginBtn(true);
    }
  };

  const getActionCallback = useCallback(() => {
    getAction(loginBtn);
  }, [loginBtn]);

  const submitBtn = loginBtn ? (
    <SubmitBtn loginRegister={login} value="Enter" />
  ) : (
    <SubmitBtn loginRegister={register} value="Register" />
  );

  const loginRegister = loginBtn ? (
    <Button className="registerBtn" onClick={getActionCallback}>
      Register
    </Button>
  ) : (
    <Button className="registerBtn" onClick={getActionCallback}>
      Login
    </Button>
  );

  const setNameCallback = useCallback((event) => {
    event.persist();
    setName(event.target.value);
  }, []);

  const setEmailCallback = useCallback((event) => {
    event.persist();
    setEmail(event.target.value);
  }, []);

  const setPasswordCallback = useCallback((event) => {
    event.persist();
    setPassword(event.target.value);
  }, []);

  const setSupplierCallback = useCallback((event) => {
    event.persist();
    setSupplier(event.target.checked);
  }, []);

  let loginRegusterShow = !loginBtn ? (
    <div>
      <Form.Item label="Name" name="username">
        <Input type="name" onChange={setNameCallback} value={name} />
      </Form.Item>
      <Form.Item label="You supplier?" name="usersupplier">
        <input
          type="checkbox"
          ref={refCheckbox}
          onChange={setSupplierCallback}
        />
      </Form.Item>
    </div>
  ) : (
    <div></div>
  );

  return (
    <div>
      <div>
        <Form className="form" {...layout} name="basic">
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <h2>{formTitle}</h2>
          </Form.Item>

          <Form.Item label="Email" name="useremail">
            <Input type="text" onChange={setEmailCallback} value={email} />
          </Form.Item>

          <Form.Item label="Password" name="userpassword">
            <Input
              type="password"
              onChange={setPasswordCallback}
              value={password}
            />
          </Form.Item>
          {loginRegusterShow}
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            {submitBtn}
          </Form.Item>
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            {loginRegister}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginRegister;
