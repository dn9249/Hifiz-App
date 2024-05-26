// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNrTWb6C7v4CxDhFz_2ITxzvSCmzKONr4",
  authDomain: "hifiz-6d40c.firebaseapp.com",
  projectId: "hifiz-6d40c",
  storageBucket: "hifiz-6d40c.appspot.com",
  messagingSenderId: "20024029055",
  appId: "1:20024029055:web:dff7253daec1b89bb0f44a",
  measurementId: "G-RWK6CTVBMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();