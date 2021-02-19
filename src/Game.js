import React, { useEffect, useState } from 'react'
import { Box } from "./components/box";
export const Game = () => {
    const [start, setStart] = useState(false)
    let level = 0;
    if (localStorage.getItem('level')) {
        level = parseInt(localStorage.getItem('level')) || 0;
        if (level > 4) {
            level = 0
            localStorage.setItem('level', 0)
        }
    }
    if (start) {
        console.log('timer begun')
        return (
            <>
                <Box level={level} timelimit={10} />
            </>
        )
    }
    else {
        return (
            <div className="container" style={{ paddingTop: '30vh', paddingLeft: '15vw' }}>
                <h1>The Stroop Color and Word Test</h1>
                <p>Select the boxes whose color is represented by text over it.
                   There are three levels with varied time limit.    
                </p><br /><br />
                <div className="vertical-center">
                    <button className="btn" onClick={(e) => {
                        setStart(true);
                    }}>Let's start the game</button></div>
            </div>
        )
    }
}
