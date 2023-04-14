import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);


/*
import React, { useState, useRef } from 'react';

function Timer() {
  const [time, setTime] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  function startCountdown(time) {
    let remainingTime = time;
    console.log(remainingTime);
    const timer = setInterval(() => {
      remainingTime--;
      if (remainingTime < 0) {
        clearInterval(timer);
        setCountdown(null);
        setTime(null);
        setShowCountdown(false);
        setDisabled(false); // enable the input
      } else {
        setCountdown(remainingTime);
      }
    }, 1000);
    timerRef.current = timer;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCountdown(time);
    startCountdown(time);
    setShowCountdown(true); // show the countdown div
    setDisabled(true);
  }

  function handleReset() {
    clearInterval(timerRef.current);
    setCountdown(null);
    setTime(null);
    setShowCountdown(false);
    setDisabled(false);
    inputRef.current.focus();
  }

  function handleStart() {
    clearInterval(timerRef.current);
  }

  const percentage = countdown !== null ? (countdown / time) * 100 : 0;
  console.log('hello', countdown);
  const divStyle = {
    marginLeft: `${(100 - percentage) / 2}%`,
    marginRight: `${(100 - percentage) / 2}%`
  };
  console.log(divStyle);
  console.log(percentage);

  return (
    <div className="main-div">
      <form onSubmit={handleSubmit}>
        <label>Enter time:</label>
        <input
          type="number"
          id="time-input"
          value={time || ''}
          onChange={(event) => setTime(event.target.value)}
          ref={inputRef}
          disabled={disabled}
        />
        <button type="submit" onClick={handleStart}>
          Start
        </button>
      </form>
      {showCountdown && countdown !== null && (
        <div className="show-time">
          Time remaining: {Math.floor(countdown / 3600)}:
          {Math.floor((countdown % 3600) / 60)}:{countdown % 60}
          <button onClick={handleReset}>Reset</button>
          <div className="show-div-width" style={divStyle}>
            {Math.floor(percentage)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Timer;

*/