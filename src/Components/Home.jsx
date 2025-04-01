import React, { useState } from 'react';
import './Home.css';
import Nav from './Nav/Nav';
import Topnav from './Nav/Topnav';
import Word from './Wordle/Word';

function Home() {
    const [currentPage, setCurrentPage] = useState('Wordle')
    return (
        <main className="not_main">
            <Topnav />
            <div className="lowa">
                <Nav setter={setCurrentPage} />
                <section className="game_section">
                    {currentPage === "Wordle" && <Word />}
                </section>
            </div>
        </main>
    )
}

export default Home
