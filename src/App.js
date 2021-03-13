import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import Todos from "./components/Todos";
import Assignments from "./components/Assignments";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/assignments" component={Assignments} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
