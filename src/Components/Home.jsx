import React, { useState } from 'react';
import './Home.css';
import Nav from './Nav/Nav';
import Topnav from './Nav/Topnav';
import Word from './Wordle/Word';
import Rcs from './RPS/Rps';
import Main from './TikTakToe/Main';

function Home() {
    const [currentPage, setCurrentPage] = useState('Tik Tak Toe')
    return (
        <main className="not_main">
            <Topnav />
            <div className="lowa">
                <Nav setter={setCurrentPage} />
                <section className="game_section">
                    {currentPage === "Wordle" && <Word />}
                    {currentPage === "RPS" && <Rcs />}
                    {currentPage === "Tik Tak Toe" && <Main />}
                </section>
            </div>
        </main>
    )
}

export default Home
