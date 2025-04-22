import React from 'react';
import './NavElement.css';

function NavElement({ name , setter}) {
    return (
        <section className="not_sect" key={name} id={name} 
        onClick={() => {setter(name)}}
        >{name}</section>
    )
}

export default NavElement
