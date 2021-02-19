import React, { useState, useEffect } from 'react'
import { colorList } from '../constants/colors'
export let score  = 0;
export let crtcnt = 0;
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
export const Colorbox = (params) => {
    console.log(params.boxId);
    const [isClicked, setisClicked] = useState(false)
    let color = {}
    let colorText = ""
    useEffect(() => {
        if (params.isCorrect === '1') {
            crtcnt++;
        }
    }, [])
    if (isClicked == false) {
        if (params.isCorrect === '1') {
            colorText = colorList.colors[params.iskey]["color"];
            color["backgroundColor"] = colorList.colors[params.iskey]["code"]["hex"];
            if (colorList.colors[params.iskey]["code"]["hex"] === "#000" || colorList.colors[params.iskey]["code"]["hex"] === "#00F" || colorList.colors[params.iskey]["code"]["hex"] === "#4b0082") {
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
                        setisClicked(true);
                    }
                } style={color} className="inner-grid">
                    <div className="inner-square">{colorText}</div>
                </div>
            </>)
        } else {
            console.log(colorList.colors[params.iskey]);
            colorText = colorList.colors[(params.iskey + 1 > 8) ? params.iskey - 1 : params.iskey + 1]["color"];
            color["backgroundColor"] = colorList.colors[params.iskey]["code"]["hex"];
            if (colorList.colors[params.iskey]["code"]["hex"] === "#000" || colorList.colors[params.iskey]["code"]["hex"] === "#00F" || colorList.colors[params.iskey]["code"]["hex"] === "#4b0082") {
                color["color"] = "white"
            }
            return (<>
                <div onClick={
                    (e) => {
                        e.preventDefault();
                        if (selected[params.boxId] === false) {
                            selected[params.boxId] = true;
                            score = score - 1;
                        }
                        console.log(score, selected)
                        setisClicked(true);
                    }
                } style={color} className="inner-grid">
                    <div className="inner-square">{colorText}</div>
                </div>
            </>)
        }
    } else if (params.isCorrect === '0') {
        return (<>
            <div style={{ backgroundColor: 'red' }} className="inner-grid">
                <div className="inner-square">-1</div>
            </div>
        </>)
    }
    else {
        return (
            <div style={{ backgroundColor: 'green' }} className="inner-grid">
                <div className="inner-square">+1</div>
            </div>
        )
    }
}