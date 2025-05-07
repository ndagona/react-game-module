import React from 'react'
import './Nav.css';
import NavElement from './NavElement';

function Nav({setter}) {
    return (
        <nav className="left_nav">
            <NavElement name="Wordle" setter={setter}/>
            <NavElement name="RPS" setter={setter} />
            <NavElement name="Tik Tak Toe" setter={setter} />
        </nav>
    )
}

export default Nav
