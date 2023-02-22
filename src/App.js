import React, { useState } from 'react';
import "./App.css";


function App() {
  const [energySelectedButton, setEnergySelectedButton] = useState(null);
  const [athleticSelectedButton, setAthleticSelectedButton] = useState(null);
  const [submitted, setSubmitted] = useState(false)

  if (!submitted) {
    return (
      <div className='app'>
        <h1>How much energy do you have?</h1>
        <Scale selectedButton={energySelectedButton} setSelectedButton={setEnergySelectedButton} />
        <h1>How would you rank your athletic ability?</h1>
        <Scale selectedButton={athleticSelectedButton} setSelectedButton={setAthleticSelectedButton} />
        <h1>Where are you?</h1>
        <FloorDropdown />
        <h1>Where are you going?</h1>
        <FloorDropdown />
        <button onClick={() => setSubmitted(true)}>GO</button>
      </div>
    );
  } else {
    return (
      <div>
        Energy: {energySelectedButton}
        <br/>
        Athletic ability: {athleticSelectedButton}
      </div>
    );
  }
}

function Scale(props) {
  return (
    <div className='scale'>
      <ScaleButton value={1} selectedButton={props.selectedButton} setSelectedButton={props.setSelectedButton}></ScaleButton>
      <ScaleButton value={2} selectedButton={props.selectedButton} setSelectedButton={props.setSelectedButton}></ScaleButton>
      <ScaleButton value={3} selectedButton={props.selectedButton} setSelectedButton={props.setSelectedButton}></ScaleButton>
      <ScaleButton value={4} selectedButton={props.selectedButton} setSelectedButton={props.setSelectedButton}></ScaleButton>
      <ScaleButton value={5} selectedButton={props.selectedButton} setSelectedButton={props.setSelectedButton}></ScaleButton>
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

function FloorDropdown() {
  return (
    <div>
      hi
    </div>
  );
}



export default App;