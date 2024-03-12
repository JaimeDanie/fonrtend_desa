import React, { useState } from 'react';
import { Drawer, Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './header.style.scss';
import { MenuDesktop, MenuMobile } from './menu.component';
import { MedicineBoxOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderComponent = () => {
  //Drawer: Header
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Header className='section-navbar'>
        <div className="section-logo">
          <a href='/'>Dr Patiya</a> 
        </div>
        <MenuDesktop />
        <div className='section-hamburguer'>
          <MenuOutlined onClick={showDrawer} />
          <Drawer theme="dark" title="Menú" placement="right" onClose={onClose} open={visible} className='section-drawer'>
            <MenuMobile />
          </Drawer>
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;