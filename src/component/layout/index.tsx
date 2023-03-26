import React from 'react';

import { Outlet } from 'react-router-dom';
import { Breadcrumb, Layout as LayoutAntd, Menu } from 'antd';

// global components
import NavMenu from '../moleculs/navbar/NavMenu';
import Footer from '../atom/footer/Footer';
const { Content } = LayoutAntd;

export default function Layout() {
  return (
    <>
      <LayoutAntd>
        <NavMenu/>
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </LayoutAntd>
    </>
  );
}
