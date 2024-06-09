import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function Remove({isAuth}) {

    const postsCollectionRef = collection(db, "student");
    let navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
          navigate("/");
        }
      }, []);
    return(
        <div>
            Remove
        </div>
    )
}

export default Remove