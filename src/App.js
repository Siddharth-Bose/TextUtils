import "./App.css";
import MyNavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Util from "./Components/Util";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <MyNavBar />
        <Router>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/About">
            <Home />
          </Route>
          <Route path="try-it-out">
            <Util />
          </Route>
        </Router>
    </>
  );
}

export default App;
