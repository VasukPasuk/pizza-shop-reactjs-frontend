import React from 'react';
import './AdminLayout.style.scss';

import Header from '../../ui/Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import Menu from '../../ui/Menu/Menu.tsx';
import UpperBar from '../../ui/UpperBar/UpperBar.tsx';
import { MenuProvider } from '../../../context/MenuContext.tsx';


function AdminLayout(props) {
  return (
    <>
      <Header role="admin" />
      <MenuProvider>
        <div className="content-wrapper">
          <Menu />
          <main className="main-wrapper">
            <UpperBar />
            <Outlet />
          </main>
        </div>
      </MenuProvider>
    </>
  );
}

export default AdminLayout;
