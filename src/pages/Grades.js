import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function Grades({isAuth}) {

    let navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
          navigate("/");
        }
      }, []);


    return(
        <div>
            Grades
        </div>
    )
}

export default Grades