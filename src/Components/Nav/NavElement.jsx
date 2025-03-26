import React from 'react';
import './NavElement.css';

function NavElement({ name }) {
    return (
        <section className="not_sect" key={name} id={name}>{name}</section>
    )
}

export default NavElement
