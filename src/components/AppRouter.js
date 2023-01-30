import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { Context } from "..";
import {authRoutes, publicRoutes} from '../routes';
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import Admin from '../pages/Admin';
import Basket from '../pages/Basket';
import Shop from '../pages/Shop';
import Auth from '../pages/Auth';
import DevicePage from '../pages/DevicePage';

const AppRouter = () => {
    const {user} = useContext(Context);
    console.log(user);
    return(
        <Routes>
            {publicRoutes.map(function (el, ind) {
                return (
                    <Route key={ind} path={el.path} element={el.Component} />
                )
            })}
        </Routes>
 
    )
}

export default AppRouter;
