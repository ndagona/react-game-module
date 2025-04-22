import React, { useState } from 'react';
import './Home.css';
import Nav from './Nav/Nav';
import Topnav from './Nav/Topnav';
import Word from './Wordle/Word';
import Rcs from './RPS/Rps';

function Home() {
    const [currentPage, setCurrentPage] = useState('Wordle')
    return (
        <main className="not_main">
            <Topnav />
            <div className="lowa">
                <Nav setter={setCurrentPage} />
                <section className="game_section">
                    {currentPage === "Wordle" && <Word />}
                    {currentPage === "RPS" && <Rcs />}
                </section>
            </div>
        </main>
    )
}

export default Home
