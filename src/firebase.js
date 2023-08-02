import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore"
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD0R5VMXpkbikZ6uWyFlVYXwMC2-dBaiI",
  authDomain: "photofolio-app-2b3e5.firebaseapp.com",
  projectId: "photofolio-app-2b3e5",
  storageBucket: "photofolio-app-2b3e5.appspot.com",
  messagingSenderId: "1007389845049",
  appId: "1:1007389845049:web:a395a710881a594f218fe8"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const firestore = firebase.firestore();