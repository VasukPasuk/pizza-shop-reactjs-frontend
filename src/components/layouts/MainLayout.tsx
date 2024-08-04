import Header from '../ui/Header/Header.tsx';
import Footer from '../ui/Footer/Footer.tsx';
import { Outlet } from 'react-router-dom';
import {ToastContainer} from "react-toastify";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer position={"bottom-left"} />
    </>
  );
}

export default MainLayout;
