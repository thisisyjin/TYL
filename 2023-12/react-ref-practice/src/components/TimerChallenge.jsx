import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge ({ title, targetTime }) {
    const dialog = useRef();
    
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);



    const handleStart = () => {
      timer.current = setInterval(() => {
        
      }, 10);

      setTimerStarted(true);
    }

    const handleStop = () => {
        setTimerStarted(false); 
        clearTimeout(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                {targetTime} Second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop Challenge' : 'Start Challenge'}
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}