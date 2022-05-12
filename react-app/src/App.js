import {useState} from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
      event.preventDefault();
      console.log(toDo);
    }
    return ( 
        <div>
          <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} value={toDo} placeholder="Write your todo.." />
            <button>Add To Do</button>
          </form>
        </div>
    );
}

export default App;