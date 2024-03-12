import React, { useState } from 'react'
import { Menu } from 'antd';

const itemsMain = [
    {
      label: 'Inicio',
      key: '/#home'
    },
    {
      label: 'Planes',
      key: '/#plans'
    },
    {
      label: 'Nosotros',
      key: '/#about-me'
    },
    {
      label: 'Servicios',
      key: '/#services'
    },
  ]

export function MenuDesktop() {
    const [current, setCurrent] = useState('');

  const onClick = (e) => {
    setCurrent(e.key);
    window.location.href = e.key;
  };
  return <Menu theme="dark" mode="horizontal" onClick={onClick} selectedKeys={[current]} items={itemsMain} className='section-menu-desktop' />
}

export function MenuMobile() {
    const [current, setCurrent] = useState('');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    window.location.href = e.key;
  };
  return <Menu theme="light" mode="inline" onClick={onClick} selectedKeys={[current]} items={itemsMain} className='section-menu-mobile' />
}
