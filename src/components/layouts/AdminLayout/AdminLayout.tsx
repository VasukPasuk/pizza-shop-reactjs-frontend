import React from 'react';
import './AdminLayout.style.scss';

import Header from '../../ui/Header/Header.tsx';
import {Outlet} from 'react-router-dom';
import UpperBar from '../../ui/UpperBar/UpperBar.tsx';
import Drawer from "../../ui/Drawer/Drawer.tsx";


function AdminLayout() {
  return (
    <>
      <Header role="admin"/>
      <div id="admin-layout">
        <Drawer/>
        <div className="content-wrapper">
          <main className="main-wrapper">
            <UpperBar/>
            <Outlet/>
          </main>
        </div>
      </div>

    </>
  );
}

export default AdminLayout;
