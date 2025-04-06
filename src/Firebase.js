// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbsTWkeOFlCGT2-s4tkcQijN-WQ5Hy96M",
  authDomain: "clone-7a529.firebaseapp.com",
  projectId: "clone-7a529",
  storageBucket: "clone-7a529.firebasestorage.app",
  messagingSenderId: "583457744",
  appId: "1:583457744:web:cfd5ba735aa59f284137d5",
  measurementId: "G-769XJYXMQQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
export {auth};