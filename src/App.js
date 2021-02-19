import './App.css';
import { colorList } from './constants/colors'
import React, { useRef, useState, useEffect } from 'react'
let timerStarted = false;
var myTimer;
let score = 0;
let count = 0;
let selected = {
  "b1": false,
  "b2": false,
  "b3": false,
  "b4": false,
  "b5": false,
  "b6": false,
  "b7": false,
  "b8": false,
  "b9": false
}
function App() {
  return (
    <>
      <Game />
    </>
  );
}
function Game() {
  const [start, setStart] = useState(false)
  if (start) {
    clock()
    timerStarted = true
    console.log('timer begun')
    return (
      <><Box /></>
    )
  }
  else {
    return (
      <div className="vertical-center">
        <button onClick={(e) => {
          setStart(true);
        }}>Let's start the game</button></div>
    )
  }
}
function Box() {
  let data = {
    1: [
      <Colorbox boxId={"b1"} isCorrect="1" />,
      <Colorbox boxId={"b2"} isCorrect="0" />,
      <Colorbox boxId={"b3"} isCorrect="0" />,
      <Colorbox boxId={"b4"} isCorrect="1" />,
      <Colorbox boxId={"b5"} isCorrect="0" />,
      <Colorbox boxId={"b6"} isCorrect="1" />,
      <Colorbox boxId={"b7"} isCorrect="0" />,
      <Colorbox boxId={"b8"} isCorrect="1" />,
      <Colorbox boxId={"b9"} isCorrect="1" />
    ],
    2: [
      <Colorbox boxId={"b1"} isCorrect="0" />,
      <Colorbox boxId={"b2"} isCorrect="1" />,
      <Colorbox boxId={"b3"} isCorrect="0" />,
      <Colorbox boxId={"b4"} isCorrect="1" />,
      <Colorbox boxId={"b5"} isCorrect="0" />,
      <Colorbox boxId={"b6"} isCorrect="1" />,
      <Colorbox boxId={"b7"} isCorrect="0" />,
      <Colorbox boxId={"b8"} isCorrect="1" />,
      <Colorbox boxId={"b9"} isCorrect="1" />
    ],
    3: [
      <Colorbox boxId={"b1"} isCorrect="1" />,
      <Colorbox boxId={"b2"} isCorrect="0" />,
      <Colorbox boxId={"b3"} isCorrect="0" />,
      <Colorbox boxId={"b4"} isCorrect="1" />,
      <Colorbox boxId={"b5"} isCorrect="1" />,
      <Colorbox boxId={"b6"} isCorrect="1" />,
      <Colorbox boxId={"b7"} isCorrect="0" />,
      <Colorbox boxId={"b8"} isCorrect="1" />,
      <Colorbox boxId={"b9"} isCorrect="1" />
    ]
  }
  return (<>
    <div className="container" style={{
      paddingTop: "15%"
    }}>
      <div className="row">
        <div className="col-sm"></div>
        <div className="col">
          <div className="outer-grid">
            <div className="outer-square">
              {data[Math.floor(Math.random() * (3 - 1 + 1)) + 1]}
            </div>
          </div>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  </>)
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function clock() {
  myTimer = setInterval(myClock, 1000);
  var c = 10;
  function myClock() {
    --c
    var seconds = c % 60;
    var secondsInMinutes = (c - seconds) / 60;
    var minutes = secondsInMinutes % 60;
    var hours = (secondsInMinutes - minutes) / 60;
    console.clear();
    console.log(hours + ":" + minutes + ":" + seconds)
    if (c == 0) {
      clearInterval(myTimer);
      alert(`Well Played your score is ${score}/5`)
      window.location.reload();
    }
  }
}
function Colorbox(params) {
  let color = {}
  let colorText = ""
  if (params.isCorrect === '1') {
    const key = getRandomInt(0, 8);
    colorText = colorList.colors[key]["color"];
    color["backgroundColor"] = colorList.colors[key]["code"]["hex"];
    if (colorList.colors[key]["code"]["hex"] === "#000" || colorList.colors[key]["code"]["hex"] === "#00F" || colorList.colors[key]["code"]["hex"] === "#4b0082") {
      color["color"] = "white"
    }
    return (<>
      <div onClick={
        (e) => {
          e.preventDefault();
          if (selected[params.boxId] === false) {
            selected[params.boxId] = true;
            score = score + 1;
          }
          console.log(score, selected)
        }
      } style={color} className="inner-grid">
        <div className="inner-square">{colorText}</div>
      </div>
    </>)
  } else {
    const key = getRandomInt(0, 8);
    console.log(colorList.colors[key]);
    colorText = colorList.colors[(key + 1 > 8) ? key - 1 : key + 1]["color"];
    color["backgroundColor"] = colorList.colors[key]["code"]["hex"];
    if (colorList.colors[key]["code"]["hex"] === "#000" || colorList.colors[key]["code"]["hex"] === "#00F" || colorList.colors[key]["code"]["hex"] === "#4b0082") {
      color["color"] = "white"
    }
    return (<>
      <div style={color} className="inner-grid">
        <div className="inner-square">{colorText}</div>
      </div>
    </>)
  }
}
export default App;
