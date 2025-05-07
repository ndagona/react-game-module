import React, { useState } from 'react';
import './Sain.css';

function Main() {
    const pallete = [[1,2,3],[5,6,7],[8,9,10]];
    const [score, setScore ] = useState({
      1:"", 2:"",3:""
    })
    const [plays, setPlays] = useState({ bot:0, human:0 })
    const handleClick = (row, user) => {
      if(score[row] === ""){
        if(user === "human"){
          if(plays['human'] < 3){
            setPlays({...plays,human:plays['human'] + 1})
          setScore({...score, ...{[row]:"X"}})
          }
        }
      }
      console.log(` Im the stone that the builder refused : `)
      console.log(score)
      console.log("______________________________________________")
    }

  return (
    <main className="tiki">
        <div className="tit">Tik Tak Toe</div>
        <div className="boxing">
          <section className="line0">

            <section className="zero"
             id='boxerkids'
              onClick={() => {
                handleClick(1,"human")
              }}
            >{score[1]}</section>
            
            <section className="zero"
             id='boxerkids'
              onClick={() => {
                handleClick(2,"human")
              }}
            >{score[2]}</section>
            <section className="zero"
             id='boxerkids'
              onClick={() => {
                handleClick(3,"human")
              }}
            >{score[3]}</section>

          </section>
        </div>

    </main>
  )
}

export default Main