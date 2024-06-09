import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Grades from "./pages/Grades";
import Remove from "./pages/Remove";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/home"> Home </Link>
        {!isAuth ? (
          <Link to="/"> Login </Link>
        ) : (
          <>
            <Link to="/remove"> Remove </Link>
            <Link to="/add"> Add </Link>
            <Link to="/grades"> Grades </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add isAuth={isAuth}/>} />
        <Route path="/remove" element={<Remove isAuth={isAuth}/>} />
        <Route path="/grades" element={<Grades isAuth={isAuth}/>} />
        <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
