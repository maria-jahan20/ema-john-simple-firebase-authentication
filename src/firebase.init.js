// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByUSTjkja5TiZliBu2zSSmPmMEyQkTXkQ",
  authDomain: "ema-john-simple-3-29a7a.firebaseapp.com",
  projectId: "ema-john-simple-3-29a7a",
  storageBucket: "ema-john-simple-3-29a7a.appspot.com",
  messagingSenderId: "639633534277",
  appId: "1:639633534277:web:29ff119ebe97a66e77222c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
