import React, { useState, useRef, useEffect } from 'react';
import './Word.css';
import axios from 'axios';


function Word() {
    const tempArray = new Array(6).fill(null).map((_) => new Array(5).fill(null))
    const [ans1, setAns1] = useState(tempArray[0])
    const [ans2, setAns2] = useState(tempArray[1])
    const [ans3, setAns3] = useState(tempArray[2])
    const [ans4, setAns4] = useState(tempArray[3])
    const [ans5, setAns5] = useState(tempArray[4])
    const [ans6, setAns6] = useState(tempArray[5])
    const [adis, setAdis] = useState(true)
    const [user_input, setUserIput] = useState('')
    const [level, setlevel] = useState(1)
    const [search, setSearch] = useState("SEVEN".split(""))
    const [over, setOver] = useState(false)
    const db = [ans1, ans2, ans3, ans4, ans5, ans6]

    useEffect(() => {
        axios.get('https://random-word-api.vercel.app/api?words=1&length=5').then(res => {
            setSearch(res.data[0].toUpperCase().split(""))
            setAdis(false)
        }).catch(err => {
            console.error(`Error: ${err}`)
            setAdis(true)
        })
    }, [])

    const checkTrue = (arry) => {
        const Final = [...arry]
        if (Array.isArray(arry)) {
            arry.forEach((val, ind) => {
                if (val === search[ind]) {
                    Final[ind] = `${val}✅`
                }
                else if (search.includes(val)) {
                    Final[ind] = `${val}⚠️`
                }
                else {
                    Final[ind] = `${val}❌`
                }
            })
        }
        return Final;
    }

    const handleInput = (e) => {
        if (user_input.length < 6) {
            setUserIput(e.target.value.toUpperCase())
        }
    }

    const handleSubmit = () => {
        const checkComp = (e) => {
            const him = checkTrue(e).join("")
            if (him.includes("❌")) return
            else if (him.includes("⚠️")) return
            setOver(true)
        }
        if (user_input.length === 5) {
            if (level === 1) {
                setAns1(checkTrue(user_input.split("")))
                setlevel(level + 1)
                setUserIput("")
                checkComp(user_input.split(""))
                return
            }
            else if (level === 2) {
                setAns2(checkTrue(user_input.split("")))
                setUserIput("")
                setlevel(level + 1)
                return checkComp(user_input.split(""))
            }
            else if (level === 3) {
                setAns3(checkTrue(user_input.split("")))
                setUserIput("")
                setlevel(level + 1)
                return checkComp(user_input.split(""))
            }
            else if (level === 4) {
                setAns4(checkTrue(user_input.split("")))
                setUserIput("")
                setlevel(level + 1)
                return checkComp(user_input.split(""))
            }
            else if (level === 5) {
                setAns5(checkTrue(user_input.split("")))
                setUserIput("")
                setlevel(level + 1)
                return checkComp(user_input.split(""))
            }
            else if (level === 6) {
                setAns6(checkTrue(user_input.split("")))
                setUserIput("")
                setlevel(level + 1)
                setOver(true)
                setAdis(true)
                return checkComp(user_input.split(""))
            }
            else if (level > 6) {
                setAdis(true)
                setOver(true)
                return checkComp(user_input.split(""))
            }
        }
        else if (user_input.length < 5) {

        }
        else {
            setUserIput("")
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            return handleSubmit()
        }

    }

    return (
        <div>
            <div className="tit">Worlde</div>
            <section className="box_arena">
                <section className="get_user_input">
                    <input type="text" placeholder='HOVER' id='wordle_input'
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        value={user_input}
                        disabled={adis}
                    />
                    <button className='setsubtle' disabled={adis} onClick={handleSubmit}
                        onKeyDown={handleKeyDown}
                    >ENTER</button>
                </section>
                {!over ?
                    db.map((row, val) => (
                        <section className="one" key={`section-key-${val}`}>
                            {Array.isArray(row) && row.map((sec, ind) => (
                                <p key={`para-key-${ind}`}>{sec}</p>
                            ))}
                        </section>
                    )) :
                    <section className="game_state">
                        <p className="game_over">GAME OVER!!</p>
                        <p className="anwser">Answer was :
                            <span className="score">
                                {search}
                            </span>
                        </p>
                        <p className="prov_t">Your Answers...</p>
                        <section className="prov">
                            {db.map((row) => (
                                <p className="ans">{row.map(el => el.replace("❌", "").replace("✅", "").replace("⚠️", "")).join("") || ""}</p>
                            ))
                            }
                        </section>
                    </section>

                }
            </section>
        </div>
    )
}

export default Word
