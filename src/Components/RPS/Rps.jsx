import {useState, useEffect} from 'react';
import './Rps.css';
import {assets, over, raw_assets} from './Assets';

function Rps() {
  const [solution, setSolution] = useState(false);
  const [answers, setAnswers] = useState();
  const  choices = Object.keys(assets).map(row => assets[row]['asset_name']);
  const [state, setState] = useState()
  const generateCompChoice = () => {
    if(choices.length < 1) return
    const item = Math.floor((Math.random() * choices.length));
    return choices[item]
  }

  const handleClick = (e) => {    
    gameLogic(e, generateCompChoice())    
  } 

  const gameLogic = (user_input, comp_input) => {
    const game_data = {
      rock:{ rock:"Draw", paper:"Loose",scissors:"Win" },
      paper:{rock:"Win",paper:"Draw",scissors:"Loose"},
      scissors:{rock:"Loose",paper:"Win",scissors:"Draw"}
    }
    setSolution(game_data[user_input][comp_input])  
    setAnswers([user_input,comp_input])
    setState(over[game_data[user_input][comp_input].toString().toLowerCase()])
  }

  return (
    <div>
      <div className="tit">Rock/ Paper/ Scissor</div>
      <p className="header">Play, Choose fighter below!</p>
      <section className="box_arena1">
        {Object.keys(assets).length > 1 && 
          Object.keys(assets).map((row, ind) => (
            <section 
              className='userInRPS' 
              key={`userInRPS${ind}`}
              onClick={() => {
                handleClick(assets[row]['asset_name'])
              }}>
              <img src={assets[row]['asset']} alt={assets[row]['asset_name']} className='rps_image'/>
              <p className="rps_name">{`${assets[row]['asset_name'][0].toString().toUpperCase()}${assets[row]['asset_name'].slice(1,)}`}</p>
            </section>
          ))
        }
      </section>
      {solution !== false && 

      <section className="ans">
        <section className="game_state_0">
          <img src={state} alt={solution} className="final_game_state" />
          <p className="final_text">You {solution}!</p>
        </section>
        <section className="game_state_1">
          <section className="ngori">
          <img src={raw_assets[answers[1]]} className="final_game_state" />
          <p className="final_text">Bot ({answers[1]})</p>
          </section>
          <section className="ngori">
          <img src={raw_assets[answers[0]]} className="final_game_state" />
          <p className="final_text">You ({answers[0]}) </p>
          </section>
        </section>
      </section>

      }
 
    </div>
  )
}

export default Rps
