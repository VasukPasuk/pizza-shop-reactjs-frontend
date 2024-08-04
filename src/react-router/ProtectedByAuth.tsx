import {Navigate } from 'react-router-dom'
import React from "react";
import {RootState, useAppSelector} from "../redux/store.tsx";
import AuthLayout from "../components/layouts/AuthLayout/AuthLayout.tsx";

interface ProtectedByAuth {
  children: React.ReactNode
}

function ProtectedByAuth(props: ProtectedByAuth) {
  const {isAuth} = useAppSelector((state:RootState) => state.user)
  const {children} = props;
  // if (!isAuth) {
  //   return <Navigate to={'/'}/>
  // }
  return (
    <AuthLayout>
      children
    </AuthLayout>
  )

}
export default ProtectedByAuth