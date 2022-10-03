import React from 'react';
import logoimg from "../img/logo.svg";

export const Logo = () => {
    return (
        <a href="/">
            <img src={ logoimg } alt="logo"/>
        </a>
    );
}