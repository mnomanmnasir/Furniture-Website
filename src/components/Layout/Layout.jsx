import React from 'react'
import Routers from '../../routers/Routers'
import AdminNav from '../../admin/AdminNav'
import { useLocation } from 'react-router-dom'
// import Header from '../Header/Header'


const Layout = () => {
   
   const location = useLocation();


   
    return (

        <>
        {location.pathname.startsWith('/dashboard') ? <AdminNav /> : <></>}
         
         <div>

             <Routers />
         </div>

        </>
    )
}

export default Layout;