// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBsnZKx-fKn41QMoznc6_0WPsdAq-oyrU",
  authDomain: "phonemania-5fe51.firebaseapp.com",
  projectId: "phonemania-5fe51",
  storageBucket: "phonemania-5fe51.firebasestorage.app",
  messagingSenderId: "1098188691153",
  appId: "1:1098188691153:web:8bfd3ca7b96ca7981897f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);