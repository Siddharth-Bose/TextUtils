import "./App.css";
import MyNavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Util from "./Components/Util";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <MyNavBar />
        <Routes>
          <Route exact path="/Home" element={<Home/>}></Route>
          <Route exact path="/Util" element={<Util/>}></Route>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
