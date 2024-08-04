import React, {useContext} from 'react';
import Header from '../ui/Header/Header.tsx';
import Footer from '../ui/Footer/Footer.tsx';
import { Outlet } from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import {ThemeContext} from "../../context/ThemeContext.tsx";

function MainLayout(props) {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer theme={theme} position={"bottom-left"} />
    </>
  );
}

export default MainLayout;
