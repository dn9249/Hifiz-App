import React, { useState, useEffect } from "react";
import { collection, doc, addDoc } from "firebase/firestore"; 
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";


function Add({ isAuth }) {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
  
    let navigate = useNavigate();
  
    const addStudent = async () => {
      const data = {
        firstName : firstName ,
        lastName : lastName

      };
      

      // try {
      //   const docRef = await addDoc(collection(db, "student"), {
      //     firstName : firstName ,
      //     lastName : lastName
      //   });
      //   console.log("Document written with ID: ", docRef.id);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }

      await addDoc(collection(db, "students"), {
        firstName : firstName ,
        lastName : lastName
      });

      alert('Done')
    };
  
    // useEffect(() => {
    //   if (!isAuth) {
    //     navigate("/");
    //   }
    // }, []);
  
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



  
