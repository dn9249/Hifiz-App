import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Grades from "./pages/Grades";
import Remove from "./pages/Remove";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/add"> Add </Link>
        <Link to="/remove"> Remove </Link>
        <Link to="/grades"> Grades </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/remove" element={<Remove />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
