import React from 'react';
import './style.scss';
import { useMenu } from '../../../hooks/useMenu.tsx';
import { MdDashboard, MdSettings, MdVerifiedUser } from 'react-icons/md';
import { FaProductHunt, FaRegUser, FaUsers } from 'react-icons/fa6';
import { Accordion } from '../Accordion/Accordion.tsx';
import { Link } from 'react-router-dom';

function Menu(props) {
  const { menu } = useMenu();
  return (
    <aside
      id="menu"
      data-opened={menu}
    >
      <div className="menu-title"> Navigation </div>
      <div className="menu-links-box">
        <Link
          className="menu-links-box-item"
          to={'http://localhost:5173/admin'}
        >
          <MdDashboard />
          <span>Dashboard</span>
        </Link>

        <Accordion
          headText={'Products'}
          rootLink={'products'}
          headIcon={<FaProductHunt />}
          linksData={[
            {
              link: 'analytics',
              text: 'Analytics',
            },
            {
              link: 'create',
              text: 'Create',
            },
            {
              link: 'edit',
              text: 'Edit',
            },
            {
              link: 'view',
              text: 'View',
            },
          ]}
        />
        <Accordion
          headText={'Users'}
          rootLink={'users'}
          headIcon={<FaUsers />}
          linksData={[
            {
              link: 'analytics',
              text: 'Analytics',
            },
            {
              link: 'create',
              text: 'Create',
            },
            {
              link: 'edit',
              text: 'Edit',
            },
            {
              link: 'view',
              text: 'View',
            },
          ]}
        />
        {/*<Accordion*/}
        {/*  headText={'Categories'}*/}
        {/*  rootLink={'categories'}*/}
        {/*  headIcon={<FaProductHunt/>}*/}
        {/*  linksData={[*/}
        {/*    {link: 'analytics', text: 'Analytics'},*/}
        {/*    {link: 'create', text: 'Create'},*/}
        {/*    {link: 'edit', text: 'Edit'},*/}
        {/*    {link: 'view', text: 'View'},*/}
        {/*  ]}*/}
        {/*/>*/}

        <Link
          className="menu-links-box-item"
          to={'/admin/settings'}
        >
          <MdSettings />
          <span>Settings</span>
        </Link>
        <Link
          className="menu-links-box-item"
          to={'/admin/profile'}
        >
          <FaRegUser />
          <span>Profile</span>
        </Link>
      </div>
    </aside>
  );
}

export default Menu;
