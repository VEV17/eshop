import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "..";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Navigate } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color:'yellow'}} to={SHOP_ROUTE}>Магазин электроники</NavLink>
          {user.isAuth ?
            <Nav className="ml-auto" style={{color:'yellow'}}>     
                <Button variant={"outline-light"} className="mx-1" onClick={() => navigate(ADMIN_ROUTE)}>Админка</Button>
                <Button variant={"outline-light"} className="mx-1">Корзина</Button>
                <Button variant={"outline-light"} className="mx-2" onClick={()=> navigate(LOGIN_ROUTE)}>Выйти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color:'yellow'}}>     
                <Button variant={"outline-light"}>Товары</Button>
                <Button variant={"outline-light"} onClick={()=> user.setIsAuth(true)}>Войти</Button>
                <Button variant={"outline-light"}>Регистрация</Button>
            </Nav> }
        </Container>
      </Navbar>
    )
});
export default NavBar;