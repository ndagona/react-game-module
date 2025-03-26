import React from 'react'
import './Nav.css';
import NavElement from './NavElement';

function Nav() {
    return (
        <nav className="left_nav">
            <NavElement name="Wordle" />
        </nav>
    )
}

export default Nav
