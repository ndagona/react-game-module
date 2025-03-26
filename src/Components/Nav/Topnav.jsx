import React, { useEffect, useState } from 'react';
import './Topnav.css';

function Topnav() {
    const [currentDate, setCurrentDate] = useState({ year: "", month: "", day: "" })
    const [currentTime, setCurrentTime] = useState({ hour: "", minute: "" })
    const getDate = () => {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        setCurrentDate({
            year: year, month: month, day: day
        })
    }

    const getTime = () => {
        const date = new Date()
        const hour = date.getHours()
        const minute = date.getMinutes()
        setCurrentTime({
            hour: hour, minute: minute
        })
    }

    setInterval(() => {
        getTime()
    }, 30000)

    useEffect(() => {
        getDate()
        getTime()
    }, [])

    return (
        <nav className="top_nav">
            <p className="date">
                {Object.keys(currentDate).map((val, ind) => (
                    <p className="calendar" key={`calendar-${ind}`} id={`calendar-${ind}`}>{currentDate[val]}</p>
                ))
                }
            </p>
            <p className="title"> Simplicity At Its Best</p>
            <p className="time">
                {currentTime && Object.keys(currentTime).map((vall, indie) => (
                    <p className="timer" key={`time-${indie}`} id={`time-${indie}`}>{currentTime[vall]}</p>
                ))
                }
            </p>
        </nav>
    )
}

export default Topnav
