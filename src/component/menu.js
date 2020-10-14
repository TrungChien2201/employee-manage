import { Image, Menu } from 'antd';
import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Login from './login';
import { useAuth0 } from '@auth0/auth0-react';
import Admin from './admin/admin';

const { SubMenu } = Menu;

const MenuPage = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="d-flex justify-content-between">
      <Menu
        className="menu"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        theme='dark'
        mode="inline"
      >
        {isAuthenticated ? (
          <>
            <div className="profile">
              <Image className="profile-avatar" src={user.picture} />
              <h3 className="profile-name">{user.nickname}</h3>
            </div>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <MailOutlined />
                  <span>Profile</span>
                </span>
              }
            >
              <Menu.Item key="5">Email: {user.email}</Menu.Item>
              <Menu.Item key="6">Name: {user.name}</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <SettingOutlined />
                  <span>Navigation Three</span>
                </span>
              }
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </>
        ) : ('')}
        <Login />
      </Menu>
      <Admin />
    </div>
  );
}
export default MenuPage;