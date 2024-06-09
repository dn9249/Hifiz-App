import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";


function Add({ isAuth }) {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
  
    const sudentCollectionRef = collection(db, "student");
    let navigate = useNavigate();
  
    const addStudent = async () => {
      await addDoc(sudentCollectionRef, {
        firstName,
        lastName
      });
      navigate("/home");
    };
  
    useEffect(() => {
      if (!isAuth) {
        navigate("/");
      }
    }, []);
  
    return (
      <div className="addPage">
        <div className="cpContainer">
          <h1>Add Student</h1>
          <div className="inputGp">
            <label> First Name:</label>
            <input
              placeholder="First Name"
              onChange={(event) => {
                setfirstName(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label> Last Name:</label>
            <input
              placeholder="Last Name"
              onChange={(event) => {
                setlastName(event.target.value);
              }}
            />
          </div>
          <button onClick={addStudent}> Submit Post</button>
        </div>
      </div>
    );
  }  

export default Add



  
