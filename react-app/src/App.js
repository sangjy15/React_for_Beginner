import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev)=> prev + 1);
    const [time, setTime] = useState(600);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const countdown = setInterval(() => {
          if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1);
          }
          if (parseInt(seconds) === 0) {
            if (parseInt(minutes) === 0) {
                clearInterval(countdown);
            } else {
              setMinutes(parseInt(minutes) - 1);
              setSeconds(59);
            }
          }
        }, 1000);
        return () => clearInterval(countdown);
      }, [minutes, seconds]);
      useEffect(() => {
        const setTimer = setInterval(() => {
          setMin(parseInt(time/60));
            setSec(time%60);
            setTime((prev) => prev - 1); 
            if (time < 0) {
                clearInterval();
            }
        }, 1000);
        return () => clearInterval(setTimer);
      })
    return ( 
        <div>
            <h1>{min} : {sec} </h1>
            <h1 className={styles.title}>Timer</h1>
            {/* <Button text={"Continue"}/> */}
            {/* <h1>{counter}</h1>
            <button onClick={onClick}>click me</button> */}
            {/* <button onClick={setTimer}>Timer</button> */}
            <div>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
        </div>
    );
}

export default App;