import {useState, useEffect} from "react";

function Hello() {
  useEffect(() => {
    console.log("hi~");
    return () => console.log("bye!");
  }, []);
  // useEffect(function () {
  //   console.log("hi~");
  //   return function() {
  //     console.log("bye!");
  //   };
  // }, []);
  return <h1>Hello</h1>
}

function App() {
    // const [counter, setValue] = useState(0);
    // const [keyword, setKeyword] = useState("");
    // const onClick = () => setValue((prev) => prev + 1);
    // const onChange = (event) => setKeyword(event.target.value);
    // console.log("i run all the time");
    // useEffect(() => {
    //   console.log("CALL THE API..");
    // }, []);
    // useEffect(() => {
    //   if (keyword !== "" && keyword.length >= 5) {
    //     console.log("SEARCH KEYWORD", keyword);
    //   }
    // }, [keyword]);
    const [showing, setShowing] = useState(false);
    const onClickShow = () => setShowing((prev) => !prev);
    return ( 
        <div>
          {/* <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
          <h1>{counter}</h1>
          <button onClick={onClick}>Click me</button> */}
          {showing? <Hello /> : null}
          <button onClick={onClickShow}>{showing ? "Hide" : "Show"}</button> 
        </div>
    );
}

export default App;