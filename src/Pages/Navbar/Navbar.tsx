import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { IUserInfoData } from '../../interfaces/store/user/IStoreUserInfoData';
import { Layout, Menu } from 'antd';

function Navbar({ role }: IUserInfoData) {
  const adminPnl =
    role === 'Admin' ? (
      <Menu.Item key="3">
        <NavLink to="/adminPanel" activeClassName={classes.activeLink}>
          AdminPanel
        </NavLink>
      </Menu.Item>
    ) : (
      <div></div>
    );

  return (
    <nav className={classes.nav}>
      <Layout.Sider className="sider" breakpoint="lg" collapsedWidth="0">
        <Menu className="sider" mode="inline" defaultSelectedKeys={['3']}>
          <Menu.Item key="1">
            <NavLink to="/products" activeClassName={classes.activeLink}>
              Products
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/basket" activeClassName={classes.activeLink}>
              Basket
            </NavLink>
          </Menu.Item>
          {adminPnl}
        </Menu>
      </Layout.Sider>
    </nav>
  );
}

export default Navbar;
