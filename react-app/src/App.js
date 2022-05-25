import {
    BrowerRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
    return <Router>
        <Switch>
            <Route>
                <Detail path ="/movie" />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>;
}

export default App;