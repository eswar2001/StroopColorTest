import React, { useEffect } from 'react'
import { score, crtcnt } from './ColorBox'
var myTimer;
//state gets refreshed
export const Timer = (params) => {
    const [counter, setCounter] = React.useState(params.time);
    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
    return (<p>{counter}</p>)
}

//state dosent get refreshed
export const clock = (timelimit) => {
    let c = parseInt(timelimit)
    myTimer = setInterval(myClock, 1000);
    function myClock() {
        --c
        var seconds = c % 60;
        var secondsInMinutes = (c - seconds) / 60;
        var minutes = secondsInMinutes % 60;
        var hours = (secondsInMinutes - minutes) / 60;
        console.log(hours + ":" + minutes + ":" + seconds)
        if (c == 0) {
            clearInterval(myTimer);
            let level = localStorage.getItem('level') || 0;
            if (parseInt(level) == 3) {
                localStorage.setItem('level', 0)
            }
            localStorage.setItem('level', parseInt(level) + 1)
            alert(`Well Played you score is ${score}/${crtcnt} `)
            window.location.reload();
        }
    }
}