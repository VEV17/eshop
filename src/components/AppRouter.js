import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { Context } from "..";
import Auth from "../pages/Auth";
import Shop from "../pages/Shop";
import {authRoutes, publicRoutes} from '../routes';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const {user} = useContext(Context);
    return(
        <Routes>
            <Route key={SHOP_ROUTE} path={SHOP_ROUTE} element={<Shop />}/>
            <Route key={LOGIN_ROUTE} path={LOGIN_ROUTE} element={<Auth />} />
            <Route key={REGISTRATION_ROUTE} path={REGISTRATION_ROUTE} element={<Auth />} />
            <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
 
    )
}

export default AppRouter;