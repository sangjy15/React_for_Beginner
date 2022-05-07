import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev)=> prev + 1);
    const [time, setTime] = useState(600);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const setTimer = () => {
        setMin(parseInt(time/60));
            setSec(time%60);
            console.log(min);    
            console.log(sec);
            setTime((prev) => prev - 1); 
            if (time < 0) {
                clearInterval();
            }
        // setInterval(function() {
        //     setMin(parseInt(time/60));
        //     setSec(time%60);
        //     console.log(min);    
        //     console.log(sec);
        //     setTime((prev) => prev - 1); 
        //     if (time < 0) {
        //         clearInterval();
        //     }
        // }, 1000);
    }
    return ( 
        <div>
            <h1>{min} : {sec} </h1>
            <h1 className={styles.title}>Timer</h1>
            {/* <Button text={"Continue"}/> */}
            {/* <h1>{counter}</h1>
            <button onClick={onClick}>click me</button> */}
            <button onClick={setTimer}>Timer</button>
        </div>
    );
}

export default App;