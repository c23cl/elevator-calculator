import React, { useState } from 'react';
import "./App.css";


function App() {
  const [energySelectedButton, setEnergySelectedButton] = useState(3);
  const [athleticSelectedButton, setAthleticSelectedButton] = useState(3);
  const [submitted, setSubmitted] = useState(false)
  const [startFloor, setStartFloor] = useState(0);
  const [endFloor, setEndFloor] = useState(0);

  if (!submitted) {
    return (
      <div className='app'>
        <div className="question">
          <h1>How much energy do you have?</h1>
          <Scale selectedButton={energySelectedButton} setSelectedButton={setEnergySelectedButton} />
        </div>
        <div className="question">
          <h1>How would you rank your athletic ability?</h1>
          <Scale selectedButton={athleticSelectedButton} setSelectedButton={setAthleticSelectedButton} />
        </div>
        <div className="question">
          <h1>Where are you?</h1>
          <FloorDropdown floor={startFloor} setFloor={setStartFloor}/>
        </div>
        <div className="question">
          <h1>Where are you going?</h1>
          <FloorDropdown floor={endFloor} setFloor={setEndFloor}/>
        </div>
        <button className="buttonGo" onClick={() => setSubmitted(true)}>GO</button>
      </div>
    );
  } else {
    return (
      <div className='app'>
        <button className="buttonBack" onClick={() => setSubmitted(false)}>Go back</button>
        <br />
        <h1>You should {endFloor - startFloor === 0 ? "stay where you are ... why are you even on this app?????" : endFloor - startFloor < 5 ? "take the stairs" : endFloor - startFloor > 0.75 * athleticSelectedButton + 1.25 * energySelectedButton ? "take the elevator" : "take the stairs"}</h1>
        <br/>
        <h2>{endFloor === startFloor? null : `for your ${endFloor - startFloor} flight trip`}</h2>
      </div>
    );
  }
}

function Scale(props) {  
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className='scale'>
      {numbers.map((x, _) => <ScaleButton key={x} value={x} selectedButton={props.selectedButton} setSelectedButton={props.setSelectedButton}></ScaleButton>)}
    </div>
  );
}

function ScaleButton(props) {
  return (
    <button className={`button button${props.value} ${props.selectedButton === props.value ? 'selectedButton' : ''}`} onClick={() => props.setSelectedButton(props.value)}>
      {props.value}
    </button>
  );
}

function FloorDropdown(props) {
  const floorList = ["L","2","3","4","5","6","7","8","9","10","10M","11","12","13","14"];
  
  return (
      <select className="dropdown" value={props.floor} onChange={(x) => props.setFloor(x.target.value)}>
        {floorList.map((x,i) => <option key={i} value={i}>{x}</option>)}
      </select>
  )
}



export default App;