import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev)=> prev + 1);
    console.log("I run all the time");
    const iRunOnlyOne = () => {
        console.log("I run only once");
    }
    useEffect(iRunOnlyOne, []);
    return ( 
        <div>
            <h1 className={styles.title}>Off day..</h1>
            <Button text={"Continue"}/>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;