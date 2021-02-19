import React, { useEffect, useState } from "react";
import { Colorbox } from "./ColorBox";
import { clock } from "./timer";
import { getRandomInt } from "./rand";
import { Timer } from "./timer";
let timerStarted = false;
export const Box = (prams) => {
    const [timelimit, settimelimit] = useState(prams.timelimit)
    let level = parseInt(localStorage.getItem('level')) || 0;
    useEffect(() => {
        clock(timelimit)
        timerStarted = true
    }, [])
    var l = []
    for (let i = 0; i < 10; i++) {
        let tmp = getRandomInt(0, 8)
        let p = getRandomInt(0, 1)
        l.push([`b${i}`, tmp, `${p}`])
    }
    let k = 1;
    return (<>
        <div className="container" style={{
            paddingTop: "15%"
        }}>
            <div className="row">
                <div className="col-sm"><h1>Level: {parseInt(level) ? parseInt(level) : 0}</h1><br />Time Count Down<Timer time={timelimit} /></div>
                <div className="col">
                    <div className="outer-grid">
                        <div className="outer-square">
                            <Colorbox boxId={l[k++][0]} iskey={l[getRandomInt(0, 8)][1]} isCorrect={l[getRandomInt(0, 8)][2]} />
                            <Colorbox boxId={l[k++][0]} iskey={l[getRandomInt(0, 8)][1]} isCorrect={l[getRandomInt(0, 8)][2]} />
                            <Colorbox boxId={l[k++][0]} iskey={l[getRandomInt(0, 8)][1]} isCorrect={l[getRandomInt(0, 8)][2]} />
                            <Colorbox boxId={l[k++][0]} iskey={l[getRandomInt(0, 8)][1]} isCorrect={l[getRandomInt(0, 8)][2]} />
                            <Colorbox boxId={l[k++][0]} iskey={l[getRandomInt(0, 8)][1]} isCorrect={l[getRandomInt(0, 8)][2]} />
                            <Colorbox boxId={l[k++][0]} iskey={l[getRandomInt(0, 8)][1]} isCorrect={l[getRandomInt(0, 8)][2]} />
                            <Colorbox boxId={l[k++][0]} iskey={l[getRandomInt(0, 8)][1]} isCorrect={l[getRandomInt(0, 8)][2]} />
                            <Colorbox boxId={l[k++][0]} iskey={l[getRandomInt(0, 8)][1]} isCorrect={l[getRandomInt(0, 8)][2]} />
                            <Colorbox boxId={l[k][0]} iskey={l[getRandomInt(0, 8)][1]} isCorrect={l[getRandomInt(0, 8)][2]} />
                        </div>
                    </div>
                </div>
                <div className="col-sm"></div>
            </div>
        </div>
    </>)
}
