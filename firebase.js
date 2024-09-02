// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDhqr8_w6pSpwdwmpANftb7sXsaTPooTc",
  authDomain: "react-auth-tutorial-46ba4.firebaseapp.com",
  projectId: "react-auth-tutorial-46ba4",
  storageBucket: "react-auth-tutorial-46ba4.appspot.com",
  messagingSenderId: "814246913915",
  appId: "1:814246913915:web:1d08c4204e8cad1f97ffde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);