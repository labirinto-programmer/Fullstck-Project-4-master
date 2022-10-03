import React, { useState } from 'react';
import Nav from "./Nav";

const Header = () => {
    // For scroll header change background color
    const [headerColor, setHeaderColor] = useState(false);
    const changeHeader = () => {
        if (window.scrollY > 100) {
            setHeaderColor(true);
        } else {
            setHeaderColor(false);
        }
    }
    window.addEventListener("scroll", changeHeader);
    return (
        <header className={headerColor ? "active" : ""}>
            <div className='container'>
                <Nav />
            </div>
        </header>
    );
}

export default Header;