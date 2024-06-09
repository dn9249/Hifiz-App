import React, { useState, useEffect } from "react";
import { doc, deleteDoc, collection, query, where, getDocs  } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

await deleteDoc(doc(db, "cities", "DC"));


function Remove({isAuth}) {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
  
    const sudentCollectionRef = collection(db, "student");
    let navigate = useNavigate();



    const removeStudent = async () => {
        async function getData() {
            const studentDoc = await db.collection('student').doc(firstName).get();
            console.log(studentDoc.data().firstName);
        }
        getData();
      };
    
    useEffect(() => {
      if (!isAuth) {
        navigate("/");
      }
    }, []);
  
    return (
      <div className="addPage">
        <div className="cpContainer">
          <h1>Remove Student</h1>
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
          <button onClick={removeStudent}> Submit Post</button>
        </div>
      </div>
    );
  }  

export default Remove