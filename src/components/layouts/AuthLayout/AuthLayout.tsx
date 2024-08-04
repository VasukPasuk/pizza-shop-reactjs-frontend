import React from 'react';
import './style.scss';
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";


function AuthLayout(props) {
  return (
    <div className="auth-page">
      <Outlet/>
      <ToastContainer position="bottom-left"/>
    </div>
  )
}

export default AuthLayout