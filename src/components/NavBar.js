import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Context } from "..";
import { SHOP_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color:'yellow'}} to={SHOP_ROUTE}>Магазин электроники</NavLink>
          {user.isAuth ?
            <Nav className="ml-auto" style={{color:'yellow'}}>     
                <Button variant={"outline-light"} className="mx-1">Админка</Button>
                <Button variant={"outline-light"} className="mx-1">Корзина</Button>
                <Button variant={"outline-light"} className="mx-1" onClick={()=> user.setIsAuth(false)}>Выйти</Button>
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