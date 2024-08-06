import {Navigate } from 'react-router-dom'
import React from "react";
import {Role} from "../typing/types.tsx";
import {RootState, useAppSelector} from "../redux/store.tsx";

interface ProtectedByRole {
  children: React.ReactNode
  role: Role
}

function ProtectedByRole(props: ProtectedByRole) {
  const user_role = useAppSelector((state:RootState) => state.user.user.role)
  const {children, role} = props;
  if (user_role !== role) {
    return <Navigate to={'/'}/>
  }
  return children
}
export default ProtectedByRole