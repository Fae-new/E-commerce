import React, { useContext } from 'react'
import { UserContext } from '../Context/userContext';
import { Outlet, Navigate } from 'react-router-dom';
import Header from './Header';


const ProtectedRoutes = () => {



  const { user } = useContext(UserContext)

  if (!user) {
    return <Navigate to='login' />
  }
  return (
    <> <Header /> <Outlet /></>
  )
}

export default ProtectedRoutes;