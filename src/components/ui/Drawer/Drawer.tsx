import React from 'react';
import './style.scss';
import {Accordion, AccordionItem} from "../Accordion/Accordion.tsx";
import {Link} from 'react-router-dom';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { MdPreview } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";

interface IDrawerProps {
  children?: React.ReactNode
}

function Drawer(props: IDrawerProps) {
  return (
    <aside id="admin-drawer">

      <h1 className="drawer-title">
        <MdAdminPanelSettings/>
        Admin Panel
      </h1>

      <div className="drawer-item">
        <Accordion title={"Products"}>
          <AccordionItem>
            <Link to="/products/list">
              List
            </Link>
          </AccordionItem>
          <AccordionItem>
            <Link to="/products/add">
              Add
            </Link>
          </AccordionItem>
          <AccordionItem>
            <Link to="/categories">
              Categories
            </Link>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="drawer-item drawer-orders">
        <Link to={"/orders"}>
          <span>Orders</span>
          <MdOutlineShoppingBag/>
        </Link>
      </div>
      <div className="drawer-item drawer-customers">
        <Link to={"/settings"}>
          <span>Customers</span>
          <FaUsersBetweenLines/>
        </Link>
      </div>

      <div className="drawer-item drawer-manage_reviews">
        <Link to={"/manage_reviews"}>
          <span>Manage reviews</span>
          <MdPreview/>
        </Link>
      </div>
      <div className="drawer-item drawer-settings">
        <Link to={"/settings"}>
          <span>Settings</span>
          <IoMdSettings/>
        </Link>
      </div>

    </aside>
  )
}

export default Drawer