import React, { useState } from 'react';
import './Sain.css';

function Main() {
    const [score1, setScore1] = useState(null)
    const [score2, setScore2] = useState(null)
    const [score3, setScore3] = useState(null)
    const [score4, setScore4] = useState(null)
    const [score5, setScore5] = useState(null)
    const [score6, setScore6] = useState(null)
    const [score7, setScore7 ] = useState(null)
    const [score8, setScore8 ] = useState(null)
    const [score9, setScore9 ] = useState(null)
    const settersArri ={1:setScore1,2:setScore2,3:setScore3, 4:setScore4,5:setScore5,6:setScore6,7:setScore7, 8:setScore8, 9:setScore9}

    const mari ={1:score1,2:score2,3:score3, 4:score4,5:score5,6:score6,7:score7, 8:score8, 9:score9}

    const arry = [[1,score1],[2,score2],[3,score3], [4,score4],[5,score5],[6,score6],[7,score7], [8,score8], [9,score9]]

    const handleClick = (row) => {
      if(mari[row] !== null) return
      gameSetter(
        row,"human","X",
      )
      robotics()
    }

    const robotics = () => {
      
      const optionss = arry.filter(row => row[1] == null).map(row => row[0])
      const choice = optionss[Math.floor(Math.random() * optionss.length)]

      gameSetter(
        choice,'bot',"O"
      )

    }

    const gameSetter = (row, player, value) => {
      try{
      settersArri[row](value)
      }
      catch(err){
        console.error(err)
      }
    }

  return (
    <main className="tiki">
        <div className="tit">Tik Tak Toe</div>
        <div className="boxing">
          <section className="line0">

            <section className="zero"
             id='boxerkids'
              onClick={() => {
                handleClick(1)
              }}
            >{score1}</section>
            
            <section className="zero"
             id='boxerkids'
              onClick={() => {
                handleClick(2)
              }}
            >{score2}</section>
            <section className="zero"
             id='boxerkids'
              onClick={() => {
                handleClick(3)
              }}
            >{score3}</section>

          </section>
          <section className="line0">

            <section className="zero"
             id='boxerkids'
              onClick={() => {
                handleClick(4)
              }}
            >{score4}</section>
            
            <section className="zero"
             id='boxerkids'
              onClick={() => {
                handleClick(5)
              }}
            >{score5}</section>
            <section className="zero"
             id='boxerkids'
              onClick={() => {
                handleClick(6)
              }}
            >{score6}</section>

          </section>
          <section className="line0">

            <section className="zero"
             id='boxerkids'
              onClick={() => {
                handleClick(7)
              }}
            >{score7}</section>
            
            <section className="zero"
             id='boxerkids'
              onClick={() => {
                handleClick(8)
              }}
            >{score8}</section>
            <section className="zero"
             id='boxerkids'
              onClick={() => {
                handleClick(9)
              }}
            >{score9}</section>

          </section>
        </div>

    </main>
  )
}

export default Main