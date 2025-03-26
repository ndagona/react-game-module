import React from 'react';
import './Home.css';
import Nav from './Nav/Nav';
import Topnav from './Nav/Topnav';

function Home() {
    return (
        <main className="not_main">
            <Topnav />
            <div className="lowa">
                <Nav />
            </div>
        </main>
    )
}

export default Home
