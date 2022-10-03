import React from 'react';
import { Logo } from "./Logo";
import imgcart from "../img/cart.svg";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
    <>
        <nav>
            <Logo />
            <ul className='left-link'>
                <li>
                    <NavLink exact="true" to="/">
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact="true" to="#collection">
                        collection
                    </NavLink>
                </li>
                <li>
                    <NavLink exact="true" to="#contact">
                        contact
                    </NavLink>
                </li>
            </ul>
        </nav>
        <ul className='right-link'>
            <li>
                <NavLink exact="true" to="/cart">
                    <img src={ imgcart } alt="imgcart"/>
                </NavLink>
            </li>
            <li>
                <NavLink exact="true" to="/cart" >
                    cart
                </NavLink>
            </li>
        </ul>
    </>
    );
}

export default Nav;