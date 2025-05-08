// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFr0plsynCs46gzBc3Z15Kp3OarzSqJf4",
  authDomain: "ph-firebase-one.firebaseapp.com",
  projectId: "ph-firebase-one",
  storageBucket: "ph-firebase-one.firebasestorage.app",
  messagingSenderId: "562679682247",
  appId: "1:562679682247:web:eae8db07d06e9882eadae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);