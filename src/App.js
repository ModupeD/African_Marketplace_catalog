import "./App.css";
import Women from "./components/Women";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Men from "./components/men";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/women">
            <Women Women={Women} />
          </Route>
          <Route path="/men">
            <Men men={Men} />
          </Route>
          <Route path="/">
            <Women Women={Women} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
