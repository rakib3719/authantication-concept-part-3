// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCClCaulEhVDT0ug2jhArZK_ylU4DUYsbQ",
  authDomain: "firbase-concept-recap.firebaseapp.com",
  projectId: "firbase-concept-recap",
  storageBucket: "firbase-concept-recap.appspot.com",
  messagingSenderId: "207351775608",
  appId: "1:207351775608:web:9a4c2419b657790f33c88d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export  default auth;
