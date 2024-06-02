import React from "react";
import { auth, provider } from "../firebase-config";
import {signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";


function Login({setIsAuth}) {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
          localStorage.setItem("Auth", true);
          setIsAuth(true);
          navigate("/home");
        });
      };

    return(
        <div className='loginPage'> 
            <p>
                Sign in with Google to Continue
            </p>
            <button className="login-with-Google-btn" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
        </div>
    )
}

export default Login